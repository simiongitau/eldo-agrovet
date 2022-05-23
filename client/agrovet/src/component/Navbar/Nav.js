import React from 'react'
import styled from 'styled-components'
export default function Nav() {
  const Main=styled.div`
  height:100px;
  width:100%;
  background-color:rgba(128, 128, 128, 0.884);
  display:flex;
  justify-content:space-between;
  align-items:center; 
  padding-left:5px;
  padding-right:10px;  
  span{
    font-weight:100;
    font-size:20px;
    text-transform:uppercase;
    cursor:pointer;
    margin-left:20px;
  };
  div{
    font-weight:100;
    font-size:20px;
    text-transform:uppercase;
    cursor:pointer;
    margin-right:20px;
  }
  `;
  const Unorder=styled.ul`
  display:flex;
  justify-content:space-around;
  width:25vh;
  position:relative;
  height:70px;
  align-items:center;
 
  li{
    list-style:none;
    font-size:17px;
    font-weight:100;
    text-transform:uppercase;
    width:80px; 
    padding:5px;
    text-align:center;

    :hover{
      color:rgba(228, 245, 180, 0.952);  
      cursor:pointer;
      background-color:gray;
      border-radius:4px;

    };
    
  };
  span{
    padding:5px;
    background-color:red;
    height:15px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    border-radius:35px;
    left:25;
    top:0;
  }
  
  `;
  
  return (
    <Main>
      {/* image div */}
      <span>eldo agrovet</span>
  {/* list of home,cart about */}
  <Unorder>
    <li>home</li>
    <li>cart</li>
    <li>about</li>
    <span>16</span>
  </Unorder>
  {/* login and out */}
  <div>login/out</div>
    </Main>
  )
}
