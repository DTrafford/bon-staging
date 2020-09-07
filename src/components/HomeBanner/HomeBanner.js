import React from "react";
import { Wrapper, HeaderContainer, ImageContainer, Card, CardBack } from "./styles";
import logo from "../../assets/images/KIMLOGO-01.png";
import styles from './HomeBanner.module.css'
export default function HomeBanner() {
  return (
    <Wrapper>
      <HeaderContainer>
        {/* <ImageContainer>
          <img alt="" src={logo} width="90%" height="90%" />
        </ImageContainer> */}
        <Card className={styles.card}>
          <h1 className={styles.title}>Bless Our Nest</h1>
          <h3 className={styles.subText}>
            Maximize the value of your home, by letting our experienced home
            stagers make your home look so good you won't even want to move!
          </h3>
          <h3 className={styles.subText}>
            Our team of specialists will bring color and life to your home
            again!
          </h3>
          <h3 className={styles.subText}>
            Proudly serving all of the GTA and surrounding area, including Durham Region (Oshawa, Whitby, Ajax, Pickering, Courtice)
          </h3>
          {/* <CardBack /> */}
        </Card>
      </HeaderContainer>
    </Wrapper>
  );
}
