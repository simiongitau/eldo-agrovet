import React from 'react'
import styled from 'styled-components'
import top from '../../assert/images (1).jpg'
export default function Cart() {
    const Wrapper=styled.div`
    
    `;
    const Header=styled.div`
    height:9vh;
    display:flex;
    padding:5px;
    justify-content:space-between;
    align-items:center;
    span{
        text-transform:capitalize;
    }
    `;
    const Cart=styled.div`
    flex:9;
    height:78vh;
    background-color:rgba(179, 174, 168, 0.295);
    border-radius:15px;
    display:flex;
    height:20vh;
    align-items:center;
    justify-content:space-between;
    button{
      width:100px;
      padding:5px;
      border:none;
      margin-right:10px;
      border-radius:10px;
      background-color:red;
    }
    margin-left:10px;
    `;
    const Summarly=styled.div`
    flex: 3;
    height:70vh;
    background-color:gray;
    border-radius:40px;
    z-index:100;
    margin-left:20px;
    margin-right:5px;
    padding-left:12px;
    button{
      width:100px;
      padding:3px;
      border-radius:12px;
      border:none;
      margin-left:30%;
      margin-top:40px;
      background-color:rgb(228, 245, 180);
    }
    `;
    const Main=styled.div`
    display:flex;
    `;
    const Count=styled.span`
    display:flex;
    h5{
        margin-left:30px;
        font-size:18px;
        text-transform:uppercase;
        font-weight:200;
    };
    span{
        font-weight:bold;
    }
    
    `;
    const Product=styled.div`
    display:flex;
    margin-left:10px;
    div{
      display:flex;
      flex-direction:column;
      gap:20px;
      margin-left:2px;
      font-size:19px;
      h4{
        font-weight:100;
      }
    };
    img{
      border-radius:9px;
      height:17vh;
      width:150px;
      object:cover;
    }
    `;
    const Quantiy=styled.div`
    display:flex;
    align-items:center;
    h5{
      margin-right:20px;
    }
    div{
    display:flex;
    flex-direction:column;
   button{
  padding:12px;
  width:25px;
  font-weight:bolder;
  background-color:rgb(228, 245, 180);
  margin-bottom:10px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:30px;
   }
    }
    `;
    const Title=styled.span`
    margin-left:90px;
    font-size:24px;
    margin-top:5px;
    font-weight:bold;
    text-transform:uppercase;
    `;
    const Empty=styled.div`
    width:80%;
    margin-left:22px;
    `;
    const Next=styled.div`
    display:flex;
  justify-content:space-between;  
  margin-right:12px;
  margin-top:15px;
  div{
    width:70px;
    display:flex;
    justify-content:space-between;
    span{
    text-transform:uppercase;
    }
  };
  span{
    width:70px;
    display:flex;
    justify-content:space-between;
  }
    `;
    const Detail=styled.span`
    margin-left:150px;
    text-transform:uppercase;
    `;
    const Container=styled.div`
    display:flex;
    flex-direction:column;
    margin-top:20px;
    div{
      display:flex;
      justify-content:space-between;
      margin-top:10px;
      margin-right:5px;
      input{
        padding:3px;
        border-radius:12px;
        border:1px solid gray;
        outline:none;
        background-color:rgba(183, 234, 243, 0.63);
      }
    }
    `;
    const Tax=styled.span`
      display:flex;
      margin-top:15px;
      align-items:center;
      h5{
        color:white;
        font-weight:200;
        font-size:15px;
      };
      span{
        display:flex;
        justify-content:space-between;
        margin-left:140px;
        align-items:center;
      }
    
    `;
    const Total=styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:5px;
    text-transform:uppercase;
    h4{
      border-bottom:1px solid red;
    }
    `;
  return (
    <Wrapper>
      {/* neader section   */}
      <Header>
          <span>cart summarly</span><span><Count><span>3</span><h5>items</h5></Count></span>
      </Header>
      <Main>
      {/* cart section */}
      <Cart>
        {/* div of image and it details */}
        <Product>
          {/* image */}
          <img src={top} alt="photos"/>
          <div>
            {/* product name */}
            <span><i>spinach</i></span>
            {/* price */}
            <h4>500ksh</h4>
          </div>
        </Product>
        {/* div of quantity */}
        <Quantiy>
          <h5>4</h5>
          <div>
            <button>+</button>
            <button>-</button>
          </div>
        </Quantiy>
        {/* amount */}
        <span>45000</span>
        {/* delete */}
        <button>btn</button>
      </Cart>
      {/* summarly section */}
      <Summarly>
        <Title>order summarly</Title>
      <Empty className='p-1 bg-primary '></Empty>
      <Next><div><span>items</span> <h4>6</h4></div><span>5000 <h5>ksh</h5></span></Next>
      <Detail>shipping detail</Detail>
      <Container>
      <div><span>name</span><input placeholder='mary wanboi'/></div>
      <div><span>telphone number</span><input placeholder='07*********'/></div>
      {/* county drop down */}
      
      {/* location */}
      </Container>
      <Tax><h5>tax 16% and transport fee</h5><span><h4>200</h4><h4>ksh</h4></span></Tax>

      <Total><span>total cost</span><h4>60 000 ksh</h4></Total>
      <>
      <button>checkout</button>
      
      </>
      </Summarly>
      </Main>
      {/* <Footer/> */}
    </Wrapper>
  )
}
