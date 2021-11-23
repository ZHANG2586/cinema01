//购票中心
import { useEffect, useRef, useState } from "react";
import Bread4 from '../../Public/4breadcrumb'
import 'antd/dist/antd.css';
import { Layout,Row, Col,Button} from 'antd';
import { Tabs } from 'antd';
import {PhoneOutlined} from '@ant-design/icons';
import Anchorpoint from '../../Public/anchor-point';
import axios from 'axios';
import Stickets from '../../Public/tickets'

const { Header, Footer, Sider, Content } = Layout;
const  {TabPane} = Tabs;
const style = { padding: '8px 0',textAlign:'center'};

const callback=(key)=>{
    console.log(key);
}
export default function  ticket(props) {

    const [name,setName] = useState('未登录');
    let [num,setNum] = useState(667708);
    const [url,setUrl] = useState('https://avatars.githubusercontent.com/u/');
    const [identification,setIdentification]=useState('');

    const [moviename,setMoviename] = useState('你好世界');
    const [url2,setUrl2] = useState('https://img.daeyes.com.cn:8081/uploads/images/Film/25adf535-6b55-4116-8dd9-dedeb84e57ee/20210520091242.jpg');
    const [director,setDirector] =new useState('张泽昆');
    const [star,setStar] =new useState('张哥');
    const [type,setType] = new useState('2D/3D')
    const [duration,setDuration] = new useState('100分钟');
    const [text,setText] = new useState('在京都居住的内向男高中生直实（北村匠海 配音）的面前，突然出现从10年后穿越而来26岁的自己（松坂桃李 配音）。未来的直实告诉他，自己不久便会与琉璃（滨边美波 配音）相爱，可是之后烟花大会时她却会因为一场事故意外离世。为了拯救爱人，16岁的直实卷入了这场现实与虚拟的记忆世界，经历了一系列超乎想象的事情。即使世界毁灭，我也想再见你一面。');
 
    useEffect(
        ()=>{
            if(props.location.state !== undefined){
                 if(props.location.state.username === 'undefined'){
                      alert('你还未登录！请先登录！');
                      props.history.push('/');
                 }
                 console.log(props.location.state);
                 setName(()=>{
                         return props.location.state.username;
                 });
                 setNum(()=>{return props.location.state.headPortrait;});
                 setIdentification(()=>{return props.location.state.identification;}); 
            }
            return;
        }
        ,[]);

     useEffect(()=>{
          if(props.location.state !== undefined){
               if(props.location.state.moviename !== undefined){
                    setMoviename(props.location.state.moviename);
              }
              if(props.location.state.username !==undefined && props.location.state.moviename ===undefined){
                   props.location.state.moviename=moviename;
              }
               if(props.location.state.url2 !== undefined){
                     setUrl2(props.location.state.url2);
               }else{
                    props.location.state.url2=url2;
               }

               if(props.location.state.director !== undefined){
                    setDirector(props.location.state.director);
               }
          }
     },[]);

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
              setMoviename(res.data.moviename);  
              setUrl2(res.data.movieurl);
              setDirector(res.data.moviedirector);
                props.history.push({pathname:'/ticket-center',state:{username:name,
                headPortrait:num,
                identification:props.location.state.identification,
                moviename:res.data.moviename,
                url2:res.data.movieurl,
                director:res.data.moviedirector}});
                console.log('被屏蔽了吗!');
               
            }

          }).catch((err)=>{
            console.log(err);
          })
      }
}
       
      useEffect(()=>{
            console.log('影片概述：'+props.location.state.moviedescribe)
          if(props.location.state.moviedescribe !== undefined){
                 setText(props.location.state.moviedescribe);
          }
      },[])

      return(
          <>
            <Layout>
             <Header style={{backgroundColor:'white',boxShadow:'1px 4px 8px 3px rgba(0,0,0,0.2)'}}>
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
                   <span style={{lineHeight:'64px',textAlign:'center',height:'64px',width:'80px',borderBottom:'2px solid #40a9ffb5',
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
             <Content style={{width:'100%',height:'1500px'}}>
                     <Bread4 state={{username :props.location.state === undefined ? '' : props.location.state.username,
                                     headPortrait : props.location.state.headPortrait,
                                     identification : props.location.state.identification,}}
                             breadcrumbName1={{path: '/home',breadcrumbName: '🏠影视大厅'}}
                             breadcrumbName2={{path: '/ticket-center',breadcrumbName: '购票中心>'}}/>
                     <div style={{marginTop:'5px'}}>
                     <Row>
                          <Col span={5}  style={{height:'400px'}}>
                              <img src={url2} style={{width:'100%',height:'100%'}} alt='网络卡顿或资源路径失效'></img>
                          </Col>
                          <Col span={12}  style={{height:'400px'}}>
                                <div style={{marginLeft:'15px',marginTop:'10px',fontSize:'22px',padding:'18px 0px'}}>{moviename}</div>
                                <h4 style={{color:'#1ba4e5',marginLeft:'15px',padding:'18px 0px',borderBottom:'1px solid #bababacc'}}>导演：<span style={{color:'black',fontSize:'15px'}}>{director}</span></h4>
                                <h4 style={{color:'#1ba4e5',marginLeft:'15px',padding:'18px 0px',borderBottom:'1px solid #bababacc'}}>主演：<span style={{color:'black',fontSize:'15px'}}>{star}</span></h4>
                                <h4 style={{color:'#1ba4e5',marginLeft:'15px',padding:'18px 0px',borderBottom:'1px solid #bababacc'}}>类型：<span style={{color:'black',fontSize:'15px'}}>{type}</span></h4>
                                <h4 style={{color:'#1ba4e5',marginLeft:'15px',padding:'18px 0px',borderBottom:'1px solid #bababacc'}}>片长：<span style={{color:'black',fontSize:'15px'}}>{duration}</span></h4>             
                          </Col>
                          <Col span={6}  style={{marginLeft:'10px',height:'400px'}}>
                                <div style={{borderBottom:'',color:'#1ba4e5',fontSize:'26px',lineHeight:'79.09px',textAlign:'center',marginTop:'60px',height:'79.09px'}}>
                                    <PhoneOutlined/>400-687-0707
                                </div>
                                <div style={{backgroundColor:'#9e9e9e12',borderTop:'1px solid #9e9e9e69',fontSize:'15px',lineHeight:'60px',textAlign:'center',height:'60px'}}>
                                      周一至周天 09:00 ~ 20:00
                                </div>
                          </Col>
                     </Row>
                  
                   </div>
                   <Tabs defaultActiveKey="1" onChange={callback} style={{backgroundColor:'#f6f6f6',width:'71%'}}>
                      <TabPane tab="排片购票" key="1">
                          <Stickets url='https://img.daeyes.com.cn:8081/uploads/images/Cinema/11140641/11140641.jpg' moviename2='1+x电影生活空间今典花园店（原17.5影城）'  language='国语' office='6号厅(激光厅)'/>
                          <Stickets url='https://img.daeyes.com.cn:8081/uploads/images/Cinema/11080961/11080961.jpg' moviename2='辉煌影业今典花园店（原17.6影城）' language='法语' office='9号厅'/>
                          <Stickets url='https://img.daeyes.com.cn:8081/uploads/images/Cinema/11066701/11066701.jpg' moviename2='极限影业今典花园店（原17.7影城）' language='德语' office='10号厅'/>
                          <Stickets url='https://img.daeyes.com.cn:8081/uploads/images/Cinema/11060721/11060721.jpg' moviename2='万达影视今典花园店（原17.8影城）' language='国语' office='11号厅'/>
                         
                      </TabPane>
                      <TabPane tab="影视详情" key="2" style={{height:'100px'}}>
                              <span>
                                     {text}
                              </span>
                      </TabPane>
                      <TabPane tab="预告片" key="3" style={{textAlign:'center',height:'100px',lineHeight:'100px'}}>
                                  <span >亲！暂时没有预告片，请稍后再试！</span>
                      </TabPane>
                   </Tabs>
                   <div style={{marginLeft:'10px',height:'1011px',width:'379.300px',position:'absolute',right:'54px',top:'491px'}}>
                        <span style={{display:'inline-block',fontSize:'20px',marginBottom:'4px'}}>热映影片排行榜</span>
                        <div style={{position:'relative',width:'100%',height:'154px',marginBottom:'10px'}}>
                              <img style={{width:'120px',height:'100%'}} src='https://img.daeyes.com.cn:8081/uploads/images/Film/830d1dd8-a09c-47de-98b7-23465356eee3/20210601085827.jpg'></img>
                              <p style={{display:'inline-block',marginLeft:'13px'}}>
                                <h3>热带往事</h3>
                                <span style={{fontSize:'10px',color:'#999'}}>导演：温仕培</span><br></br>
                                <span style={{fontSize:'10px',color:'#999'}}>184家影院上映1782场</span>
                                <p style={{position:'absolute',bottom:'-14px'}}><Button  style={{borderRadius:'5px'}} type="primary">选座购票</Button></p>
                              </p>
                        </div>
                        <div style={{position:'relative',width:'100%',height:'154px',marginBottom:'10px'}}>
                              <img style={{width:'120px',height:'100%'}} src='https://img.daeyes.com.cn:8081/uploads/images/Film/25adf535-6b55-4116-8dd9-dedeb84e57ee/20210520091242.jpg'></img>
                              <p style={{display:'inline-block',marginLeft:'13px'}}>
                                <h3>你好世界</h3>
                                <span style={{fontSize:'10px',color:'#999'}}>导演：伊藤智彦</span><br></br>
                                <span style={{fontSize:'10px',color:'#999'}}>169家影院上映1253场</span>
                                <p style={{position:'absolute',bottom:'-14px'}}><Button  style={{borderRadius:'5px'}} type="primary">选座购票</Button></p>
                              </p>
                        </div>
                        <div style={{position:'relative',width:'100%',height:'154px',marginBottom:'10px'}}>
                               <img style={{width:'120px',height:'100%'}} src='https://img.daeyes.com.cn:8081/uploads/images/Film/b527398d-b46a-4084-9ff0-a34a110119db/20210525091819.jpg'></img>
                              <p style={{display:'inline-block',marginLeft:'13px'}}>
                                <h3>天堂电影院</h3>
                                <span style={{fontSize:'10px',color:'#999'}}>导演：朱塞佩·托纳多雷</span><br></br>
                                <span style={{fontSize:'10px',color:'#999'}}>184家影院上映1782场</span>
                                <p style={{position:'absolute',bottom:'-14px'}}><Button  style={{borderRadius:'5px'}} type="primary">选座购票</Button></p>
                              </p>
                        </div>
                        <div style={{position:'relative',width:'100%',height:'154px',marginBottom:'10px'}}>
                              <img style={{width:'120px',height:'100%'}} src='https://img.daeyes.com.cn:8081/uploads/images/Film/e26c6218-c518-4ca4-be7d-0515323918c0/20210508140837.jpg'></img>
                              <p style={{display:'inline-block',marginLeft:'13px'}}>
                                <h3>速度与激情9</h3>
                                <span style={{fontSize:'10px',color:'#999'}}>导演：林诣彬</span><br></br>
                                <span style={{fontSize:'10px',color:'#999'}}>184家影院上映1782场</span>
                                <p style={{position:'absolute',bottom:'-14px'}}><Button  style={{borderRadius:'5px'}} type="primary">选座购票</Button></p>
                              </p>  
                        </div>
                        <div style={{position:'relative',width:'100%',height:'154px',marginBottom:'10px'}}>
                              <img style={{width:'120px',height:'100%'}} src='https://img.daeyes.com.cn:8081/uploads/images/Film/989b0ca1-264a-4047-9b50-49654089c5fb/20210402093901.jpg'></img>
                              <p style={{display:'inline-block',marginLeft:'13px'}}>
                                <h3>悬崖之上</h3>
                                <span style={{fontSize:'10px',color:'#999'}}>导演：张艺谋</span><br></br>
                                <span style={{fontSize:'10px',color:'#999'}}>125家影院上映703场</span>
                                <p style={{position:'absolute',bottom:'-14px'}}><Button  style={{borderRadius:'5px'}} type="primary">选座购票</Button></p>
                              </p>
                        </div>
                        <div style={{position:'relative',width:'100%',height:'154px',marginBottom:'10px'}}>
                              <img style={{width:'120px',height:'100%'}} src='https://img.daeyes.com.cn:8081/uploads/images/Film/830d1dd8-a09c-47de-98b7-23465356eee3/20210601085827.jpg'></img>
                              <p style={{display:'inline-block',marginLeft:'13px'}}>
                                <h3>热带往事</h3>
                                <span style={{fontSize:'10px',color:'#999'}}>导演：温仕培</span><br></br>
                                <span style={{fontSize:'10px',color:'#999'}}>184家影院上映1782场</span>
                                <p style={{position:'absolute',bottom:'-14px'}}><Button  style={{borderRadius:'5px'}} type="primary">选座购票</Button></p>
                              </p>
                        </div>
                   </div>

                      
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