import { withRouter } from 'react-router';
import styled from 'styled-components'
const Span1=styled.span`
     color:#FAFAFA;
     display:inline-block;
     position:absolute;
     left:0;
`
const A=styled.a`
       text-decoration:none;
       outline:none;
       color:#3d6a79;
       display:inline-block;
       position:absolute;
      right:1%;
`

function  K(props){
      let click=()=>{
           if(props.name2==='Forgot password'){
                props.history.push('/retrieve');
           }else{
                 props.history.push('/retrieve');
           }
      }
      return (
           <>
               <Span1>{props.name}</Span1>
                <A onClick={click}>{props.name2}</A>
           </>
      );
}

export default withRouter(K);