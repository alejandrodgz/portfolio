import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import University from "../../style/pictures/nacionalU.jpg"
import Holberton from "../../style/pictures/holberton.jpg"
import Ec from "../../style/pictures/ec.jpg"

const CarouselEdu = () => {

    return(
        <>
        <div className="carouselEdu">
            <Carousel className='carouselEdu-container'>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={University}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className='textOpa'>National University of Colombia</h3>
                    <p className='textOpa'>The place where I acomplish my Professional Degree, It is one of the best Universities of Colombia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Holberton}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 className='textOpa'>Holberton School</h3>
                    <p className='textOpa'>Where I found my real passion, coding is one of the things that I enjoy the most, Since I started in this world I Keep Learning and enjoying every day</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Ec}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className='textOpa'>Ec English Australia</h3>
                    <p className='textOpa'>
                        I lived in Australia for one year, where I could improve my English skills.
                        I have experience Working for Foreing Companies 
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </>
    )
}

export default CarouselEdu;