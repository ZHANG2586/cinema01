import styled from 'styled-components'
import React from 'react';

const lu1=styled.ul`
    width:400px;
    height:100px;
    border:1px solid red;

`
const li1=styled.li`
    width:100px;     
    heigth:100px;
    boder:1px solid red;
    display:block;
    margin:10px 10px 10px 10px;

`

export default function kuaijie(props){
       return(
           <>
              <lu1>
                  <li1>2</li1>
                  <li1>3</li1>
                  <li1>4</li1> 
              </lu1>
           
           </>

       );   


}