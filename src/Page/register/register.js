//注册
import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Divider,Button} from 'antd';
import { Component } from 'react';
import axios from 'axios';

const style = { color:'white',height:'',margin:'10px 0px' };

let time;
export default class register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email:'',
            duoCidianji: true
        };
    }
    onChange(e) {//把当前修改的值赋入state
        this.setState({
            [e.target.name]:e.target.value

        });
         console.log(e.target.name);
    }
   onSubmit(e) {
       console.log('ss');
        // 阻止事件传递        
        e.preventDefault();
        const randomFns=()=>{          //此函数用来生成一个随机的数字字符串（长度为6）
          let code='';
          for(let i=0;i<4;i++){
              code+=parseInt(Math.random()*10);
          }
          return code;
      };
      let num=randomFns();
      console.log(num);
     if(this.state.duoCidianji){
        this.setState({duoCidianji: false});   //用于防止多次导致多次提交相同数据到数据库中
        console.log(this.state.username);
        console.log(this.state.password);
        console.log(this.state.email);
        

        // 把表单用的最终数据从state中提取出来,传入请求
        const post1 ={
            username:this.state.username,
            password:this.state.password,
            email:this.state.email,
            headPortrait:num,
            identification: (this.state.username === '12345678' 
            || this.state.username ==='12123') ? '管理员' : '用户'
        };
        console.log(post1);
     //判断提交的数据模式是否符合要求（例如：qq要加上@qq.com才行）
        if(post1.username.length > 0 && post1.username.indexOf(' ') === -1
        && post1.password.length > 0 && post1.email.length > 8
        && post1.email.indexOf('@qq.com') === post1.email.length-7){
        axios.post('http://localhost:3017',post1)
          .then((response) => {
              console.log(response);
            console.log(response.data);//请求的返回体
            if(response.data ===  '已经存在此账户！'){
                 alert('注册失败！此用户已经存在！');
                 return;
            }
            // console.log(response.data.username);
             alert("注册成功！(确认后将返回登陆页面，请进行登录！)");
            // response.Redirect("back");
            // window.location.href = 'http://localhost:3000';
             
             clearTimeout(time);  //用于取消setTimeout()定时器，否则在跳转到其他页面时会直接报错！（因为此定时器不手动关闭会到时间自动执行，但因为页面已经改变，之前的那个页面加载的变量和函数都已经销毁了，所以当该定时器里函数再次执行时回报undefined）
            this.props.history.push('/');
          })
          .catch((err) => {
            console.log(err);//异常
          });      
        }
        else{
               alert("提交数据格式错误!（用户名和密码不能有空格字符，邮箱qq号后加@qq.com）");
               return;
        }
        time=setTimeout(()=>{    //目的就是防抖，为服务器减压
            this.setState({duoCidianji : true});
        },5000);    //此处定时器的作用（当首次注册格式错误后，等待五秒才能再次注册）
      }
    }


   render(){
    return (
    <>
       <div style={{width:'100%',height:'100%',backgroundColor:'#00968861',overflow:'hidden'}}>
        <Divider style={{color:'white',fontSize:'30px'}} orientation="center">注册</Divider>
        <Row gutter={16}>
      <Col className="gutter-row" span={20} offset={6}>
        <div style={style}>Username</div>
      </Col>
      <Col className="gutter-row" span={20} offset={6}>
        <input type='text' name="username" value={this.state.title}  onChange={this.onChange.bind(this)}  style={{width:'763px',height:'40px',borderRadius:'6px'}}></input>
      </Col>
      <Col className="gutter-row" span={20} offset={6}>
        <div style={style}>Password</div>
      </Col>
      <Col className="gutter-row" span={20} offset={6}>
          <input type='text' name='password' value={this.state.title}  onChange={this.onChange.bind(this)} style={{width:'763px',height:'40px',borderRadius:'6px'}}></input>
      </Col>
      <Col className="gutter-row" span={20} offset={6}>
        <div style={style}>qq-email</div>
      </Col>
      <Col className="gutter-row" span={20} offset={6}>
          <input type='text' name='email' value={this.state.title}  onChange={this.onChange.bind(this)} style={{width:'763px',height:'40px',borderRadius:'6px'}}></input>
      </Col>
      <Col className="gutter-row" style={{marginTop:'10px'}} span={20} offset={6}>
            <Button  onClick={this.onSubmit.bind(this)} type="primary" style={{width:'90px',height:'60px'}}>注册</Button>
      </Col>
    </Row>
    </div>
    </>
    );
    }
}

