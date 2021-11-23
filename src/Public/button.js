//使用styled-components来设计一个独立的组件样式(达到组件的css样式复用性）
//使用syled-components的目的就是解决css文件的分离不等于css文件的隔离，而导致css文件的全局污染问题，并且在SPA（单页面应用）流行的当下，因为js文件的模块化（css，js等文件的模块化）导致css文件的全局污染问题加剧！（以此来接解决）
//解决React的css作用域污染方案（一共有三种）：(1)namespaces  (2)CSS in JS(CSS in JS的第三方库有60余种，其中比较大众的库（有两个）：(1)reactCSS  (2)styled-components(本人推荐使用))  （3）CSS Modules
import styled,{css} from 'styled-components'

export const Button=styled.button`
background:transparent;
border-radius:3px;
border:2px solid palevioletred;
color:red;
margin:0 1em;
padding:0.25em 1em;
font-size:16px;
${props=>
    props.primary &&
    css`
       background:red;
       color:white;
       
    `}
`;
const Container=styled.div`
    text-align: center;
`
// function sum(){
//     return (
//         <>
//           <Container>
//                 <Button primary onClick={console.log('433')}>denglu</Button>
//           </Container>
           
//         </>
//     );
// }


export const TomatoButton=styled(Button)`
   color:tomato;
   border-color:tomato;
`;
// export const Component=styled.div`
//    color:red;
// `;

 
const Component = styled.div`
  color: red;
`;
export function D(props){ 
    console.log(props);
return(
  <Component
    as="button"
    onClick={() => {alert('It works!');console.log(props)}}>
    Hello World!
  </Component>
 )
}