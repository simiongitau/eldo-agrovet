import React from 'react'
import styled from 'styled-components'
export default function Products({product}) {
  const Wrapper=styled.div`
  background-color:gray;
  padding:10px;
  `;
  console.log(product)
  const{name,image,quality}=product;
  return (
    <Wrapper>
      {name}
      <img src={image} alt="photo"/>
      {quality}
      <button className='btn bg-primary'>btn</button>
      
      Products

    </Wrapper>
  )
}
