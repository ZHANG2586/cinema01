import {React,Component, useState, useEffect, createRef,useRef} from 'react'
import Navigation from '../../Public/navigation';
import 'antd/dist/antd.css';
import { Layout,Row, Col,Divider} from 'antd';
import Bread1 from '../../Public/1breadcrumb'
import Image01 from '../../Public/image01'
import getQueryString from '../../Public/geturl'
import cookie from 'react-cookies';
import axios from 'axios';
import Anchorpoint from '../../Public/anchor-point'
import {loginUser} from '../cookie'

const { Header, Footer, Sider, Content } = Layout;
const array=[];


export default function App(props){
  const [name,setName] = useState('未登录');
  let [num,setNum] = useState();
  const [url,setUrl] = useState('https://avatars.githubusercontent.com/u/');
  const [headurl,setHeadurl] = new useState('https://avatars.githubusercontent.com/u/666666');
  const [height,setHeight] =new useState('1000px');
  let [array2,setArray2] = new useState([]);
  useEffect(
   ()=>{
      
      axios.post('http://localhost:3017/query/tickets')
       .then((res)=>{
         console.log(res);
         array2=res.data;
         console.log(array2 instanceof Array);
         let t=array2;
         setArray2(t);
         let len=array2.length;
         console.log(len);
         setHeight(()=>{      //此处是应对满四个影片 ，换行的算法
           let t=len/4;
           let sum=1000+460*((len/4 === parseInt(len/4))? len/4 : parseInt(len/4)+1);
           return sum+'px';
         })
         console.log(document.getElementsByClassName('ant-card-meta-description'));
         console.log(document.getElementsByClassName('ant-card-meta-description')[4]);
         console.log(document.getElementsByClassName('ant-card-meta-description')[4].style);
         let i=4;
        while(i<len+4)     //此处是对两行以上的大长句用省略号代替（此处跳过了原先的那四个卡片）
        {
          if(i>=4){
            document.getElementsByClassName('ant-card-meta-description')[i].style.display='-webkit-box';
            document.getElementsByClassName('ant-card-meta-description')[i].style.textOverflow='ellipsis';
            document.getElementsByClassName('ant-card-meta-description')[i].style.WebkitLineClamp='2';
            document.getElementsByClassName('ant-card-meta-description')[i].style.webkitBoxOrient='vertical';
          }
          ++i;
        }
      
      })
       .catch((err)=>{
         console.log(err);
       })
       
       let userId=loginUser();       
       console.log(userId);               
       console.log(cookie.loadAll()); 


       setNum(num+1);
       console.log(num);
       console.log(props.location);
       console.log(props.location.state);
       console.log(props.location.params);
      //  console.log(props.location.params.username);
       if(props.location.params !==undefined){
            setName(()=>props.location.params.username);
            setNum(()=>props.location.params.headPortrait);
            props.location.state=props.location.params;
            console.log(props.location);
       }
       if(props.location.state !== undefined){
            setName(()=>props.location.state.username);
            setNum(()=>{return props.location.state.headPortrait;});
            setHeadurl(()=>url+num);
       }
      //  console.log(ref1.current);
       console.log(headurl);
  
   },[]);
  
   useEffect(()=>{
     window.addEventListener('scroll',handlescroll);
   },[])
   
   const handlescroll=()=>{
        //  let scrollheight = document.documentElement.scrollHeight;
        //  let clientheight = document.documentElement.clientHeight;
        if(props.location.pathname === '/home'){
         let scrolltop = document.documentElement.scrollTop;
         console.log(typeof scrolltop);
         console.log(typeof String(scrolltop));
         let len= String(scrolltop)+'px';
         if(scrolltop > 49){
          if(document.getElementsByClassName('ant-layout-header')[0] !==undefined){
          document.getElementsByClassName('ant-layout-header')[0].style.position='fixed';
          document.getElementsByClassName('ant-layout-header')[0].style.top=0;
          
          // document.getElementsByClassName('ant-layout-header')[0].style.zIndex='1000';
          }
         }else{
           if(document.getElementsByClassName('ant-layout-header')[0] !==undefined){
                document.getElementsByClassName('ant-layout-header')[0].style.position='relative';
                document.getElementsByClassName('ant-layout-header')[0].style.top= '0px';
           }
         }
         console.log('移动距离'+' '+scrolltop);
        //  console.log('滑动条能滑动的总长度'+' '+scrollheight);
        //  console.log('可视区高度'+' '+clientheight);
      }
   }
   
   //在react中要移除addEventListener添加的事件时，移除的事件的执行函数必须是显示命名的不能是匿名函数！
   useEffect(()=>{
        return ()=>{  window.removeEventListener('scroll',handlescroll);}     
   },[])

   const getUser=(code)=>{
       let t={code : code};
       axios.post(
        'http://localhost:3017/github/callback',
         t,
        { withCredentials: true }
      )
      .then(res => {
        console.log('res :', res);
        console.log(res.data.login);
        console.log(res.data.avatar_url);
        if(res.data.avatar_url !== undefined){
            setName(res.data.login);
            setHeadurl(res.data.avatar_url);
            console.log(props.location.state);
            props.location.state={username:res.data.login,headPortrait:'66770812',identification:'用户'};
            console.log(props.location.state);
        }
      }).catch((err)=>{
        console.log(err);
      });
   }

   useEffect(
     ()=>{
        let code = getQueryString('code');
        if(code){
            getUser(code);
        }else{
          console.log('github用户授权码错误！（如果没使用第三方登录方式请忽略此消息！）');
        }

     },[]);

   //轮播图的快捷实现
   let i=0;
   useEffect(    //此处借用hooks和array以及array.map和setInterval定时器来进行快速实现一个轮播图的效果（核心原理：z-index）
     ()=>{
      
         array[0]=li1;
         array[1]=li2;
         array[2]=li3;
         array[3]=li4;
         array[4]=li5;
         console.log(array);
        const num = setInterval(()=>{
            if(i>5){
              i=0;
            }
            array.map((value)=>{
               if(value === array[i]){
                 if(value.current === null){
                    clearInterval(num);
                    return;
                 }
                 value.current.style.zIndex=10;
               }else{
                if(value.current === null){
                  clearInterval(num);
                  return;
                }
                 value.current.style.zIndex=0;
               }
            });
            i++;
        },3000);     
     }
   ,[]);

   const To1=(e)=>{
      console.log(e);
    if(props.location.state !== undefined){
      props.history.push({pathname:'/ticket-center',state:{username:props.location.state.username,
        headPortrait:props.location.state.headPortrait,
        identification:props.location.state.identification,
        moviename:'骨傲天',
        url2:'https://img1.baidu.com/it/u=218968881,3976760785&fm=26&fmt=auto&gp=0.jpg',
        director:'安兹乌尔恭'}});
      }else{
        alert('你还未登录！请先登录！');
        props.history.push('/');
      }
   }

   const To2=(e)=>{
    console.log(e);
  if(props.location.state !== undefined){
      props.history.push({pathname:'/ticket-center',state:{username:props.location.state.username,
         headPortrait:props.location.state.headPortrait,
         identification:props.location.state.identification,
         moviename:'罪恶王冠',
         url2:'https://img0.baidu.com/it/u=1475901300,3304432585&fm=26&fmt=auto&gp=0.jpg',
         director:'荒木哲郎'}});
    }else{
        alert('你还未登录！请先登录！');
        props.history.push('/');
    }
   }
   const To3=(e)=>{
        console.log(e);
    if(props.location.state !== undefined){
        props.history.push({pathname:'/ticket-center',state:{username:props.location.state.username,
        headPortrait:props.location.state.headPortrait,
        identification:props.location.state.identification,
        moviename:'终结的炽天使',
        url2:'https://img2.baidu.com/it/u=3607892861,1820949634&fm=26&fmt=auto&gp=0.jpg',
        director:'镜贵也原作'}});
      }else{
        alert('你还未登录！请先登录！');
        props.history.push('/');
      }
   }
   const To4=(e)=>{
     console.log(e);
  if(props.location.state !== undefined){
     props.history.push({pathname:'/ticket-center',state:{username:props.location.state.username,
      headPortrait:props.location.state.headPortrait,
      identification:props.location.state.identification,
      moviename:'幻界战线',
      url2:'https://img2.baidu.com/it/u=3152754910,4189385012&fm=26&fmt=auto&gp=0.jpg',
      director:'松本理惠'}});
    }else{
      alert('你还未登录！请先登录！');
      props.history.push('/');
    }
   }
   const To5=(e)=>{
     console.log(e);
  if(props.location.state !== undefined){
     props.history.push({pathname:'/ticket-center',state:{username:props.location.state.username,
      headPortrait:props.location.state.headPortrait,
      identification:props.location.state.identification,
      moviename:'少年歌行',
      url2:'https://img0.baidu.com/it/u=1853681315,3382179143&fm=26&fmt=auto&gp=0.jpg',
      director:'郭勇，陈升垚'}});
    }else{
      alert('你还未登录！请先登录！');
      props.history.push('/');
    }
   }
   const To6=(e)=>{
    console.log(e);
  if(props.location.state !== undefined){
    props.history.push({pathname:'/ticket-center',state:{username:props.location.state.username,
      headPortrait:props.location.state.headPortrait,
      identification:props.location.state.identification,
      moviename:'命运石之门',
      url2:'https://img0.baidu.com/it/u=3743693278,2021637486&fm=26&fmt=auto&gp=0.jpg',
      director:'5pb'}});
    }else{
      alert('你还未登录！请先登录！');
      props.history.push('/');
    }
   }


   const to1=(e)=>{
     console.log(e.target);
  if(props.location.state !== undefined){
     props.history.push({pathname:'/ticket-center',state:{username:props.location.state.username,
      headPortrait:props.location.state.headPortrait,
      identification:props.location.state.identification,
      moviename:'时尚秀',
      url2:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn08%2F781%2Fw500h281%2F20180615%2F19ed-hcyszrz4311397.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627516616&t=6163a2fa634e04c5c40087cf84b07f81',
      }});
    }else{
      alert('你还未登录！请先登录！');
      props.history.push('/');
    }
   }
   const to2=(e)=>{
    console.log(e.target);
  if(props.location.state !== undefined){
    props.history.push({pathname:'/ticket-center',state:{username:props.location.state.username,
      headPortrait:props.location.state.headPortrait,
      identification:props.location.state.identification,
      moviename:'眷思量',
      url2:'https://img0.baidu.com/it/u=2302393594,1465196984&fm=11&fmt=auto&gp=0.jpg',
      director:'赵禹晴'}});
    }else{
      alert('你还未登录！请先登录！');
      props.history.push('/');
    }
  }
  const to3=(e)=>{
    console.log(e.target);
  if(props.location.state !== undefined){
    props.history.push({pathname:'/ticket-center',state:{username:props.location.state.username,
      headPortrait:props.location.state.headPortrait,
      identification:props.location.state.identification,
      moviename:'百妖普',
      url2:'https://img1.baidu.com/it/u=3293906422,3617264038&fm=26&fmt=auto&gp=0.jpg',
      director:'裟椤双树'}});
    }else{
      alert('你还未登录！请先登录！');
      props.history.push('/');
    }
  }
  const to4=(e)=>{
    console.log(e.target);
  if(props.location.state !== undefined){
    props.history.push({pathname:'/ticket-center',state:{username:props.location.state.username,
      headPortrait:props.location.state.headPortrait,
      identification:props.location.state.identification,
      moviename:'妖精的尾巴',
      url2:'https://img2.baidu.com/it/u=3984097971,3477588582&fm=26&fmt=auto&gp=0.jpg',
      director:'真岛浩'}});
    }else{
      alert('你还未登录！请先登录！');
      props.history.push('/');
    }
  }
  const movienew=(e)=>{
       console.log(e.target);
       console.log(e.target.dataset.index);    //此行方法和下一行方法一样都是，获取dom元素自定义属性的方式
       console.log(e.target.getAttribute('data-index'));   //此行方法和上一行方法一样都是，获取dom元素自定义属性的方式
       console.log(e.target.dataset.moviedirector); 
       console.log(e.target.parentNode);
       if(props.location.state !== undefined && e.target.getAttribute('data-index')==='张哥'){
        props.history.push({pathname:'/ticket-center',state:{username:props.location.state.username,
          headPortrait:props.location.state.headPortrait,
          identification:props.location.state.identification,
          moviename:e.target.dataset.index === undefined ? '妖精的尾巴' : e.target.title,
          url2: (e.target.src === undefined)?'https://img2.baidu.com/it/u=3984097971,3477588582&fm=26&fmt=auto&gp=0.jpg':e.target.src,
          director:(e.target.dataset.moviedirector === undefined) ? '真岛浩' : e.target.dataset.moviedirector,
          moviedescribe:(e.target.dataset.description === undefined) ? undefined :e.target.dataset.description}});
        }else{
          // alert('你还未登录！请先登录！');
          // props.history.push('/');
        }
  }

  const li1=useRef(null);
  const li2=useRef(null);
  const li3=useRef(null);
  const li4=useRef(null);
  const li5=useRef(null);
  const push1=(e)=>{
    console.log(e.target);
  if(props.location.state !== undefined){
    props.history.push({pathname:'/ticket-center',state:{username:props.location.state.username,
      headPortrait:props.location.state.headPortrait,
      identification:props.location.state.identification,
      moviename:'负荷领域',
      url2:'https://img2.baidu.com/it/u=403023851,1335251358&fm=26&fmt=auto&gp=0.jpg',
      director:'真岛浩'}});
    }else{
      alert('你还未登录！请先登录！');
      props.history.push('/');
    }
  }
  const push2=(e)=>{
    console.log(e.target);
  if(props.location.state !== undefined){
      props.history.push({pathname:'/ticket-center',state:{username:props.location.state.username,
        headPortrait:props.location.state.headPortrait,
        identification:props.location.state.identification,
        moviename:'永恒的紫罗兰',
        url2:'https://img0.baidu.com/it/u=4134178414,3922324902&fm=26&fmt=auto&gp=0.jpg',
        director:'真岛浩'}});
   }else{
       alert('你还未登录！请先登录！');
       props.history.push('/');
   }
  }
  const push3=(e)=>{
    console.log(e.target);
  if(props.location.state !== undefined){
    props.history.push({pathname:'/ticket-center',state:{username:props.location.state.username,
      headPortrait:props.location.state.headPortrait,
      identification:props.location.state.identification,
      moviename:'后会无期',
      url2:'https://img0.baidu.com/it/u=1773025454,3196486763&fm=26&fmt=auto&gp=0.jpg',
      director:'真岛浩'}});
    }else{
      alert('你还未登录！请先登录！');
      props.history.push('/');
    }
  }
  const push4=(e)=>{
    console.log(e.target);
  if(props.location.state !== undefined){
    props.history.push({pathname:'/ticket-center',state:{username:props.location.state.username,
      headPortrait:props.location.state.headPortrait,
      identification:props.location.state.identification,
      moviename:'永恒的紫罗兰',
      url2:'https://img0.baidu.com/it/u=4134178414,3922324902&fm=26&fmt=auto&gp=0.jpg',
      director:'真岛浩'}});
    }else{
      alert('你还未登录！请先登录！');
      props.history.push('/');
    } 
  }
  const push5=(e)=>{
    console.log(e.target);
  if(props.location.state !== undefined){
    props.history.push({pathname:'/ticket-center',state:{username:props.location.state.username,
      headPortrait:props.location.state.headPortrait,
      identification:props.location.state.identification,
      moviename:'永恒的紫罗兰',
      url2:'https://img0.baidu.com/it/u=4134178414,3922324902&fm=26&fmt=auto&gp=0.jpg',
      director:'真岛浩'}});
    }else{
      alert('你还未登录！请先登录！');
      props.history.push('/');
    }
  }
  const Search=(e)=>{
        if(e.keyCode === 13){
            console.log('搜影片！');
            console.log(e.target.value);
            let post1={
                username:name,
                moviename:e.target.value
            }
            console.log(post1);
            axios.post('http://localhost:3017/search/movie',post1)
            .then((res)=>{
              console.log(res);
              if(res.data === '没有搜到你要的影片!'){
                   alert('没有搜索到你想要的影片！');
              }else if(res.data === '你还未登录!'){
                   alert('你还没有登录！请登录后再进行操作！');
              }
              else{
                console.log('搜到你想要的影片啦!');
                props.history.push({pathname:'/ticket-center',state:{username:name,
                  headPortrait:num,
                  identification:props.location.state.identification,
                  moviename:res.data.moviename,
                  url2:res.data.movieurl,
                  director:res.data.moviedirector}});
              }
            }).catch((err)=>{
              console.log(err);
            })
        }
  }
  
 

  const logon=(e)=>{
      if(name === '未登录'){
          props.history.push('/');
      }
  }

   return(
     <>
         {/* <WebSocket/> */}
         <Layout style={{position:'relative',height:height}}>
         <Sider style={{position:'relative',height:height}}>
           <Navigation style={{width:'100%',position:'relative'}}/>
         </Sider>
         <Layout style={{height:height}}>
           <div style={{width:'1311px',height:'100%'}}>
             <Header  style={{zIndex:1000,paddingRight:'5px',position:'relative',width:'1319.5px',height:'47px',backgroundColor:'#fff',boxShadow:'0px 20px 13px -10px rgba(0,0,0,0.2)'}}>
              <Row>
                <Col span={6} style={{height:'49px',lineHeight:'49px',overflow:'hidden'}}>
                <h2>🐟水影院(≧∇≦)ﾉ</h2>
                      <span style={{position:'relative',top:'-44.5px',fontSize:'10px'}}>不 负 好 时 光</span>
                </Col>
                <Col span={2} style={{height:'100%'}}>
                      
                </Col>
                <Col span={4} style={{height:'100%'}}>
                      
                </Col>
                <Col span={3} style={{height:'100%',lineHeight:'49px'}}>
                      <a style={{paddingLeft:'20px'}} href=''>退出登录</a>
                </Col>
                <Col span={4} style={{display:'inline-block',lineHeight:'49px',height:'49px'}}>
                      <input onKeyDown={Search} style={{height:'60%'}} placeholder='搜索影片...'></input>
                </Col>
                <Col span={2} style={{height:'49px',lineHeight:'49px',overflow:'hidden'}}>
                      {/* <a style={{paddingLeft:'20px'}} onClick={()=>{props.history.push('/customer/service')}}>客服</a> */}
                      <a style={{paddingLeft:'20px'}} href=''>客服</a>
                </Col>

                <Col span={3} style={{height:'49px',lineHeight:'49px',verticalAlign:'middle',position:'relative',overflow:'hidden'}}>
                   <span  onClick={logon} style={{cursor:'pointer',lineHeight:'40px',verticalAlign:'middle',height:'40px',borderBottom:'2px solid #40a9ffb5',
                   position:'absolute',zIndex:'1000',left:'20px'}}>
                        {name}
                   </span>
                   <div style={{overflow:'hidden',textAlign:'center',lineHeight:'48px',
                    overflow:'hidden',position:'absolute',right:'5px',height:'48px',
                     width:'48px',borderRadius:'24px',backgroundColor:'hsl(0deg 0% 62% / 10%)'}}>
                     <img style={{width:'100%',height:'100%'}} alt='头像'  src={num === ''?headurl : url+num}></img>
                   </div>
                </Col>
               </Row>
             </Header>
             <Content style={{height:'1000px'}}>
                  <Bread1/>
                  {/* <h1 style={{margin:'10px 0px'}}>正在热播</h1> */}
                  <Divider orientation="left">院线热映</Divider>
                  <h1 style={{position:'absolute',right:'0.5%',top:'84px',backgroundColor:'rgb(153 153 153 / 2%)'}}>最新上映</h1>
                  {/* <Divider orientation="right">最新上映</Divider> */}
                  <div style={{overflow:'hidden',height:'300px',width:'1310px'}}>                
                      <div style={{display:'inline-block',height:'300px',width:'46%',marginRight:'5px'}}>
                            <ul style={{position:'relative',height:'100%'}}>
                                <li  onClick={push1} ref={li1} style={{cursor: 'pointer',zIndex:'5',position:'absolute',width:'100%',height:'100%'}}><img style={{width:'100%',height:'100%'}} src='https://img2.baidu.com/it/u=403023851,1335251358&fm=26&fmt=auto&gp=0.jpg'></img></li>
                                <li onClick={push2} ref={li2} style={{cursor:'pointer',zIndex:'4',position:'absolute',width:'100%',height:'100%'}}><img style={{width:'100%',height:'100%'}} src='https://img0.baidu.com/it/u=4134178414,3922324902&fm=26&fmt=auto&gp=0.jpg'></img></li>
                                <li onClick={push3} ref={li3} style={{cursor:'pointer',zIndex:'3',position:'absolute',width:'100%',height:'100%'}}><img style={{width:'100%',height:'100%'}} src='https://img0.baidu.com/it/u=1773025454,3196486763&fm=26&fmt=auto&gp=0.jpg'></img></li>
                                <li onClick={push4} ref={li4} style={{cursor:'pointer',zIndex:'2',position:'absolute',width:'100%',height:'100%'}}><img style={{width:'100%',height:'100%'}} src='https://img1.baidu.com/it/u=687929855,2975458649&fm=26&fmt=auto&gp=0.jpg'></img></li>
                                <li onClick={push5} ref={li5} style={{cursor:'pointer',position:'absolute',width:'100%',height:'100%'}}><img style={{width:'100%',height:'100%'}} src='https://img1.baidu.com/it/u=2985960761,1107001463&fm=26&fmt=auto&gp=0.jpg'></img></li> 
                            </ul>
                      </div>
                      <div style={{display:'inline-block',height:'300px',width:'53.62%'}}>
                           <ul style={{position:'relative',top:'0'}} >
                              <li  onClick={To1} style={{cursor: 'pointer',left:'0',position:'absolute',width:'230px',height:'140px'}}>
                                 <span style={{position:'absolute',bottom:'0',width:'100%',backgroundColor:'rgb(158 158 158 / 10%)',color:'#fff',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
                                   骨傲天王座不保?三月新番史傲天接档，天朝网文的大胜利！
                                 </span>
                                 <img style={{width:'100%',height:'100%'}} src='https://img1.baidu.com/it/u=218968881,3976760785&fm=26&fmt=auto&gp=0.jpg'></img>
                              </li>
                              <li onClick={To2} style={{cursor: 'pointer',left:'33.6%',position:'absolute',width:'230px',height:'140px'}} >
                                   <span style={{position:'absolute',bottom:'0',width:'100%',backgroundColor:'rgb(158 158 158 / 50%)',color:'white',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>
                                     拔剑神曲的背后有一种悲情，叫罪恶王冠
                                   </span>
                                   <img style={{width:'100%',height:'100%'}} src='https://img0.baidu.com/it/u=1668245980,1648358663&fm=26&fmt=auto&gp=0.jpg'></img>
                              </li>
                              <li onClick={To3} style={{cursor: 'pointer',right:'0',position:'absolute',width:'230px',height:'140px'}} >
                                   <span style={{position:'absolute',bottom:'0',width:'100%',backgroundColor:'rgb(158 158 158 / 10%)',color:'#fff',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
                                     终结的炽天使  克鲁鲁*采佩西猜对她的cp了吗?
                                   </span>
                                   <img style={{width:'100%',height:'100%'}} src='https://img2.baidu.com/it/u=795844197,1550040878&fm=26&fmt=auto&gp=0.jpg'></img>
                              </li>
                              <li onClick={To4} style={{cursor: 'pointer',top:'159.8px',left:'0',position:'absolute',width:'230px',height:'140px'}} >
                                   <span style={{position:'absolute',bottom:'0',width:'100%',backgroundColor:'rgb(158 158 158 / 10%)',color:'#fff',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
                                        幻界战线/血界战线  绝望王  偏执王  堕落王，他最终到底会何去何从?
                                   </span>
                                   <img style={{width:'100%',height:'100%'}} src='https://img0.baidu.com/it/u=3511319541,1577969701&fm=26&fmt=auto&gp=0.jpg'></img>
                              </li>
                              <li onClick={To5} style={{cursor: 'pointer',top:'159.8px',left:'33.6%',position:'absolute',width:'230px',height:'140px',overflow:'hidden'}} >
                                    <span style={{zIndex:'1',position:'absolute',bottom:'0',width:'100%',backgroundColor:'rgb(158 158 158 / 10%)',color:'#fff',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
                                        少年歌行，问剑天下，少年当如是！
                                    </span>
                                    <img style={{width:'104%',height:'113%',position:'relative',top:'-4px',left:'-3px'}} src='https://img2.baidu.com/it/u=444197542,406596217&fm=26&fmt=auto&gp=0.jpg'></img>
                              </li>
                              <li onClick={To6} style={{cursor: 'pointer',top:'159.8px',right:'0',position:'absolute',width:'230px',height:'140px'}} >
                                    <span style={{position:'absolute',bottom:'0',width:'100%',backgroundColor:'rgb(158 158 158 / 10%)',color:'#fff',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
                                      命运石之门 克里斯蒂娜的命运将会如何?你猜对了吗？
                                    </span>
                                    <img style={{width:'100%',height:'100%'}} src='https://img0.baidu.com/it/u=1824478674,3761472847&fm=26&fmt=auto&gp=0.jpg'></img>
                              </li>
                           </ul>
                           
                      </div>
                  </div>
                  <Divider orientation="left">即将上映</Divider>
                  <div style={{overflow:'hidden',height:'470px',width:'1310px'}}>                
                  <Row gutter={16}>
                      <Col span={6} style={{textAlign:'center'}} >
                            <span>本周四</span><br></br>
                            <span style={{fontSize:'10px',color:'#999'}}>6月10日首播</span>
                      </Col>
                      <Col span={6} style={{textAlign:'center'}}>
                            <span>本周五</span><br></br>
                            <span style={{fontSize:'10px',color:'#999'}}>6月11日首播</span>
                      </Col>
                      <Col span={6} style={{textAlign:'center'}}>
                            <span>下周一</span><br></br>
                            <span style={{fontSize:'10px',color:'#999'}}>6月14日首播</span>
                      </Col>
                      <Col span={6} style={{textAlign:'center'}}>
                            <span>下周二</span><br></br>
                            <span style={{fontSize:'10px',color:'#999'}}>6月15日首播</span>
                      </Col>
                  </Row>
        
                  <Row gutter={16}>
                      <Col className="gutter-row" onClick={to1} span={6}>
                           <Image01 style={{position:'absolute',top:'0px'}} className='jun' url='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' title='时尚秀' description='巴黎时尚秀，秀出你的自信！' />
                      </Col>
                      <Col onClick={to2} className="gutter-row" span={6}>
                           <Image01 style={{position:'absolute',top:'0px'}} url='https://puui.qpic.cn/vcover_vt_pic/0/gehpfier9upkqz51607581531821/350' title='眷思量' description='超高颜值古风3D动漫' />
                      </Col>
                      <Col onClick={to3} className="gutter-row" span={6}>
                           <Image01 style={{position:'absolute',top:'0px'}} url='https://puui.qpic.cn/vcover_vt_pic/0/sdp0010051jmtz2/260' title='百妖谱' description='鬼医桃夭,善恶如谜。金铃过处,片甲不留。' />
                      </Col>
                      <Col onClick={to4} className="gutter-row" span={6}>
                           <Image01 style={{position:'absolute',top:'0px'}} url='https://img2.baidu.com/it/u=1594027144,4294548182&fm=26&fmt=auto&gp=0.jpg' title='妖精的尾巴' description='纳兹一挑二碾压双龙！' />
                      </Col>
                  </Row>
                      
                  </div>
                  <Divider orientation="left">新增影片</Divider>
              
                    <Row gutter={16}>

                         {array2.map((value)=>{
                           return <Col onClick={movienew} style={{height:'420px',overflow:'hidden',marginBottom:'10px'}} className="gutter-row" span={6}>
                                     <Image01 style={{position:'absolute',top:'0px'}} url={value.movieurl} title={value.moviename} moviedirector={value.moviedirector} description={value.moviedescribe} />
                                  </Col>;
                         })}
                  </Row>
                  <Anchorpoint/>
             </Content>
            </div>
             <Footer style={{backgroundColor:'#fff',borderTop:'1px solid back',position:'relative'}}>
               <h5 style={{position:'absolute',top:'18px'}}>🐟水影院</h5>   
               <h5 style={{position:'absolute',right:'40px',top:'18px'}}>联系方式：110</h5>
               <h5 style={{position:'absolute',top:'40px'}}>总经理：张泽昆</h5>    
               <h5 style={{position:'absolute',right:'40px',top:'40px'}}>版本号：222.01.01</h5> 
               <h5 style={{position:'absolute',top:'60px'}}>备注：中国陕西省咸阳市兴平市育才路</h5>
             </Footer>
         </Layout>
   </Layout>      
     </>
     );
}
