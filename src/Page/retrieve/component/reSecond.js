//修改密码（身份验证成功后的操作）

import React,{Component} from "react";
import 'antd/dist/antd.css';
import { Row, Col, Divider,Button} from 'antd';
import axios from 'axios';
import {withRouter} from 'react-router-dom'

const style = { color:'white',height:'',margin:'10px 0px' };

class reSecond extends Component{
  constructor(props){
    super(props);
    this.state={
        username:'',
        email:'',
        password:'',
        password2:''
    }
    this.onsubmit=this.onsubmit.bind(this);
    this.onChange=this.onChange.bind(this);
}
componentWillMount(){
  if(this.props.location.state === undefined){
      this.props.history.push('/retrieve');
  }
  console.log(this.props.location);
  console.log(this.props.location.state);
}
onChange(e){
    this.setState({
        [e.target.name]:e.target.value
    });
    console.log(e.target.name);
}

onsubmit(e){
    e.preventDefault();
    if(this.state.username.length>0)
    {
         if(this.state.password === this.state.password2 
          && this.state.password.length > 0){
                 if(this.state.email !== this.props.location.state.email){
                    alert('与QQ邮箱身份验证阶段输入的绑定邮箱号有差异！即将再次返回邮箱验证阶段！');
                    this.props.history.push('/retrieve');
                 }
                 else{
                     var post={
                           username:this.state.username,
                           email:this.state.email,
                           password:this.state.password,
                           password2:this.state.password2
                       }
                       axios.post('http://localhost:3017/yanzheng/genggai/xougai',post)
                       .then((res)=>{
                                  console.log(res);
                                  if(res.data === '不存在此qq邮箱绑定的用户！'){
                                      alert('不存在此qq邮箱绑定的用户！修改失败！');
                                      return;
                                  }
                                  alert('修改密码成功！(即将跳转回登录界面，请进行重新登录！)');
                                  this.props.history.push('/');
                      })
                      .catch((err)=>{
                           console.log(err);
                           alert('不存在该用户，密码修改失败！（请刷新页面重新尝试！）');
                      })
                  }
         }else{
             alert('两次输入密码不一致，请再次输入！')
         }
      
    }else{
        alert('请输入用户名！')
    }

}
    

  render(){
      return(
        <>
        <div style={{width:'100%',height:'100%',backgroundColor:'#00968861',overflow:'hidden'}}>
        <Divider style={{color:'white',fontSize:'30px'}} orientation="center">修改密码</Divider>
        <Row gutter={16}>
      <Col className="gutter-row" span={20} offset={6}>
        <div style={style}>Username</div>
      </Col>
      <Col className="gutter-row" span={20} offset={6}>
      <input type='text' name='username' onChange={this.onChange} 
       placeholder='请输入新用户名' style={{width:'763px',height:'40px',borderRadius:'6px'}}></input>
      </Col>
      <Col className="gutter-row" span={20} offset={6}>
        <div style={style}>Password</div>
      </Col>
      <Col className="gutter-row" span={20} offset={6}>
      <input type='password' name='password' onChange={this.onChange} 
      placeholder='请输入新密码' style={{width:'763px',height:'40px',borderRadius:'6px'}}></input>
      </Col>
      <Col className="gutter-row" span={20} offset={6}>
      <input type='password' name='password2' onChange={this.onChange} 
      placeholder='再次确认密码' style={{marginTop:'10px',width:'763px',height:'40px',borderRadius:'6px'}}></input>
      </Col>
      <Col className="gutter-row" span={20} offset={6}>
        <div style={style}>qq-email</div>
      </Col>
      <Col className="gutter-row" span={20} offset={6}>
      <input type='text' name='email' onChange={this.onChange} 
      style={{width:'763px',height:'40px',borderRadius:'6px'}}         
      placeholder='请输入原账号绑定的qq邮箱'></input>
      </Col>
      <Col className="gutter-row" style={{marginTop:'10px'}} span={20} offset={6}>
            <Button  onClick={this.onsubmit} type="primary" style={{width:'120px',height:'50px'}}>确认</Button>

      </Col>
    </Row>
    </div>
        
        </>
      );
  }

}
export default withRouter(reSecond);