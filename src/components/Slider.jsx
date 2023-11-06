import React, { useState } from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import Availability from './Availability';
const Slider = () => {
    const [index,setIndex]=useState(0);

    const images = [
        "https://i.ibb.co/VQNsncc/parallax-02.jpg",
        "https://i.ibb.co/z21wdF6/image-slide-01.jpg",
        "https://i.ibb.co/qkv1wnK/parallax-01.jpg",
    ]
    setTimeout(() => {
        setIndex(index+1);
        if(index===images.length-1){
            setIndex(0);
        }
        

    },5000)
    return (
        <div>
            {/* <TransitionGroup>
                <CSSTransition key={images[index]}
                timeout={3000}
                classNames={'zoom-slider'}
                > */}
                    
                {/* </CSSTransition>
            </TransitionGroup> */}
            {/* <div className='relative z-10'> */}

            <img src={images[index]}  alt="" />

            {/* <Availability></Availability> */}

            {/* </div> */}
            
            

            

        </div>
    );
};

export default Slider;