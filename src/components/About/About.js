import React from "react";
import { Wrapper, Title, Content } from "./styles";
import "./About.css";

export default function About() {
  return (
    <Wrapper>
      <Title>About</Title>
      <Content>
        At BN Staging, we pride ourselves on bringing you the best value all
        while providing the elegant luxury looks you desire. Our humble
        beginning from starting out with small inventory and a vision for what
        we could become reminds us of what really matters.
      </Content>
      <br></br>
      <Content>
        We are a small family run business and growing fast. But we are always
        looking for additional clients. If you are an agent looking for a
        professional stager, or an individual who wants interior design help, we
        would love to hear from you!
      </Content>
    </Wrapper>
  );
}
