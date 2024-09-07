/* eslint-disable no-unused-vars */
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from './Cards';

function Freebook() {
    const filterData = list.filter((data) => data.category === 'Free');
    console.log('Filtered Data', filterData);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,   //agr 1024 px ka h to 3 dikhenge 600 ka to 2 and so on
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
        ],
    };
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 text-black dark:bg-gray-950 dark:text-white'>
                <div>
                    <h1 className='font-semibold text-2xl pb-2 mt-7'>Free Offered Courses</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, facere laborum quidem dicta, repellat debitis nulla maiores sint delectus illo veritatis non, quos incidunt. Incidunt ab omnis eveniet voluptates quasi.</p>
                </div>

                <div>
                    <Slider {...settings}>
                        {filterData.map((item)=>(
                            <Cards item={item} key={item.id}/>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebook