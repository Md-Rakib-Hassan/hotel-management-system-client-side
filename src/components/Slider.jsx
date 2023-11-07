import { useEffect, useState } from 'react';
import useAxios from '../customHooks/useAxios'
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import Availability from './Availability';
const Slider = () => {
    const [index, setIndex] = useState(0);
    const axios = useAxios();
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('/basic-data')
        .then(res => setImages(res.data[0].slide_images));

    },[axios])

   



    setTimeout(() => {
        setIndex(index + 1);
        if (index === images.length - 1) {
            setIndex(0);
        }


    }, 5000)
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

            <img src={images[index]} alt="" />

            {/* <Availability></Availability> */}

            {/* </div> */}





        </div>
    );
};

export default Slider;