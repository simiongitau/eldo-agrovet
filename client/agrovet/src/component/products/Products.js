import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
export default function Products({product}) {
  const Wrapper=styled.div`
  background-color:rgba(165, 173, 180, 0.842);
  padding:10px;
height:40vh;
width:35vh;
margin:5px;
border-radius:6px;
transition:3s;
display:flex;
flex-direction:column;
align-items:center;
img{
  height:170px;
  width:200px; 
  object:cover;  
};
:hover{
  background-color:gray;
  box-shadow:2px;
}
  `;
  const Info=styled.div`
  display:flex;
  font-size:20px;
  font-weight:300;
  justify-content:space-between;
  height:60px;
  width:100%;
  align-items:center;
  margin-top:5px;
  text-transform:uppercase;
  `;
  const Nav=styled.div`
  width:100%;
  margin-top:3px;
  height:60px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  button{
    width:100px;
    border-radius:20px;
    font-size:15px;
    height:40px;
    border:none;
    background-color:rgb(228, 245, 180);
  }
  `;
  console.log(product)
  const{name,imagi,price}=product;
  return (
    <div className='col-lg-3 col-sm-6'>
    <Wrapper >  
      {/* we have image */}
      <img src={imagi} alt="photos"/>
      {/* div containing price and the name of product */}
      <Info>
        <span>{name}</span> <span>{price}</span>
      </Info>
      <Nav>
       <Link to='/detail'> <button onClick={()=>console.log("you click me")}>maelezo</button></Link>
       <button>add to cart</button>
      </Nav>
     
    </Wrapper>
    </div>
  )
}
