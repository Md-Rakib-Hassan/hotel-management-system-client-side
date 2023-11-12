import { useEffect, useState } from 'react';
import useAxios from '../customHooks/useAxios';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { Helmet } from 'react-helmet';

const Gallery = () => {
    const axios = useAxios();
    const [gallery_images, setGalleryImages] = useState([]);

    useEffect(() => {
        axios.get('/galary')
            .then(res => setGalleryImages(res.data[0].gallery_images));
    }, [axios]);

    console.log(gallery_images);
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };


    return (
        <div className='mx-auto mt-24'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>BookHotel | Gallery</title>

            </Helmet>

            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="custom-wrapper-class flex flex-wrap gap-5 justify-center"
            
            >


                {gallery_images.map((img,indx)=><a key={indx} href={img}>
                    <img width={250}  src={img} />
                </a>)}
                
               
                
            </LightGallery>

        </div>
    );
};

export default Gallery;