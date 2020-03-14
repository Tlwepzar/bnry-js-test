import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip'
import './slider.scss';
import ImgComp from './ImgComp';

import i1 from './pics/1.jpg';
import i2 from './pics/2.jpg';
import i3 from './pics/3.jpg';
import i4 from './pics/4.jpg';
import i5 from './pics/5.jpg';

function Slider() {
    // array component to show slides
    // number of sldes
    let sliderArr = [
        <ImgComp src={i1} />,
        <ImgComp src={i2} />,
        <ImgComp src={i3} />,
        <ImgComp src={i4} />,
        <ImgComp src={i5} />
    ];
    const [x, setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    };

    return (
        <div className="slider">
            {
                sliderArr.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                            <div>
                                {item}
                            </div>
                            <div>
                                <p>slide {index + 1}</p>
                            </div>
                        </div>
                    )
                })
            }
            {/* navigation buttons */}

            <button id="goLeft" onClick={goLeft}>
                <i className="fas fa-chevron-left" data-tip="previous"></i>
                <ReactTooltip />
            </button>

            <button id="goRight" onClick={goRight}>
                <i className="fas fa-chevron-right" data-tip="next"></i>
                <ReactTooltip />
            </button>
        </div>
    )
}

export default Slider;