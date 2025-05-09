import React from 'react';

const Projectdetails = ({title,image,text,alt})=>{


    
    
return(

    <div className='Projectdetails-Con zoom-in '>
        <h2>{title}</h2>
        <img src={image} alt={alt} />
        <div>
            <p>{text}</p>
        </div>
    </div>
);





};

export default Projectdetails