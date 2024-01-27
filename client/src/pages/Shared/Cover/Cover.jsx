
import { Parallax } from 'react-parallax';
const Cover = ({img, title}) => {
    return (

        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="Our Menu"
        strength={-200}
    >
        <div className="hero min-h-[700px]" >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">Discover a diverse range of halal dishes crafted with passion and authenticity. From appetizers to desserts, our menu promises a delightful culinary journey</p>
            
          </div>
        </div>
      </div>
    </Parallax>
       
    );
};

export default Cover;