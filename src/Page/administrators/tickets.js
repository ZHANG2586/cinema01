//影片添加
import { Component} from "react";
import Bread4 from '../../Public/4breadcrumb'
import 'antd/dist/antd.css';
import {  Input,DatePicker,Layout,Row, Col,Divider,Button} from 'antd';
import axios from "axios";

const {TextArea} = Input;
const { Header, Footer, Sider, Content } = Layout;
let t;

export default class employnumber extends Component{
   constructor(props){
       super(props);
       this.state={
           name:'未登录',
           num:667708,
           url:'https://avatars.githubusercontent.com/u/',
           identification:'',
           moviename:'',
           movieurl:'',
           moviestarttime:'',
           movieduration:'',
           moviedirector:'',
           moviedescribe:'',
           shake:true
       }
   }
   componentWillMount(){
        if(this.props.location.state !== undefined){
            this.setState({name:this.props.location.state.username,
            num:this.props.location.state.headPortrait,
            identification:this.props.location.state.identification
            },()=>{
              console.log(this.state);
            });
            
        }else{
          alert('你还未登录！请先进行登录！');
          this.props.history.push('/');
        }
        return;

   }
   componentDidMount(){
    console.log(document.getElementsByClassName('movieDescribe')[0].children[0].style);
    document.getElementsByClassName('movieDescribe')[0].children[0].style.height='80px';
   }
   onSubmit=(e)=>{
        e.preventDefault();
  
        console.log(this.state);
        if(this.state.shake){
             
             let data={
              movieurl:this.state.movieurl,
              moviename:this.state.moviename,
              moviestarttime:this.state.moviestarttime,
              movieduration:this.state.movieduration,
              moviedirector:this.state.moviedirector,
              moviedescribe:this.state.moviedescribe,
              identification:this.state.identification,
             }
             if(data.movieurl.length >10 && data.moviename.length > 0
              && data.moviestarttime.length > 2 &&data.movieduration.length > 0 
              && data.moviedirector.length > 0 && data.moviedescribe.length >0){

             this.setState({shake:false});
             axios.post('http://localhost:3017/film/add',data,{withCredentials:true})  //前端想要在请求时带上cookie就必须对请求进行配置 ( 添加{withCredentials:true} ) ，否则请求默认是不会携带cookie的哦！（只有这样后端从请求头里获取到的cookie才不会是undefined，进而进行token验证！）
              .then((res)=>{
                console.log(res);
                t = setTimeout(() => {
                  this.setState({shake:true});
                  console.log('防抖成功！');
                  // alert('防抖成功！');
              }, 5000);
              if(res.data === 'token验证失败!'){
                  alert('登录已过期！请重新登录！');
                  this.props.history.push('/');
              }else{
                  if(res.data === '已经添加了该票！不可重复添加！'){
                    alert('已经添加了该票！不可重复添加！')
                  }else{
                    alert('影片添加成功！');
                  }
              }
             }).catch((err)=>{
                console.log(err);
              })
            }else{
                 alert('格式不正确！');
            }   
        }
    
      
   }
   componentWillUnmount(){
     if(t !==undefined){
        clearTimeout(t);
     }
   }
   onchange1=(e)=>{
   
       this.setState({moviename : e.target.value},()=>{
         console.log(e.target.value);
       })
   }
   onchange2=(e)=>{
   
      this.setState({movieurl : e.target.value},()=>{
        console.log(e.target.value);
      })
  }
   onchange3=(e)=>{
    console.log(document.getElementsByClassName('ant-picker-input')[0].children[0].title);
    let starttime=document.getElementsByClassName('ant-picker-input')[0].children[0].value;
    this.setState({moviestarttime : starttime},()=>{
      console.log(this.state.moviestarttime);
    })
   }
   onchange4=(e)=>{
    
      this.setState({movieduration : e.target.value},()=>{
        console.log(e.target.value);
      })
  }
  onchange5=(e)=>{
    
    this.setState({moviedirector : e.target.value},()=>{
      console.log(e.target.value);
    })
  }
  onchange6=(e)=>{
    
    this.setState({moviedescribe : e.target.value},()=>{
      console.log(e.target.value);
    })
  }
  Search=(e)=>{
    if(e.keyCode === 13){
        console.log('搜影片！');
        console.log(e.target.value);
        let post1={
            username:this.state.name,
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
            this.props.history.push({pathname:'/ticket-center',state:{username:this.state.name,
              headPortrait:this.state.num,
              identification:this.props.location.state.identification,
              moviename:res.data.moviename,
              url2:res.data.movieurl,
              director:res.data.moviedirector}});
          }
        }).catch((err)=>{
          console.log(err);
        })
    }
}

