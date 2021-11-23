//用户账户管理
import { useState,useEffect} from "react";
import Bread4 from '../../Public/4breadcrumb'
import 'antd/dist/antd.css';
import { Layout,Row, Col } from 'antd';
import axios from "axios";

const { Header, Footer, Sider, Content } = Layout;
let array2=[];
let array=[];

export default function UserNumber(props){
    const [name,setName] = useState('未登录');
    let [num,setNum] = useState(667708);
    const [url,setUrl] = useState('https://avatars.githubusercontent.com/u/');
    const [identification,setIdentification] = useState('');
    let [list,setList]=new useState([]);
    const [array1,setArray1]=new useState([]);
    
    useEffect(
        ()=>{
            if(props.location.state !== undefined){
                  console.log(props.location.state);
                 setName(()=>{
                         return props.location.state.username;
                 });
                 console.log(name);
                 setNum(props.location.state.headPortrait);

                 if(props.location.state.identification === '用户'){
                       props.history.push({pathname:'/home',state:{username:name,headPortrait:num,identification:'用户'}});
                 }else{
                 setIdentification(()=>{return props.location.state.identification});
                 }
            }else{
                  console.log(props.location.state);
                  alert('你还未登录！请登录！');
                  props.history.push('/');
            }
            return;
        }
        ,[]);
        
      useEffect(()=>{
                document.getElementsByClassName('ant-layout-header')[0].style.position='relative';
      },[])

      useEffect(()=>{
            let post1={
                  identification:props.location.state.identification
            }
            list=[];
            axios.post('http://localhost:3017/see/user',post1)
            .then((res)=>{
              console.log(res);
              console.log(res.data instanceof Array);
              res.data.map((value)=>{
                     list.push(value);
              })
              console.log(list);
              let t=list;
              console.log('t:'+t);
              setList(t);

            })
            .catch((err)=>{
              console.log(err);
            })
         

      },[])
    
      

    const onclick=(e)=>{
        let post1={
              username:e.target.dataset.username,
              identification:props.location.state.identification
        }
        axios.post('http://localhost:3017/delete/user',post1,{withCredentials:true})
          .then((res)=>{
                console.log(res);
              if(res.data === 'token验证失败!'){
                
                alert('登录已过期！请重新登录！');
                this.props.history.push('/');   
                  
              }else{

                 if(res.data === '此用户删除成功!'){
                    alert('用户删除成功!');
                    let post1={
                    identification:props.location.state.identification
                 }
                 list=[];
                 axios.post('http://localhost:3017/see/user',post1)
                 .then((res)=>{
                      console.log(res);
                      console.log(res.data instanceof Array);
                      res.data.map((value)=>{
                                list.push(value);
                      })
                      console.log(list);
                      let t=list;
                      console.log('t:'+t);
                      setList(t);
  
                 })
                 .catch((err)=>{
                       console.log(err);
                 })
               }
             }
          }).catch((err)=>{
                console.log(err);
          })    
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

    return (
         <>
               <Layout>
             <Header style={{width:'100%',backgroundColor:'white',boxShadow:'1px 4px 8px 3px rgba(0,0,0,0.2)'}}>
             <Row>
                <Col span={4} style={{height:'64px',lineHeight:'64px'}}>
                      <h2>🐟水影院(≧∇≦)ﾉ</h2>
                      <span style={{position:'relative',top:'-55px'}}>不 负 好 时 光</span>
                </Col>
                <Col span={4} style={{height:'100%'}}>
                      
                </Col>
                <Col span={4} style={{height:'100%'}}>
                      
                </Col>
                <Col span={3} style={{height:'100%'}}>
                      
                </Col>
                <Col span={4} style={{display:'inline-block',lineHeight:'64px',height:'64px'}}>
                        <input onKeyDown={Search} style={{height:'60%'}} placeholder='搜索影片...'></input>
                </Col>
                <Col span={2} style={{height:'64px',lineHeight:'64px',overflow:'hidden'}}>
                      <a style={{paddingLeft:'20px'}} onClick={()=>{props.history.push('/customer/service')}}>客服</a>
                </Col>
                <Col span={3} style={{height:'64px',lineHeight:'64px',verticalAlign:'middle',position:'relative',overflow:'hidden'}}>
                   <span style={{lineHeight:'64px',verticalAlign:'middle',height:'64px',borderBottom:'2px solid #40a9ffb5',
                   position:'absolute',zIndex:'1000',left:'20px'}}>
                        {name}
                   </span>
                   <div style={{overflow:'hidden',textAlign:'center',lineHeight:'64px',
                    overflow:'hidden',position:'absolute',right:'5px',height:'64px',
                     width:'64px',borderRadius:'32px',backgroundColor:'hsl(0deg 0% 62% / 10%)'}}>
                     <img style={{width:'100%',height:'100%'}} alt='头像'  src={url+num}></img>
                   </div>
                </Col>
               </Row>
                  
             </Header>
             <Content style={{width:'100%',height:'800px'}}>
               <Bread4 state={{username :props.location.state === undefined ? '' : props.location.state.username,
                                     headPortrait : props.location.state.headPortrait,
                                     identification : props.location.state.identification,}}
                             breadcrumbName1={{path: '/home',breadcrumbName: '🏠影视大厅'}}
                             breadcrumbName2={{path: '/ticket-center',breadcrumbName: '账户管理>'}}/>
                
                <ul style={{top:'10px',overflow:'hidden',position:'relative',width:'80%',height:'100%',margin:'auto'}}>
                    {list.map((value)=>{
                     
                      return <li   style={{position:'relative',backgroundColor:'white',margin:'10px 0px',width:'100%',padding:'10px',border:'2px solid white'}}><span>用户名：<span>{value.username}</span></span>
                      <span style={{position:'absolute',left:'15%'}}>用户QQ邮箱：<span>{value.email}</span></span>
                      <span style={{position:'absolute',left:'45%'}}>用户头像编号：<span>{value.headPortrait}</span></span>
                      <button data-username={value.username} style={{cursor:'pointer',position:'absolute',right:'4%',top:'18%'}} onClick={onclick}>删除用户</button></li>;
                    })}
                </ul>
             
             </Content>
             <Footer style={{backgroundColor:'#fff',borderTop:'1px solid back',position:'relative'}}>
               <h5 style={{position:'absolute',top:'18px'}}>🐟水影院</h5>   
               <h5 style={{position:'absolute',right:'40px',top:'18px'}}>联系方式：110</h5>
               <h5 style={{position:'absolute',top:'40px'}}>总经理：张泽昆</h5>    
               <h5 style={{position:'absolute',top:'60px'}}>备注：中国陕西省咸阳市兴平市育才路</h5>
             </Footer>
        </Layout>
         </>
    );
}
