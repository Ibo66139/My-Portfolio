import React from 'react';
const Projectdetails = ({ title, image, text, alt, onBack, }) => {
  return (
    <div className='Projectdetails-Con zoom-in '>
    <div className='Display-Flex flex-direction Con'>
   
            <button className="btn back absolute" onClick={onBack}>Zurück</button>
            <h2>{title}</h2>
        
        
        <img src={image} alt={alt} className='img' />
       
        <p>{text}</p>
        
    </div>
    </div>
  );
};


export default Projectdetails