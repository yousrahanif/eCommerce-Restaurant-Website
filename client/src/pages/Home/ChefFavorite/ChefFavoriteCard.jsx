import { Link } from "react-router-dom";



const ChefFavoriteCard = ({chefFav}) => {
    const {name, image,price, recipe}=chefFav;
    return (
        <div className="card w-96 bg-yellow-50  shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image}   alt="" className="rounded-xl"
    style={{ width: '300px', height: '250px' }} />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <Link>
      <button className="btn btn-warning  border-0 border-b-8">Add to Cart</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default ChefFavoriteCard;