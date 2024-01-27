import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import './CheckoutForm.css'

const CheckoutForm = ({cart,price}) => {
    const stripe=useStripe();
    const elements = useElements();
    const [axiosSecure]=useAxiosSecure()
    const [cardError, setCardError]=useState('')
    const[clientSecret, setClientSecret]=useState('')
    const [processing, setProcessing]=useState(false)
    const [transctionId, setTransctionId]=useState('')
    const {user}=useContext(AuthContext)


useEffect(()=>{
    if(price>0){
        axiosSecure.post('/create-payment-intent', {price})
        .then(res=>{
            // console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
    
    }
  
},[price, axiosSecure])


    const handleSubmit = async(event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement)
        if(card===null){
            return
        }
        const {error} =await stripe.createPaymentMethod({
            type: 'card', 
            card

        })
        if(error){
            console.log('error', error)
            setCardError(error.message)
        }
        else{
            setCardError('')
            // console.log('payment', paymentMethod)
            
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email:user?.email || 'unknown', 
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if(confirmError){
            console.log(confirmError)
        }
        console.log(paymentIntent)
        setProcessing(false)
        if(paymentIntent.status==='succeeded'){
            setTransctionId(paymentIntent.id)
            //saving the payment info in the server
            const payment={email: user?.email, transctionId: paymentIntent.id, 
                price,
                date: new Date(),
                quantity:cart.length,
                cartItems: cart.map(item=>item._id),
                menuItems: cart.map(item=>item.menuItemId),
                orderService: 'service pending',
                itemNames: cart.map(item=>item.name)
            }
            axiosSecure.post('/payments', payment)
            .then(res=>{
                console.log(res.data)
                if(res.data.result.insertedId){
                    // display confirm
                }
            })
        }


        

    }
    return (
        <>
        
        <form   onSubmit={handleSubmit} className="w-2/3 m-8">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-outline btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret ||processing}>
          Pay
        </button>
      </form>
      {
        cardError && <p className="text-red-600 ml-4">{cardError}</p>
      }
      {transctionId && <p className="text-green-600">Transaction Complete with Transaction id: {transctionId}</p>}
        
        
        </>
       
    );
};

export default CheckoutForm;