import React, { useState } from 'react'
// import Carousel from 'react-bootstrap/Carousel'
// import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import * as S from './styles';
import styles from './Slideshow.module.css'
import { css, jsx } from "@emotion/core";
import BlessNestLogo from '../../assets/images/KIMRGB.svg'

const SlideShow = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <S.Wrapper>
            <Carousel autoPlay showThumbs={false} showIndicators={false} infiniteLoop stopOnHover showStatus={false} swipeable className={styles.carousel}>
                <div style={{ height: '100%' }}>
                    <S.Image src={require("../../assets/images/house1/68627283_2176254759151315_6699309530401996800_n.jpg")} />
                    {/* <img src={require("../../assets/images/house1/68627283_2176254759151315_6699309530401996800_n.jpg")} style={{ height: '100%' }} /> */}
                    {/* <S.Legend >
                        <img src={BlessNestLogo} css={css`width: 700px; height: 500px; margin-left: auto; margin-right: auto; overflow-y: visible !important; @media(max-width: 600px {width: 600px; height: 500px;})`} />
                    </S.Legend> */}
                    {/* <S.Legend className="legend">Bring life to homes and get more money from your investment</S.Legend> */}
                    {/* <p className="legend">Bring life to homes and get more money from your investment</p> */}
                    {/* <p>Test</p> */}
                </div>
                <div>
                    <S.Image src={require("../../assets/images/house1/69065739_2176254429151348_2497317508877385728_n.jpg")} />
                    {/* <S.Legend >
                        <img src={BlessNestLogo} css={css`width: 700px; height: 500px; margin-left: auto; margin-right: auto; @media(max-width: 600px {width: 600px; height: 500px; overflow-y: visible;})`} />
                    </S.Legend> */}
                    {/* <S.Legend className="legend">See how Bless Our Nest can help you today!</S.Legend> */}
                    {/* <img src={require("../../assets/images/house1/69065739_2176254429151348_2497317508877385728_n.jpg")} /> */}
                    {/* <p className="legend">Legend 2</p> */}
                </div>
            </Carousel>
            <S.Legend >
                <img src={BlessNestLogo} css={css`width: 700px; height: 500px; margin-left: auto; margin-right: auto; overflow-y: visible !important; @media(max-width: 600px) {width: 400px; height: 300px;})`} />
            </S.Legend>
        </S.Wrapper>
    );
    // return (
    //     <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: 600 }}>
    //         <Carousel.Item>
    //             <img
    //                 className="d-block w-100"
    //                 src="holder.js/800x400?text=First slide&bg=373940"
    //                 alt="First slide"
    //             />
    //             <Carousel.Caption>
    //                 <h3 style={{ color: 'black' }}>First slide label</h3>
    //                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //             </Carousel.Caption>
    //         </Carousel.Item>
    //         <Carousel.Item>
    //             <img
    //                 className="d-block w-100"
    //                 src="holder.js/800x400?text=Second slide&bg=282c34"
    //                 alt="Second slide"
    //             />

    //             <Carousel.Caption>
    //                 <h3>Second slide label</h3>
    //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //             </Carousel.Caption>
    //         </Carousel.Item>
    //         <Carousel.Item>
    //             <img
    //                 className="d-block w-100"
    //                 src="holder.js/800x400?text=Third slide&bg=20232a"
    //                 alt="Third slide"
    //             />

    //             <Carousel.Caption>
    //                 <h3>Third slide label</h3>
    //                 <p>
    //                     Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //               </p>
    //             </Carousel.Caption>
    //         </Carousel.Item>
    //     </Carousel>
    // );
}

export default SlideShow
