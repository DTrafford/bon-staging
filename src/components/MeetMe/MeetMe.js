import React from "react";
import * as S from "./styles";

export default function MeetMe() {
  return (
    <S.Wrapper>
      <S.Title>Meet Me</S.Title>
      <S.ContentRow>
        <S.Portrait src={require('../../assets/images/Kim_Portrait.jpg')} />
        <S.ContentWrapper>
        <S.Content>
          Kim is as dedicated to her work as she is to her family.  Her work is her passion and that passion shows when you see the change she brings to your homes.
        </S.Content>
        <S.Content>
          When not making your property look it's best Kim also runs a home hair salon, and stays busy doing acitvities with her family.  She brings these family values with her running her businesses.
        </S.Content>
        </S.ContentWrapper>
      </S.ContentRow>
    </S.Wrapper>
  );
}
