import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ArrowGoTop from '../public/assets/svg/arrow-up.svg';

const GoTop = ({ skin }) => {
    const [thePosition, setThePosition] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 740) {
                setThePosition(true);
            } else {
                setThePosition(false);
            }
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [skin]); // Ri-rendera' il componente quando la prop 'skin' cambia

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        (thePosition && (
            <div className={`go-top ${skin === 'light' ? 'light-skin' : 'dark-skin'}`}>
                <Image
                    priority
                    className='go-top-btn'
                    src={ArrowGoTop}
                    onClick={scrollToTop}
                    width='30'
                    height='30'
                    alt='Go top button'
                />
            </div>
        )) || <></>
    );
};

export default GoTop;
