import React, { FC } from "react";

import { Container } from "./styles";

const NotFound: FC = () => {
  return (
    <Container>
      <h1>4&#123;&#125;4</h1>
      <h2>page not found</h2>
      <p>
        Something went wrong go back to <a href="/">LOGIN</a>
      </p>
    </Container>
  );
};

export default NotFound;
