import React from "react";
import Side from "../side/Side";
import Data from "../../Data";
import styled from "styled-components";
import Products from "./Products";
export default function Product() {
  const Main = styled.div`
    display: flex;
  `;
  const Light = styled.div`
    flex:2;
    background-color:rgba(128, 128, 128, 0.644);
}
    height:90vh;
    `;
  const Right = styled.div`
    flex: 10;
    height: 90vh;
  `;
  // console.log(Data);
  return (
    <Main>
      <Light>
        <Side />
      </Light>
      <Right>
        {Data.map((product) => {
          return <Products product={product} key={product.name} />;
        })}
      </Right>
    </Main>
  );
}
