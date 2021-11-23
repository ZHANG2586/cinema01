//个人中心
import { useEffect, useState } from "react";
import Bread4 from '../../Public/4breadcrumb';
import 'antd/dist/antd.css';
import { Layout,Row, Col } from 'antd';
import axios from 'axios';
import Anchorpoint from "../../Public/anchor-point";

const { Header, Footer, Sider, Content } = Layout;

let array=[],j=0;
let array2=[];
export default function person(props) {
    
    const [name,setName] = useState('未登录');
    let [num,setNum] = useState(667708);
    const [url,setUrl] = useState('https://avatars.githubusercontent.com/u/');
    const [identification,setIdentification]=useState('');
    let [list,setList]=new useState([]);
    let [math,setMath]=new useState([]);
    const [array1,setArray1]=new useState([]);
    
    useEffect(
        ()=>{
          console.log(props.location);
          if(props.location.params !== undefined){
            setName(props.location.params.username);
           setNum(props.location.params.headPortrait);
           setIdentification(()=>{return props.location.params.identification;});
            props.location.state=props.location.params;
          }
          if(props.location.state !== undefined){
                 setName(()=>{
                         return props.location.state.username;
                 });
                 setNum(()=>{return props.location.state.headPortrait;});
                  setIdentification(()=>{return props.location.state.identification;});    
          }       
        }
    ,[]);

    useEffect(()=>{
         console.log(props.location);
         if(props.location.state !==undefined){
         let post1={
            username:props.location.state.username,
            headPortrait:props.location.state.headPortrait,
            identification:props.location.state.identification
         }
         console.log(post1);
         axios.post('http://localhost:3017/movie/tickets',post1)
        .then((res)=>{
          console.log(res);
          console.log(res.data instanceof Array);
          let j=res.data.length;
          for(let i=1;i<=j;++i){
              array2.push(i);
          }
          console.log(res.data[0].seatNumber);
          console.log(res.data[0].seatNumber.length);
          res.data.map((value)=>{
              array.push(value.seatNumber.length);
          })
          console.log(array);
          setArray1(array);
          let i=0;
          res.data.map((value)=>{
                 value.number=value.seatNumber;
                 value.seatNumber=array[i++];
          });
          setList(res.data);   
          console.log(list);    //此处输出的值滞后，因为useState内部闭包等的机制
          
          list.map(value=>{
             console.log(value);
          });
          console.log(list);
        })
        .catch((err)=>{
          console.log(err);
        })
    }},[])

    const onclick=(e)=>{
          console.log(e.target);
          console.log(e.target.value);
          console.log(typeof e.target.value);
         
          let str=e.target.value.split(',');
         
          console.log(str);
         
          console.log(str);
          console.log(str[0]);
          console.log(str[0]-str[1]);
          console.log(e.target.dataset.url);
          console.log(e.target.parentNode);

          e.target.parentNode.children[2].children[0].value='1';

          console.log(e.target.parentNode.children[2].children[0].value);
          console.log(props.location);

          props.location.state.moviename=e.target.dataset.moviename;
          props.location.state.url=e.target.dataset.url;
          props.location.state.starttime=e.target.dataset.starttime;
          props.location.state.number=str;

          console.log(typeof e.target.dataset.starttime);
          console.log(new Date(e.target.dataset.starttime));

          let date=new Date(e.target.dataset.starttime);
          let year=date.getFullYear();
          let month=date.getMonth()+1;

          console.log(typeof month);

          let day=date.getDate();
          let hours=date.getHours();
          let minutes=date.getMinutes();
          let string=year+'年'+month+'月'+day+'日'+' '+hours+':'+(minutes < 10 ? ('0'+minutes) : minutes);
          props.location.state.starttime=string;
          
          console.log(string);
          console.log(props.location);
          props.history.push({pathname:'/person-tickets',state:
             props.location.state
          });   
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

             </Header>
             <Content style={{width:'100%',height:'800px'}}>
             <Bread4 state={{username :props.location.state === undefined ? '' : props.location.state.username,
                                     headPortrait : props.location.state.headPortrait,
                                     identification : props.location.state.identification,}}
                             breadcrumbName1={{path: '/home',breadcrumbName: '🏠影视大厅'}}
                             breadcrumbName2={{path: '/ticket-center',breadcrumbName: '个人中心>'}}/>
                
              
                <ul style={{top:'10px',overflow:'hidden',position:'relative',width:'80%',height:'100%',margin:'auto'}}>
                    {list.map((value)=>{
                       j++;
                       console.log(j);
                      return <li key={j}  style={{position:'relative',backgroundColor:'white',margin:'10px 0px',width:'100%',padding:'10px',border:'2px solid rgb(172, 220, 243)'}}><span>购票者：<span>{value.username}</span></span>
                      <span style={{position:'absolute',left:'15%'}}>影片名称：<span>{value.moviename}</span></span><span style={{position:'absolute',left:'35%'}}>放映时间：<span>{value.star_time}</span></span>
                      <span style={{position:'relative',left:'58%'}}>购买座位数：<span>{value.seatNumber===45?'土豪包场' : value.seatNumber}</span></span>
                      <button value={value.number} data-starttime={value.star_time} data-moviename={value.moviename} data-url={value.url} style={{cursor:'pointer',position:'absolute',right:'4%',top:'18%'}} onClick={onclick}>电影票详情</button></li>;
                    })}
                </ul>
              <Anchorpoint/>
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