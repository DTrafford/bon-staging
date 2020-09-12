import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Header from "../components/Header/Header";
import * as S from '../styles/home_styles'
import SlideShow from '../components/SlideShow/SlideShow';
import HomeBanner from "../components/HomeBanner/HomeBanner";
import About from "../components/About/About";
import MeetMe from "../components/MeetMe/MeetMe";
import SectionParallax from "../components/SectionParallax/SectionParallax";
import logo from "../assets/images/KIMLOGO-01.png";
import '../styles/global.css'
import SEO from "../components/seo"

const HomePage = () => (
  <>
    <SEO title="Home" />
    <Header />
    <S.Wrapper>
      {/* <S.HeroImage src={logo} /> */}
      {/* <S.HeroImage></S.HeroImage> */}
      <SectionParallax />
      <SlideShow />
      <HomeBanner />
      <About />
      <MeetMe />
    </S.Wrapper>
  </>
  // <Layout>
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link> <br />
  //   <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  // </Layout>
)

export default HomePage
