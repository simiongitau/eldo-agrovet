import React from 'react'
import styled from 'styled-components'
export default function Nav() {
  const Main=styled.div`
  height:100px;
  background-color:rgba(128, 128, 128, 0.322);
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
  };
  div{
    font-weight:100;
    font-size:20px;
    text-transform:uppercase;
    cursor:pointer;
  }
  `;
  const Unorder=styled.ul`
  display:flex;
  justify-content:space-around;
  width:30vh;
  li{
    list-style:none;
    font-size:20px;
    font-weight:100;
    text-transform:uppercase;
    :hover{
      color:rgba(228, 245, 180, 0.952);
      border-bottom:2px solid gray;  
      cursor:pointer;
    }
  };
  
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
  </Unorder>
  {/* login and out */}
  <div>login/out</div>
    </Main>
  )
}
