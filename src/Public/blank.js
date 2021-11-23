//此处本意是设计出一个自定义的空白格（没成功！）

import styled from 'styled-components'

const Bank=styled.div`
   width:${(props)=>{props.width}},
   display:'inline-block'
`

export default Bank;

