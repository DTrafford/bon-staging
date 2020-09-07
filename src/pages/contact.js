import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Header from "../components/Header/Header";
import * as S from '../styles/contact_styles'
import ContactForm from "../components/ContactForm/ContactForm";
import '../styles/global.css'
import SEO from "../components/seo"

const ContactPage = () => (
  <>
  <SEO title="Bless Our Nest Contact Form" />
  <Header />
  <S.Wrapper>
      <ContactForm />
  </S.Wrapper>
  </>
)

export default ContactPage
