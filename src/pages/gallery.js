import React, { useState, useEffect } from "react";
import { Wrapper, HeaderContainer, GalleryTitle, ErrorDiv } from "../styles/gallery_styles";
import Instagram from "../components/Instagram/Instagram";
import Spinner from "../components/Spinner/Spinner";
import Header from "../components/Header/Header";
import SEO from "../components/seo"
import Feed from "../components/InstagramNoAuth/Test";
// import Feed from "react-instagram-authless-feed"
import styles from '../styles/feed.module.css';
// This can be retrieved with a GET https://www.instagram.com/web/search/topsearch/?context=blended&query=INSTAGRAM_USERNAME
const INSTAGRAM_ID = "32947961624";
const THUMBNAIL_WIDTH = 640;
const PHOTO_COUNT = 60;

export default function Gallery() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [photos, setPhotos] = useState([]);

  async function fetchPhotos() {
    try {
      // Hack from https://stackoverflow.com/a/47243409/2217533
      const response = await fetch(
        `https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"${INSTAGRAM_ID}","first":${PHOTO_COUNT},"after":null}`
      );
      const data = await response.json();
      // console.log("DATA = ", data);
      if (data.data) {
        const photos = data.data.user.edge_owner_to_timeline_media.edges.map(
          ({ node }) => {
            // console.log(node);

            const { id } = node;
            const caption = node.edge_media_to_caption.edges[0] ? node.edge_media_to_caption.edges[0].node.text : '';
            const thumbnail = node.thumbnail_resources.find(
              thumbnail => thumbnail.config_width === THUMBNAIL_WIDTH
            );
            const { src, config_width: width, config_height: height } = thumbnail;
            const url = `https://www.instagram.com/p/${node.shortcode}`;
            return {
              id,
              caption,
              src,
              width,
              height,
              url
            };
          }
        );
        setPhotos(photos);
        setIsLoaded(true);
      } else {
        setIsError(true);
      }

    } catch (error) {
      console.error(error);
    }
  }

  // useEffect(() => {
  //   fetchPhotos();
  // }, [photos]);

  // let content = <Spinner />;
  // if (isLoaded && !isError) {
  //   content = (
  //     <Wrapper>
  //       {/* <HeaderContainer>
  //         <GalleryTitle>Gallery</GalleryTitle>
  //       </HeaderContainer> */}
  //       <Instagram photos={photos} />
  //       {/* <Instagram
  //       userId={INSTAGRAM_ID}
  //       thumbnailWidth={THUMBNAIL_WIDTH}
  //       photoCount={PHOTO_COUNT}
  //     /> */}
  //     </Wrapper>
  //   );
  // }

  // if (isError) {
  //   content = (
  //     <Wrapper>
  //       <ErrorDiv>Looks like we had a problem loading the pictres. <br /> Please try again soon.</ErrorDiv>
  //     </Wrapper>
  //   );
  // }
  return (
    <>
      <Header />
      <Wrapper>
        <HeaderContainer>
          <GalleryTitle>Gallery</GalleryTitle>
        </HeaderContainer>
        {/* {content} */}
        <Feed userName="blessourneststaging" className={"Feed"} classNameLoading="Loading" />
        {/* <HeaderContainer>
        <GalleryTitle>Gallery</GalleryTitle>
      </HeaderContainer>
      <Instagram photos={photos} /> */}
        {/* <Instagram
        userId={INSTAGRAM_ID}
        thumbnailWidth={THUMBNAIL_WIDTH}
        photoCount={PHOTO_COUNT}
      /> */}
      </Wrapper>
    </>
  );
}
