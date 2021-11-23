//本季度财务账单
import { Component } from "react";
import Bread8 from '../../Public/8breadcrumb'
import 'antd/dist/antd.css';
import { Layout,Row, Col } from 'antd';
import { Statistic, Card } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
// import 'ant-design-pro/dist/ant-design-pro.css';
import { Pie, yuan,MiniArea,ChartCard} from 'ant-design-pro/lib/Charts';
import 'ant-design-pro/dist/ant-design-pro.css';
import moment from 'moment';
import NumberInfo from 'ant-design-pro/lib/NumberInfo';
import numeral from 'numeral';
import axios from "axios";

const { Header, Footer, Sider, Content } = Layout;
let k;
let money=3;


const salesPieData = [
   {
     x: '《命运之夜：无限剑制》',
     y: 10000,
   },
   {
     x: '《言叶之庭》',
     y: 8000,
   },
   {
     x: '《你的名字》',
     y: 6000,
   },
   {
     x: '《命运石之门》',
     y: 5000,
   },
   {
     x: '《百妖普》',
     y: 6000,
   },
   {
     x: '《骨傲天》',
     y: 9000,
   },


 ];

const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 121; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay-1000*60*60*24*120 + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: Math.floor(Math.random() * 100) + 10,
  });
}

export default class a extends Component{
    constructor(props){
     super(props);
     this.state={
        money:'本季度财务',
        name:'未登录',
        url:'https://avatars.githubusercontent.com/u/',
        num:667708,
        identification:''
     }
    }
    componentWillMount(){
        
         k = 10 > 8 ? 'red' : 'green';
         
        
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
       money=10;
       document.getElementsByClassName('antd-pro-charts-pie-chart')[0].style.position='relative';
       document.getElementsByClassName('antd-pro-charts-pie-chart')[0].style.left='-15%';
       document.getElementsByClassName('antd-pro-charts-pie-legend')[0].style.width='322px';
       this.setState({});
  
    }
    componentDidUpdate(){
      document.getElementsByClassName('ant-layout-header')[0].style.position='relative';
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
             <Content style={{width:'100%',height:'800px'}}>
                     
                     <Bread8 state={{username :this.props.location.state === undefined ? '' : this.props.location.state.username,
                                     headPortrait : this.props.location.state.headPortrait,
                                     identification : this.props.location.state.identification,}}
                             breadcrumbName1={{path: '/home',breadcrumbName: '🏠影视大厅'}}
                             breadcrumbName2={{path: '',breadcrumbName: '影院管理'}}
                             breadcrumbName3={{path: '',breadcrumbName: '影院本季度账单>'}}/>
                     
 <div style={{padding:'10px',width:'100%',height:'100%',margin:'auto'}}>
    <div className="site-statistic-demo-card" style={{width:'100%',height:'100%'}}>
                     
     <Row gutter={16}>
         <Col span={12}>
              <Card style={{position:'relative',top:'2%'}}>
                  <Statistic
                       title = '本季度票房冠军同比上季度'
                       value={11.28}
                       precision={3}
                       valueStyle={{ color: '#3f8600' }}
                       prefix={<ArrowUpOutlined />}
                       suffix="%"
                  />
                   <p style={{padding:'5px',margin:'10px 0'}}>本季度票房冠军：<spn>{2 > 3 ? '《你好世界》' : '《命运之夜：无限剑制》'}</spn></p>
                   <p style={{padding:'5px',margin:'10px 0'}}>本季度售票总数：<span>1000张</span></p>
                   <p style={{padding:'5px',margin:'10px 0'}}>同比上季度<span>{1000 > 500 ?'多售出' : '少售出'}</span>：500张</p>
                  
                   <p style={{padding:'5px',margin:'10px 0'}}>本季度卖出的票的总金额：<span>{money}万元</span></p>
                   <Pie  stye={{position:'relative',left:'0'}}
                         hasLegend
                         title="销售额"
                         subTitle="本季度销售额"
                         total={() => (
                                 <span
                                   dangerouslySetInnerHTML={{
                                       __html: yuan(salesPieData.reduce((pre, now) => now.y + pre, 0)),
                                     }}
                                  />
                                )}
                         data={salesPieData}
                         valueFormat={val => <span dangerouslySetInnerHTML={{ __html: yuan(val) }} />}
                         height={294}
                    />

               </Card>
        </Col>
        <Col span={12}>
              <Card style={{position:'relative',top:'15%'}}>
                 <Statistic
                    title="本季度支出同比上季度"
                    value={9.3}
                    precision={3}
                    valueStyle={{color:k}}
                    prefix={ 600 > 500 ? <ArrowDownOutlined /> : <ArrowUpOutlined style={{color:'#3f8600'}} />}
                    suffix="%"
                 />
                   <p style={{padding:'5px',margin:'10px 0'}}>本季度支出总额：<span>1000元</span></p>
                   <p style={{padding:'5px',margin:'10px 0'}}>同比上季度<span>{1000 > 500 ?'多支出' : '少支出'}</span>：500元</p>
                   <p style={{padding:'5px',margin:'10px 0',marginBottom:'60px'}}>本季度支出折线图如下：</p>
                   {/* <NumberInfo
                       subTitle={<span>本周访问</span>}
                       total={numeral(12321).format('0,0')}
                       status="up"
                       subTotal={17.1}
                   />
                 <MiniArea  line color="#cceafe" height={100} data={visitData} /> */}
                 <ChartCard title="本季度用户访问数量" total={numeral(88460).format('0,0')} contentHeight={134}>
                 <NumberInfo
                        subTitle={<span>本周访问</span>}
                        total={numeral(2321).format('0,0')}
                        status="up"
                        subTotal={17.1}
                 />
        <MiniArea line height={45} data={visitData} />
      </ChartCard>
              </Card>
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

}