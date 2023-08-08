import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ArrowGoTop from '../public/assets/svg/arrow-up.svg';

const GoTop = () => {
    const [thePosition, setThePosition] = useState(false);


    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 1500) {
                setThePosition(true);
            } else {
                setThePosition(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        (thePosition && (
            <div className="go-top" onClick={scrollToTop}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
                </svg>
                {/* <Image
                    priority
                    className='go-top-btn'
                    src={ArrowGoTop}
                    onClick={scrollToTop}
                    width='30'
                    height='30'
                    alt='Go top button'
                /> */}
            </div>
        )) || <></>
    );
};

export default GoTop;
