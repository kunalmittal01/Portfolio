import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import homeImage from '../assets/images/home-img.png';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
   
    const options = {
      strings: [
        'Welcome to my portfolio!',
        'Software Developer.',
        'MERN Stack Developer.',
        'I love creating web applications.',
      ],
      typeSpeed: 100,      
      backSpeed: 50,      
      loop: true,        
      showCursor: false,       
    };
   
    typedRef.current = new Typed('.typed', options);
    
    return () => {
      typedRef.current.destroy();
    };
  }, []);

    return (
        <div className="homepage pt-28 flex justify-center">
            <div className="home-content flex flex-col gap-14 md:gap-0 md:flex-row items-center">
                <div className="description w-5/6 md:w-1/2 flex flex-col md:items-start gap-5 md:px-20">
                    <p className='text-4xl md:text-5xl text-left text-white'>Hi There! <span className="sayHi">👋🏻</span></p>
                    <p className='text-4xl md:text-5xl text-left text-white'>I am <span className='km'>Kunal Mittal</span></p>
                    <div className="text-4xl typed md:text-5xl text-left mt-14 km"></div>
                </div>
                <div className="home-image w-3/4 md:w-1/3" >
                    <img className="w-full" src={homeImage} alt=""/>
                </div>    
            </div>
        </div>
    )
}

export default Home;