render(){
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
                    <input onKeyDown={this.Search} style={{height:'60%'}} placeholder='搜索影片...'></input>
                </Col>
                <Col span={2} style={{height:'64px',lineHeight:'64px',overflow:'hidden'}}>
                      <a style={{paddingLeft:'20px'}} onClick={()=>{props.history.push('/customer/service')}}>客服</a>
                </Col>
                <Col span={3} style={{height:'64px',lineHeight:'64px',verticalAlign:'middle',position:'relative',overflow:'hidden'}}>
                   <span style={{lineHeight:'64px',verticalAlign:'middle',height:'64px',borderBottom:'2px solid #40a9ffb5',
                   position:'absolute',zIndex:'1000',left:'20px'}}>
                        {this.state.name}
                   </span>
                   <div style={{overflow:'hidden',textAlign:'center',lineHeight:'64px',
                    overflow:'hidden',position:'absolute',right:'5px',height:'64px',
                     width:'64px',borderRadius:'32px',backgroundColor:'hsl(0deg 0% 62% / 10%)'}}>
                     <img style={{width:'100%',height:'100%'}} alt='头像'  src={this.state.url+this.state.num}></img>
                   </div>
                </Col>
               </Row>

             </Header>
             <Content style={{width:'100%',height:'100%'}}>
                <div style={{marginBottom:'10px'}}>
                <Bread4  state={{username :this.props.location.state === undefined ? '' : this.props.location.state.username,
                                headPortrait : this.props.location.state.headPortrait,
                                identification : this.props.location.state.identification,}}
                                breadcrumbName1={{path: '/home',breadcrumbName: '🏠影视大厅'}}
                                breadcrumbName2={{path: '/ticket-center',breadcrumbName: '影片添加>'}}/>
                </div>
                <Divider orientation="center" style={{fontSize:'25px'}}>影片添加</Divider>
                <div style={{padding:'10px',width:'100%',margin:'auto'}}>
                      <ul style={{padding:'10px',width:'60%',height:'60%',margin:'auto'}}>
                          <li style={{margin:'10px'}}>
                            <span>movieName：</span>
                            <Input style={{width:'100%',height:'40px',borderRadius:'5px'}} className='moviename' placeholder="请输入影片名称..." allowClear onChange={this.onchange1} />
                          </li> 
                          <li style={{margin:'10px'}}>
                            <span>movieStartTime：</span>
                            <DatePicker  className='moviestarttime'  onBlur={this.onchange3} style={{border:'2px',width:'100%',height:'40px',borderRadius:'5px'}}  placeholder='请输入影片开播日期...' renderExtraFooter={() => '🐟水影院(ﾉ*･ω･)ﾉ'} showTime />
                          </li> 
                          <li style={{margin:'10px'}}>
                            <span>movieUrl：</span>
                            <Input className='movieurl' style={{width:'100%',height:'40px',borderRadius:'5px'}}  placeholder="请输入影片海报的绝对或相对路径..." allowClear onChange={this.onchange2} />
                          </li> 
                          
                          <li style={{margin:'10px'}}>
                            <span>movieDuration：</span>
                            <Input className='movieduration' style={{width:'100%',height:'40px',borderRadius:'5px'}}  placeholder="请输入影片的时长(小时为单位)..." allowClear onChange={this.onchange4} />
                          </li>
                          <li style={{margin:'10px'}}>
                            <span>movieDirector：</span>
                            <Input className='moviedirector' style={{width:'100%',height:'40px',borderRadius:'5px'}}  placeholder="请输入影片导演或作者..." allowClear onChange={this.onchange5} />
                          </li>
                          <li style={{margin:'10px'}}>
                            <span>movieDescribe：</span>
                            <TextArea className='movieDescribe' placeholder='影片描述...' showCount maxLength={200} onChange={this.onchange6} />
                          </li>
                          <Button  onClick={this.onSubmit}  type="primary" style={{width:'120px',height:'40px',marginLeft:'40%'}}>确认添加</Button>
                      </ul>
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

}  