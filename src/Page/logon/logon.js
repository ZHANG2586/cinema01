import React,{Component, useState,useEffect, useLayoutEffect} from 'react';
import axios from 'axios'
import {Link, withRouter} from 'react-router-dom'
import '../../style/logon.css';
import github from '../../images/github.jpg'    //此处注意React src里面引入图片的几种方式es6不支持在<img />标签内直接写图片的路径(即<img src='../images/photo.png' />这种方式在react中是不被允许的会报错)，一下两种方式可以在react中引入图片（方法1：import imgURL from './../images/photo.png' <img src={imgURL} />  方法二：require方法（这种方法需要注意的是，require里只能写字符串，不能写变量）<img src={require('./../images/photo.png')} />）
import qq from '../../images/qq.png'
import WeChat from '../../images/WeChat.png'
import Logonimg from '../../images/logonimg.png'
import reactCSS from 'reactcss'
import {Button,TomatoButton,D} from '../../Public/button'
import Box from '../../style/logon'
import Kuaijie from '../../style/ul'
// import Div from '../../style/div'
import styled from 'styled-components'
import Span from '../../style/span'
import '../../style/App.css'
import { Spin } from 'antd';

//此处引入live2d
import ReactLive2d from 'react-live2d';

//此处使用styled-components来设计组件的css样式
const Div=styled.div`
  width:100%;
  height:100%;
  border:1px solid #fff;
  position:absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
  margin:auto;
  background-color:black;
  background-image:url(${Logonimg});
  background-size:100% 100%;
  background-repeat:no-repeat;

//   box-shadow:10px 10px 5px #888;
`


