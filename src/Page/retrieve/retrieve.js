//qq邮箱身份验证

import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Divider,Button} from 'antd';
import { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router";

const style = { color:'white',height:'',margin:'10px 0px' };
let shakeid;

class retrieve extends Component{
  constructor(props){
    super(props);
    this.state={
        username:'',
        email:'',
        code:'',
        yanzhengma:'获取验证码',
        shake:'true',
        shake1:true
  };
    this.onSubmit=this.onSubmit.bind(this);
    this.onsubmit1=this.onsubmit1.bind(this);
    this.onChange=this.onChange.bind(this);
}
componentWillMount(){
    console.log(this.state.shake);
    console.log(this.state.shake1);
    console.log(typeof this.state.shake + ' ' + typeof this.state.shake1);
}

onChange(e){
     this.setState({
         [e.target.name]:e.target.value
     });
     console.log(e.target.name);
}
onSubmit(e){
        e.preventDefault();


      
       if(this.state.email.length > 0 && this.state.code.length === 6){
          var post={
              email:this.state.email,
              code:this.state.code
          }    
          axios.post('http://localhost:3017/yanzheng/genggai',post)
           .then((res)=>{
               console.log(res);
               clearTimeout(shakeid);
            //    alert('验证成功！');
              //  window.location.href='http://localhost:3000/#/Zhaohuimima/genggai';
              this.props.history.push({pathname:'/retrieve/second',state:{email:this.state.email}});
           }).catch((err)=>{
               console.log(err);
               alert('验证失败！(不存在改用户或是验证码失效或无效！)');
           })
       }else{
           alert('请入正确内容！');
       }
}

onsubmit1(e){
      e.preventDefault();
      if(this.state.email === '' || this.state.email.length < 8 
      || this.state.email.indexOf('@qq.com') !== this.state.email.length-7){
               alert('请输入绑定的qq邮箱号！');
               return;
      }
    if(this.state.shake1){
        this.setState({shake1: false},()=>{
            console.log(this.state.shake1);
        })
        var post1={
             email:this.state.email,
        };
      axios.post('http://localhost:3017/yanzheng',post1)
      .then((res)=>{
         console.log(res);
        //  alert('验证码发送成功！(验证码有效时间5分钟！)');
         this.setState({
          yanzhengma:'已发送'
      });
      setTimeout(()=>{this.setState({yanzhengma:'获取验证码'})},1000*60*5);
      })
      .catch((err)=>{
          console.log(err);
          // alert('验证码发送失败！');
      });
      shakeid=setTimeout(() => {       
          this.setState({shake1: true},()=>{
              console.log(this.state.shake1);
          })
      }, 1000*60*4);
   }
}   


   render(){
     return(
           <>
        <div style={{width:'100%',height:'100%',backgroundColor:'#00968861',overflow:'hidden'}}>
        <Divider style={{color:'white',fontSize:'30px'}} orientation="center">QQ邮箱验证身份</Divider>
        <Row gutter={16}>
      
      <Col className="gutter-row" span={20} offset={6}>
      <input style={{width:'763px',height:'40px',borderRadius:'6px'}} type='text' name='email' onChange={this.onChange} placeholder='请输入绑定的qq邮箱号'></input>
      </Col>
      
      <Col className="gutter-row" span={20} offset={6}>
      <input style={{marginTop:'10px'}} type='text' name='code' onChange={this.onChange} placeholder='请输入验证码' ></input>
      </Col>
      <Col className="gutter-row" span={20} offset={6}>
         <button style={{cursor:'pointer',marginTop:'5px'}} onClick={this.onsubmit1}>{this.state.yanzhengma}</button>
      </Col>
      <Col className="gutter-row" span={20} offset={6}>
      
      <Button  onClick={this.onSubmit}  type="primary" style={{width:'120px',height:'40px',marginTop:'10px'}}>确认</Button>
      </Col>
    </Row>
    </div>
           </>
     );
   }

}
export default withRouter(retrieve);