//下一季度预测
import { useEffect, useState } from "react";
import Bread8 from '../../Public/8breadcrumb'
import 'antd/dist/antd.css';
import { Layout,Row, Col } from 'antd';
import { Statistic, Card } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import 'ant-design-pro/dist/ant-design-pro.css';
import { Bar } from 'ant-design-pro/lib/Charts';
import 'ant-design-pro/dist/ant-design-pro.css';
import { TagCloud } from 'ant-design-pro/lib/Charts';
import axios from 'axios';

const { Header, Footer, Sider, Content } = Layout;
const salesData = [];
for (let i = 0; i < 6; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}

const tickets=['命运石之门','Fate/Stay Night','你的名字','骨傲天','命运石之门','Fate/Stay Night',
               '你的名字','骨傲天','命运是之门','Fate/Stay Night','你的名字','骨傲天','命运是之门',
               'Fate/Stay Night','你的名字','骨傲天','命运是之门','Fate/Stay Night','你的名字','骨傲天',
               '命运是之门','Fate/Stay Night','你的名字','骨傲天','命运是之门','Fate/Stay Night','你的名字',
               '骨傲天','命运是之门','Fate/Stay Night','你的名字','骨傲天','恶之花','天气之子','武庚纪','天行九歌'
               ,'恶之花','天气之子','武庚纪','天行九歌','恶之花','天气之子','武庚纪','天行九歌','恶之花','天气之子',
               '武庚纪','天行九歌','恶之花','天气之子','武庚纪','天行九歌','恶之花','天气之子','武庚纪','天行九歌'
               ,'恶之花','天气之子','武庚纪','天行九歌','恶之花','天气之子','武庚纪','天行九歌','恶之花','天气之子',
               '武庚纪','天行九歌','恶之花','天气之子','武庚纪','天行九歌','恶之花','天气之子','武庚纪','天行九歌']
const tags = [];
for (let i = 0; i < 50; i += 1) {
  tags.push({
    name: tickets[i],
    value: Math.floor(Math.random() * 50) + 20,
  });
}

export default function nextquarter(props){
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
                 
            }else{
                  alert('你还未登录！请先进行登录！');
                  this.props.history.push('/');
            }
            return;
        }
        ,[]);

      useEffect(()=>{
          document.getElementsByClassName('ant-col ant-col-20')[0].style.backgroundColor='white';
          console.log(document.getElementsByClassName('ant-card ant-card-bordered')[0]);
          document.getElementsByClassName('ant-card ant-card-bordered')[0].style.border='0';
      },[])

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
   useEffect(()=>{
         document.getElementsByClassName('ant-layout-header')[0].style.position ='relative'; 
   })
  return (
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
                   <Bread8 state={{username :props.location.state === undefined ? '' : props.location.state.username,
                                     headPortrait : props.location.state.headPortrait,
                                     identification : props.location.state.identification,}}
                             breadcrumbName1={{path: '/home',breadcrumbName: '🏠影视大厅'}}
                             breadcrumbName2={{path: '',breadcrumbName: '影院管理'}}
                             breadcrumbName3={{path: '',breadcrumbName: '影院下季度的预判>'}}/>
             
 <div style={{ height:'100%',padding:'10px',width:'70%',margin:'auto'}}>
   <div className="site-statistic-demo-card" style={{width:'100%',height:'100%'}}>
    <Row  gutter={16}>
      <Col span={20} style={{position:'relative',left:'7%'}}>
        <Card style={{position:'relative',top:'10%'}}>
          <Statistic
            title="下季度票房冠军预估"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
        <p style={{position:'relative',top:'9%',left:'3.5%'}}>电影票销售量趋势</p>
        <Bar height={200} title="电影票销售额趋势" data={salesData} />
        <p style={{padding:'10px',margin:'10px 0'}}>下季度可能成为票房冠军的票为下方你最容易看清的：</p>
        <TagCloud data={tags} height={200} />
      </Col>

    </Row>
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