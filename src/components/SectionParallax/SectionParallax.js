import React, { useEffect, useState, useRef } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import BlessNestLogo from '../../assets/images/KIMRGB.svg'
import DesignIcon from '../../assets/images/interior-design.svg'
import MoneyIcon from '../../assets/images/030-banknote.svg'
// import MoneyIcon from '../../assets/images/017-residential.svg'
import SaleIcon from '../../assets/images/035-sold.svg'
// import SaleIcon from '../../assets/images/042-sale.svg'
import styles from './parallax.module.css';

const ANIM_SETTINGS = {
  ticks: 1.75,
  ticksTransform: [0, 1],
  ticksScale: [0, 1],
  valuesScale: [1, 0.7],
  valuesTransform: [0, -40],
};
var scrollProgress=0;
let setAnimation = (scrollProgress, ticks, values, stopOnTopRange) => {
  let animationValue = values[0];
  let delta = values[0] - values[1];
  let _math =
    values[0] - ((scrollProgress - ticks[0]) / (ticks[1] - ticks[0])) * delta;

  if (scrollProgress > ticks[0]) {
    if (scrollProgress >= ticks[1] && stopOnTopRange) {
      animationValue = values[1];
    } else {
      animationValue = _math;
    }
  }

  return animationValue;
};
let setOpacity = (tick, scrollProgress, isLast) => {
  let deviation = 0.25;
  let saturation = 3;
  if (scrollProgress <= tick - deviation) {
    return 0;
  }
  if (scrollProgress > tick - deviation && scrollProgress < tick) {
    return (-saturation * (tick - deviation - scrollProgress)) / deviation;
  }
  if (scrollProgress >= tick && scrollProgress <= tick + deviation && !isLast) {
    return (saturation * (tick + deviation - scrollProgress)) / deviation;
  }
  if (scrollProgress > tick + deviation && !isLast) {
    return 0;
  }
};
let setTransform = (tick, scrollProgress, isLast) => {
  let deviation = 0.25;
  let saturation = 10;
  let math;
  let _math = -(
    (saturation * -(tick - deviation - scrollProgress)) / deviation -
    saturation
  );
  if (scrollProgress <= tick - deviation) {
    math = 0;
  }
  if (isLast) {
    if (scrollProgress > tick - deviation && scrollProgress < tick) {
      math = _math;
    } else {
      math = _math - _math * 0.7;
    }
  } else {
    if (scrollProgress > tick - deviation && scrollProgress < tick) {
      math = _math;
    } else if (scrollProgress >= tick && scrollProgress <= tick + deviation) {
      math = _math;
    } else if (scrollProgress > tick + deviation) {
      math = 0;
    }
  }
  return math;
};
const SectionParallax = ({   title, text  }) => {
  const rootRef = useRef(null);
  const framesRef = useRef(null);
  const [graphLoaded, setGraphLoaded] = useState(false);
  const [currentBackground, setCurrentBackground] = useState('/static/images/pdp/pdp_parallax_ring1.png');

  //
  useEffect(() => {
    let rootHeight = rootRef.current.offsetHeight;
    let rootOffset = rootRef.current.offsetTop;
    let frames = framesRef.current.childNodes;

    const handleScroll = (e) => {
      scrollProgress =
        ANIM_SETTINGS.ticks *
          (1 - (rootHeight - (window.scrollY - rootOffset)) / rootHeight) +
        1;

      //  if(scrollProgress >= 1.5109732824427482) {
      //    setCurrentBackground('/static/images/pdp/pdp_parallax_ring2.png');
      //  } else {
      //    setCurrentBackground('/static/images/pdp/pdp_parallax_ring1.png');
      //  }

      if (scrollProgress > 1 && !graphLoaded) {
        setGraphLoaded(true);
      }

      requestAnimationFrame(() => {
        frames[1].style.opacity = setAnimation(
          scrollProgress,
          [1, 1.1],
          [1, 0]
        );
        // frames[1].style.transform = `translateY(${setTransform(
        //   1,
        //   scrollProgress
        // )}vh)`;
        frames[2].style.transform = `translateY(${setTransform(
          1.25,
          scrollProgress
        )}vh)`;
        frames[2].style.opacity = setOpacity(1.25, scrollProgress);
        frames[3].style.transform = `translateY(${setTransform(
          1.75,
          scrollProgress,
          true
        )}vh)`;
        frames[3].style.opacity = setOpacity(1.75, scrollProgress, true);
        console.log(setTransform(1.75, scrollProgress, true))
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("SCROLL PROGRESS = ", scrollProgress)
  return (
    <div
      css={css`
        position: relative;
        height: ${ANIM_SETTINGS.ticks * 110}vh;
        width: 100%;

      `}
      ref={rootRef}
    >
      <div
        ref={framesRef}
        css={css`
          position: sticky;
          top: 0;
          bottom: 0;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          & > div {
            position: absolute;
          }
          
          background:
          radial-gradient(
            circle at top center,
            #C36A82,
            #FFFFFF 50%
          ); 
          z-index: 999;
        `}
      >
        <div
          css={css`
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
         {/* <img src={BlessNestLogo} css={css`width: 600px; height: 500px; opacity: 0.5; margin-left: auto; margin-right: auto;`}/> */}
        </div>
        <div
          css={css`
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
            <img src={BlessNestLogo} css={css`width: 600px; height: 500px; margin-left: auto; margin-right: auto;`}/>
        </div>
        {scrollProgress > 0 && (
          <div
            css={css`position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                  display: grid; align-content: center; justify-items: center;
              `}
          >
                <div
                  css={css`
                    text-align: center;
                    color: white;
                    a {
                      color: inherit;
                      text-decoration: none;
                    }
                  `}
                >
                    {/* <img src={BlessNestLogo} css={css`width: 600px; height: 500px;`}/> */}
                    <div css={css`width: 100%; display: flex; justify-content: center; align-items: center; text-align-center;`}><div className={styles.textStyle} css={css`max-width: 75%;`}>Bless Our Nest Staging is the the GTA's most afforable and valueable staging service for your properties!</div></div>
                </div>
            </div>
            )}
            {/* SECOND SET OF */}
            {scrollProgress > 0 && (
            <div
              css={css`position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                      display: grid; align-content: center; justify-items: center;
                  `}
            >
                    <div
                      css={css`
                        text-align: center;
                        position: relative;
                        color: white;
                        a {
                          color: inherit;
                          text-decoration: none;
                        }
                      `}
                    >
                      {/* <HeadingContainer narrow>
                        <div
                          css={css`
                            ${F.h2.css} text-transform: uppercase;
                          `}
                        >
                          Second Lockup
                        </div>

                      </HeadingContainer> */}
                      <div css={css`display: flex; width: 100%; justify-content: center; align-items: center; flex-direction: column; @media(max-width: 700px) {display: none; width: 90%;})`}>
                        <div css={css`position: relative; top: 20px; right: 45%; max-width: 450px;
                            // display: flex; justify-content: center; align-items: center; 
                              @media(max-width: 900px) {
                                max-width:  350px;
                              }
                              `}>
                                <img src={DesignIcon} css={css`width: 20%;`}/>
                                <div className={styles.textStyle}>We will bring everything you need to you!</div>
                        </div>
                        <div 
                            css={css`position: relative; top: 60%; left: 47%; max-width: 450px;
                            @media(max-width: 900px) {
                                max-width:  350px;
                            }
                        `}>
                            <img src={MoneyIcon} css={css`width: 20%;`}/>
                            <div className={styles.textStyle}>Maximize the value of your home sale</div>
                        </div>
                        <div css={css`position: relative; top: -19px; right: 36%; width: 450px;
                              @media(max-width: 900px) {
                                max-width:  350px;
                              }
                            `} >
                            <img src={SaleIcon} css={css`width: 20%;`}/>
                            <div className={styles.textStyle}>And help you sell fast!</div>
                        </div>

                      </div>
                      <div css={css`display: flex; width: 100%; justify-content: center; align-items: center; flex-direction: column; @media(min-width: 700px) {display: none; width: 90%;})`}>
                        <div css={css`
                                margin-bottom: 30px;
                                @media(max-width: 900px) {
                                    max-width:  350px;
                                }
                                `}>
                                    <img src={DesignIcon} css={css`width: 20%;`}/>
                                    <div className={styles.textStyle}>We will bring everything you need to you!</div>
                            </div>
                            <div 
                                css={css`
                                margin-bottom: 30px;
                                @media(max-width: 900px) {
                                    max-width:  350px;
                                }
                            `}>
                                <img src={MoneyIcon} css={css`width: 20%;`}/>
                                <div className={styles.textStyle}>Maximize the value of your home sale</div>
                            </div>
                            <div css={css`
                                margin-bottom: 30px;
                                @media(max-width: 900px) {
                                    max-width:  350px;
                                }
                                `} >
                                <img src={SaleIcon} css={css`width: 20%;`}/>
                                <div className={styles.textStyle}>And help you sell fast!</div>
                            </div>
                      </div>
                      {/* <p css={css`max-width: 600px; margin: auto;`}>
                        Precise sensors wrapped around your finger, where
                        your pulse is stronger. Capture body signals like resting
                        heart rate, HRV, body temperature, and calorie burn.
                      </p> */}

                    </div>
                </div>
            )}
          <div>
        </div>
      </div>
    </div>
  );
};

SectionParallax.defaultProps = {};

export default SectionParallax;

