import React from 'react'
import styled from "styled-components"
export default function Navbar() {
    const Wrapper=styled.div`
    background-color:rgba(247, 199, 247, 0.61);
    height:15vh;
    display:flex;
    justify-content:center;
    align-items:center;
    div{
        span{
            font-size:25px;
            text-transform:uppercase;
        }
    }

    `;
  return (
    <Wrapper>
        <div><span>eldo agrovet dashbord</span></div>
    </Wrapper>
  )
}
