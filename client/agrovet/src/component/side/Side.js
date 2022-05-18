import React from 'react'
import styled from 'styled-components'
export default function Side() {
    const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    span{
        font-weight:200;
        font-size:24px;
        margin-left:30%;
        
    };
    button{
        width:150px;
        padding-top:15px;
        padding-bottom:15px;
        margin-left:30px;
        margin-bottom:30px;
        border-radius:10px;
        cursor:pointer;
        font-size:15px;
        font-weight:100;
        border:none;
        outline:none;
        text-transform:uppercase;
    };
    div{
        width:100px;
        margin-bottom:12px;
        height:5px;
        background-color:red;
        border-radius:2px;
        margin-left:70px;
    }
    `;
  return (
    <Wrapper>
        <span>categoly</span>
        <div></div>

<button>pestcide</button>
<button>fertilizer</button>
<button>herbalcide</button>
<button>insectside</button>
<button>animal & bird feeds</button>

    </Wrapper>
  )
}
