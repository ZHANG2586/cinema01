import styled from 'styled-components'
import React,{Component} from 'react'


const Wrapper=styled.section`
    padding:4em;
    background: papayawhip;
`;

export default function logon(props){
    return(
          <>
            <Wrapper>
              <span>用户名</span><input></input>
              <span>密码</span><input></input>
              <button>dinglu</button>
              </Wrapper>
          </>

    );

}