//此处使用的是react-hooks
export default function logon(props){
   const [username,setUsername]=new useState('');
   const [password,setPassword]=new useState('');
   const [num,setNum]=new useState(1);
   const [loading,setLoading]=new useState(true);

   const onchange1=(e)=>{
            console.log(e.target.value);   
            setUsername(e.target.value);
   }
   const onchange2=(e)=>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }
      //react项目启动时 loading 动画的结束控制
    useEffect(()=>{
        // console.log(document.getElementsByClassName('ant-spin-nested-loading'));  
        //  console.log(document.getElementsByClassName('ant-spin-nested-loading')[0]);
        //  document.getElementsByClassName('ant-spin-nested-loading')[0].style.position='absolute';
        //  document.getElementsByClassName('ant-spin-nested-loading')[0].style.top='0';
         setTimeout(() => {
            setLoading(false);
        }, 1000);

        setTimeout(() => {
            window.L2Dwidget.init({
                pluginRootPath: 'live2dw/',
                pluginJsPath: 'lib/',
                pluginModelPath: 'live2d-widget-model-z16/assets/',
                tagMode: false,
                debug: false,
                model: { jsonPath: '../live2dw/live2d-widget-model-miku/assets/miku.model.json' },
                display: { position: 'left', width: 180, height: 320, },
                mobile: { show: true },   //是否在移动设备上显示
                log: false     
                })
          }, 1000);
          console.log(props.location.state);
    },[]);
    // useLayoutEffect(()=>{
    //     setTimeout(() => {
    //         window.L2Dwidget.init({
    //             pluginRootPath: 'live2dw/',
    //             pluginJsPath: 'lib/',
    //             pluginModelPath: 'live2d-widget-model-z16/assets/',
    //             tagMode: false,
    //             debug: false,
    //             model: { jsonPath: '../live2dw/live2d-widget-model-hibiki/assets/hibiki.model.json' },
    //             display: { position: 'left', width: 100, height: 210,menuList:'Mtab',TouchBody:['ss'],color:'red' },
    //             mobile: { show: true },   //是否在移动设备上显示
    //             log: false     
    //             })
    //       }, 1000);
    // });
    const styleli={
            padding:'0',
            margin:'0',
            listStyle:'none',
            width:'30px',
            height:'30px',
            border:'1px solid #BABABA',
            borderRadius:'100px',
            overflow:'hidden',
            display:'inline-block',
            margin:'auto',
            marginRight:'5%'  
    }
    const styleinput={
        width:'99%',
        height:'2.6rem',
        borderRadius:'0.38rem',
        // background:'none',
        // outline:'none',
        border:'0px'
    }

    const styles=reactCSS({      //此处是reactCSS写法（CSS in JS第三方库中比较大众的库中的一种）
          'default':{
              card:{
                  background:'red',
              },
              title:{
                  background:'#c86e51',
                  color:'white',
                  fontSize:'1.5rem',
                  textAlign:'center',
                  marginRight:'14%',
                  width:'8rem',
                  height:'2rem',
                  lineHeight:'2rem',
                  display:'inline-block',
                  border:'0px',
                  borderRadius:'0.2rem',
                  cursor:'pointer'
              }
          }
    })
    const styleh5={
        display:'inline'
    }
    
    let showPassword=()=>{  
        setNum(num+1);
        console.log(num);
        let input=document.getElementById('ShowPassword');
        if(num%2===1){
            input.type='text';
            return;    
        }else{
            input.type='password';
            return;
        }
    }

    let logon=(e)=>{
        e.preventDefault();
             console.log(username);
             console.log(password);
            if(username.trim() === '' && password.trim()=== ''){
                 alert('请输入用户名或密码！');
                 return;
            }
             const post1={                   
               username:username,
               password:password
             }
             axios.post('http://localhost:3017/denglou',post1,{withCredentials:true})
                .then((res)=>{
                  console.log(res);
                  console.log(res.data);    //服务器相应后返回来的（res.data）是一个对象数组数组，所以此处应用数组的方法来操作！
                  console.log(typeof res.data);
                // if(res.data.length>0){        //注释掉此处的if else语句是因为（把node响应后，返回给前端的data数据类型由数组对象类型改为了data对象类型）
                  console.log(res.data.username);
                  if(res.data.username === username
                    && require('bcryptjs').compareSync(password,res.data.password)   //此处注释掉的原因是因为在部署到局域网上时，因为机密的原因，导致mongoose无法识别此类型的数据导致把该数据存入数据库的操作失败！（所以就目前所掌握的知识只能先是注释掉，等后续有时间了进行改进！）
                    // &&res.data.password === password
                    ){
                       props.history.push({pathname :'/home',state :{username:username,headPortrait:res.data.headPortrait,identification:res.data.identification}});
                  }
                  else{
                    console.log('用户名或密码不存在！');
                    alert('用户名或密码不存在！');
                    return;
                  }
              })
              .catch((err)=>{
                console.log(err);
                alert('服务器链接断开！(请开启服务器！)');
                return;
              });
    }

    let sign=(e)=>{
         e.preventDefault();
         props.history.push('/register');
    }
    
    let testing1=(e)=>{
        e.preventDefault();
        let data={};
        axios.post('http://localhost:3017/github/login',data)
          .then((res)=>{
            console.log(res);
            window.location.href=res.data;
          }).catch((err)=>{
            console.log(err);
          })
    }

    let testing2=()=>{

    }

    let testing3=()=>{

    }
   return (
       <Div>
           <Spin tip="Loading..." spinning={loading} style={{position:'absolute',top:'36%',left:'48%'}}></Spin>
         <div>
           <p style={{fontSize:'35px',width:'32.8%',textAlign:'center',margin:'2% auto',color:'#fff'}}>
               Welcome to login
           </p>
           <div className='box1'>
                <div style={{position:'relative',width:'55%',margin:'auto',marginBottom:'1%'}}>
                    {/* <span>Username</span><a style={{textDecoration:'none',outline:'none',color:'white'}} href='/home'><span style={{}}>Forgot Username</span></a> */}
                    <Span name='Username' name2='Forgot username'></Span>
                    <br></br>
                    <input className='username' style={styleinput} type='text'  onChange={onchange1}>
                    </input> 
                </div>
                {/* <input className='username' style={styleinput} type='text'  onChange={onchange1}>
                </input> */}
                <div style={{position:'relative',width:'55%',margin:'auto',marginBottom:'1%'}}>     {/*32.8%*/}
                    <Span name='Password' name2='Forgot password'></Span><br></br>
                    <input id='ShowPassword' className='passWord' style={styleinput} type='password' onChange={onchange2}>
                    </input>
    
                     <input type="checkbox" defaultChecked='true' style={{cursor:'pointer',display:'inline-block'}} />
                     <span id='Remember' style={{color:'#EDEDED'}}>Remember Me</span>    {/*此处要注意在react中因为复选框和单选框由于都是空元素标记，所以不能有任何子节点（即children），也不能使用dangerouslySetInnerHTML*/} 
                     <div style={{display:'inline-block',color:'#EDEDED',backgroundColor:'#6E8696',position:'absolute',right:'1%'}}>
                     <input  type="checkbox" style={{cursor:'pointer'}} onClick={showPassword} />Show Password 
                     </div>
                </div>
                
                {/* <input className='passWord' style={styleinput} type='password' placeholder='请输入密码' onChange={onchange2}>
                </input><br></br> */}
                <div style={{width:'55%',margin:'1px auto',position:'relative'}}>
                 {/* <button style={styles.title} onClick={()=>{props.history.push({
                    pathname:'/home',query:{id:name+''+password}});let input=document.getElementById('ShowPassword');console.log(input);input.value='s';}}>
                        Log In
                 </button> */}
                 <button style={styles.title} onClick={logon}>
                        Log In
                 </button>
                {/* <button onClick={()=>{console.log(name);console.log(password)}}></button> */}
                 <div style={{width:'56%',margin:'auto',textAlign:'center',display:'inline-block'}}>
                     <span style={{color:'#EBEBEB'}}>Don't have an account?</span>
                     <a style={{color:'#667F75'}} onClick={sign}>Sign Up</a>
                 </div>
                </div>

            </div>

            <div className='box2' style={{width:'55%',border:'0',margin:'auto'}}>
                <div style={{}}>
                    <p style={{color:'#E5E5E5'}}>Quick logon:</p>
                    <ul style={{width:'100%',
                                height:'80%',
                                margin:'auto',
                                padding:'0',
                                margin:'0',
                                listStyle:'none'}}>
                        <li style={styleli}>
                            <a href='' onClick={testing1}>
                                <img style={{width:'100%',height:'100%'}} src={github}>
                                </img>
                            </a>
                        </li>  
                        <li style={styleli}>
                            <a href='' onClick={testing2}>
                                <img style={{width:'100%',height:'100%'}} src={qq}>
                                </img>
                            </a>
                        </li>
                        <li style={styleli}>
                            <a href='' onClick={testing3}>
                                <img style={{width:'100%',height:'100%'}} src={WeChat}>
                                </img>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
       </Div>
   );

}


