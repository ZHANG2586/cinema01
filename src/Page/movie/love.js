//爱情片

import Bread4 from '../../Public/4breadcrumb';
import { useState,useEffect,useRef} from "react";
import 'antd/dist/antd.css';
import { Layout,Row, Col,Divider} from 'antd';
import Anchorpoint from '../../Public/anchor-point'
import Image01 from '../../Public/image01'
import axios from 'axios';

const style = { background: '#0092ff', padding: '8px 0' };
const { Header, Footer, Sider, Content } = Layout;
const array=[];
export default function comic(props){
    const [name,setName] = useState('未登录');
    let [num,setNum] = useState(667708);
    const [url,setUrl] = useState('https://avatars.githubusercontent.com/u/');
    const [identification,setIdentification]=useState('');
       
    useEffect(
          ()=>{
              if(props.location.state !== undefined){
                  setName(()=>{
                           return props.location.state.username;
                  });
                  setNum(()=>{return props.location.state.headPortrait;});
                  setIdentification(()=>{return props.location.state.identification;});      
              }
            return;
        }
        ,[]);
        let i=0;
        useEffect(
          ()=>{
              array[0]=li1;
              array[1]=li2;
              array[2]=li3;
              array[3]=li4;
              array[4]=li5;
              console.log(array);
             //  array.map((value)=>{
             //    if(j===0){
             //      value.current.style.zIndex=1;
             //    }
             //    else{
             //         value.current.style.zIndex=0;
             //    }
             //    j++;
             //    console.log(value.current);
             //  })
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
            url2:'https://img1.baidu.com/it/u=3171341796,3554040854&fm=26&fmt=auto&gp=0.jpg',
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
            moviename:'唐人街探案',
            url2:'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2940973367,2508319274&fm=58&app=83&f=JPEG?w=400&h=533&s=08E46084CC947CDE3E3C94D003008099',
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

    return (
     <>
        <Layout>
             <Header style={{backgroundColor:'white',boxShadow:'1px 4px 8px 3px rgba(0,0,0,0.2)'}}>
             <Row>
                <Col span={4} style={{overflow:'hidden',height:'64px',lineHeight:'64px'}}>
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
               <Anchorpoint/>
             </Header>
             <Content style={{width:'100%',height:'1800px'}}>
                  <Bread4 state={{username :props.location.state === undefined ? '' : props.location.state.username,
                                     headPortrait : props.location.state.headPortrait,
                                     identification : props.location.state.identification,}}
                             breadcrumbName1={{path: '/home',breadcrumbName: '🏠影视大厅'}}
                             breadcrumbName2={{path: '/ticket-center',breadcrumbName: '爱情片>'}}/>

                     <Divider orientation="left">院线热映</Divider>
                  {/* <Divider orientation="right">最新上映</Divider> */}
                  <div style={{position:'relative',left:'64.25px',overflow:'hidden',height:'300px',width:'1391px'}}>                
                      <div style={{display:'inline-block',height:'300px',width:'46%',marginRight:'5px'}}>
                            <ul style={{position:'relative',height:'100%'}}>
                                <li  onClick={push1} ref={li1} style={{cursor: 'pointer',zIndex:'5',position:'absolute',width:'100%',height:'100%'}}><img style={{width:'100%',height:'100%'}} src='https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2940973367,2508319274&fm=58&app=83&f=JPEG?w=400&h=533&s=08E46084CC947CDE3E3C94D003008099'></img></li>
                                <li onClick={push2} ref={li2} style={{cursor:'pointer',zIndex:'4',position:'absolute',width:'100%',height:'100%'}}><img style={{width:'100%',height:'100%'}} src='https://i0.hdslb.com/bfs/sycp/creative_img/202106/0a9f347a2aab0a089bee36685a29ac8d.jpg@880w_388h_1c_95q'></img></li>
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
                                 <img style={{width:'100%',height:'100%'}} src='https://img1.baidu.com/it/u=3171341796,3554040854&fm=26&fmt=auto&gp=0.jpg'></img>
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
  <Divider orientation="left">首播影院</Divider>
  <Row gutter={16} style={{marginLeft:'-8px',width:'1534px',ovwrflow:'hidden'}}>
      <Col className="gutter-row" span={6}>
          <Image01 style={{position:'absolute',top:'0px'}} className='jun' url='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' title='时尚秀' description='巴黎时尚秀，秀出你的自信！' />
      </Col>
      <Col className="gutter-row" span={6}>
           <Image01 style={{position:'absolute',top:'0px'}} className='jun' url='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' title='时尚秀' description='巴黎时尚秀，秀出你的自信！' />
      </Col>
      <Col className="gutter-row" span={6}>
           <Image01 style={{position:'absolute',top:'0px'}} className='jun' url='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' title='时尚秀' description='巴黎时尚秀，秀出你的自信！' />
      </Col>
      <Col className="gutter-row" span={6}>
           <Image01 style={{position:'absolute',top:'0px'}} className='jun' url='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' title='时尚秀' description='巴黎时尚秀，秀出你的自信！' />
      </Col>
    </Row>
    <Divider orientation="left">自制电影</Divider>
    <Row gutter={16} style={{marginLeft:'-8px',width:'1534px',ovwrflow:'hidden'}}>
      <Col className="gutter-row" span={6}>
          <Image01 style={{position:'absolute',top:'0px'}} className='jun' url='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' title='时尚秀' description='巴黎时尚秀，秀出你的自信！' />
      </Col>
      <Col className="gutter-row" span={6}>
           <Image01 style={{position:'absolute',top:'0px'}} className='jun' url='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' title='时尚秀' description='巴黎时尚秀，秀出你的自信！' />
      </Col>
      <Col className="gutter-row" span={6}>
           <Image01 style={{position:'absolute',top:'0px'}} className='jun' url='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' title='时尚秀' description='巴黎时尚秀，秀出你的自信！' />
      </Col>
      <Col className="gutter-row" span={6}>
           <Image01 style={{position:'absolute',top:'0px'}} className='jun' url='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' title='时尚秀' description='巴黎时尚秀，秀出你的自信！' />
      </Col>
    </Row>
    <Divider orientation="left">强势接档</Divider>
    <Row gutter={16} style={{marginLeft:'-8px',width:'1534px',ovwrflow:'hidden'}}>
      <Col className="gutter-row" span={6}>
          <Image01 style={{position:'absolute',top:'0px'}} className='jun' url='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' title='时尚秀' description='巴黎时尚秀，秀出你的自信！' />
      </Col>
      <Col className="gutter-row" span={6}>
           <Image01 style={{position:'absolute',top:'0px'}} className='jun' url='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' title='时尚秀' description='巴黎时尚秀，秀出你的自信！' />
      </Col>
      <Col className="gutter-row" span={6}>
           <Image01 style={{position:'absolute',top:'0px'}} className='jun' url='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' title='时尚秀' description='巴黎时尚秀，秀出你的自信！' />
      </Col>
      <Col className="gutter-row" span={6}>
           <Image01 style={{position:'absolute',top:'0px'}} className='jun' url='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' title='时尚秀' description='巴黎时尚秀，秀出你的自信！' />
      </Col>
    </Row>

             
             </Content>
             <Footer style={{backgroundColor:'#fff',borderTop:'1px solid back',position:'relative'}}>
               <h5 style={{position:'absolute',top:'18px'}}>🐟水影院</h5>   
               <h5 style={{position:'absolute',right:'40px',top:'18px'}}>联系方式：110</h5>
               <h5 style={{position:'absolute',top:'40px'}}>总经理：张泽昆</h5>    
               <h5 style={{position:'absolute',top:'60px'}}>备注：中国陕西省咸阳市兴平市育才路</h5>
             </Footer>
             {/* <Anchorpoint/> */}
        </Layout>
     </>
    );
}