import React from "react";
import { Wrapper, CardTitle } from "./styles";

export default function Card(props) {
  return (
    <Wrapper>
      <CardTitle>{props.header}</CardTitle>
      <p>{props.children}</p>
    </Wrapper>
  );
}
