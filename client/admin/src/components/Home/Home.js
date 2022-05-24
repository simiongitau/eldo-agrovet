import React from 'react'
import styled from "styled-components";
import Footer from '../Footer/Footer';
import Analysis from '../saleAnalysis/Analysis';
export default function Home() {
    const Wrapper=styled.div`
    display:flex;
    background-color:rgba(70, 64, 64, 0.342);
    height:70vh;
    `;
    const Right=styled.div`
flex:10;
background-color:rgba(245, 245, 245, 0.938);
}
    `;
    const Left=styled.div`
    flex:2;
    padding:10px;
    display:flex;
    div{
        margin-left:40px;
        button{
            padding:5px;
            width:150px;
            height:55px;
            border-radius:10px;
            border:none;
            margin-bottom:15px;
            cursor:pointer;
            text-transform:uppercase;
        }
   
    }
        
    `;
  return (
      <>
    <Wrapper>
        <Left>
<div>
    <button>sale analysis</button>
    <button>products</button>
    <button>customers</button>
    <button>orders</button>
    <button>charts</button>
</div>
        </Left>
        <Right>
            <Analysis/>
        </Right>
    </Wrapper>
    <Footer/>
    </>
  )
}
