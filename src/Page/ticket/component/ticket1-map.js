//放映厅选座
import React,{ Component, createRef } from 'react'
import 'antd/dist/antd.css';
import { Row, Col, Divider,Button} from 'antd';
import Seat from '../../../images/影院座位.png';
import Seat2 from '../../../images/已售座位.png';
import Seat3 from '../../../images/已选座位.png';
import Seat4 from '../../../images/情侣座位.png';
import axios from 'axios';

const ref1= new createRef(null);

// const array=[
//   'false','false','false','false','false','false','false','false','false',
//   'false','false','false','false','false','false','false','false','false',
//   'false','false','false','false','false','false','false','false','false',
//   'false','false','false','false','false','false','false','false','false',
//   'false','false','false','false','false','false','false','false','false'
// ];

const array=Array.apply([],Array(49)).map((value,index)=>{return 'false'});  //上面的方法不太优雅就使用了此方法来初始化一个有49个'false'的数组

export default class tickets extends Component{
  constructor(props){
      super(props);
      this.state={
         username:'12345678',
         headPortrait:0,
         identification:''
      };
      this.onSubmit=this.onSubmit.bind(this);
  }
  componentDidMount(){
    let num=0;
     array.map((value)=>{
      if(value === 'true'){
        console.log(document.getElementsByClassName(num));
        let dom=document.getElementsByClassName(num)[0];
        console.log(dom);
        if(dom !== undefined){
            dom.src=Seat3;
        }
    }
    ++num;
    });
  //   try{array.map((value) => {     //此处使用了抛出异常并捕获异常的机制来终止数组中的高阶函数array.map()的运行
  //        if(value === 'true'){
  //             console.log(document.getElementsByClassName(num));
  //             let dom=document.getElementsByClassName(num)[0];
  //             console.log(dom);
  //             if(dom !== undefined){
  //                 dom.src=Seat3;
  //             }
  //        }
  //        ++num;
  //        if(num>6){
  //          throw err;
  //        }
  //   });
  // }catch(err){
  //   console.log(err);
  // }
 }
  componentWillMount(){
          console.log(array);
          console.log('zhanshe1');
          console.log(this.props.location.state);
          axios.post('http://localhost:3017/')
         if(this.props.location.state !== undefined){
            this.setState({username:this.props.location.state.username,
            headPortrait:this.props.location.state.headPortrait,
            identification:this.props.location.state.identification
            },()=>{
              console.log(this.state);
            })
            console.log(this.props.location.state);
         }else{
           alert('你还未登录！请登录！');
            this.props.history.push('/');
         }
         let data1=this.props.location.state;
         axios.post('http://localhost:3017/see/ticket',data1)
          .then((res)=>{
               console.log(res);
          })
  }

  onclick(e){
      console.log(e.target);
      console.log(e.target.src);
      console.log(typeof e.target.className);
      console.log(typeof e.target.value);
      let s=e.target.className;
      console.log(array[s]);
      if(array[s] === 'false'){
          e.target.src=Seat3;
          array[s]='true';
          console.log(array[s]);
      }else{
          e.target.src=Seat;
          array[s]='false';
          console.log(array[s]);
      }
  }
  onSubmit(){
      console.log(array);
      let num=0;
      let array2=[];
      array.map((value)=>{       //此处用于筛选已选的座位
         if(value === 'true'){
             array2.push(num);
         }
         num++;
      })
      console.log(array2);
      // let time1=new Date();
   
       console.log(this.props.location.state);
       if(array2.length === 0){
           alert('你还没有选座位！请进行选座！');
           return;
       }
       this.props.history.push({pathname:'/ticket-center/tickets/ticket-generation',
                                      state:{username : this.props.location.state.username,
                                      headPortrait : this.props.location.state.headPortrait,
                                      identification : this.props.location.state.identification,
                                      moviename : this.props.location.state.moviename,
                                      starttime:this.props.location.state.starttime,
                                      number:array2,
                                      url:this.props.location.state.url,
                                      cinemaname:this.props.location.state.cinemaname,
                                      cinemanumber:this.props.location.state.cinemanumber
                              }});
  }

  submit=()=>{
    let i=1,array2=[];
     array.map((value)=>{
       array[i]='true';
       array2.push(i);
       ++i;
     });
     console.log(array);
     console.log(array2); 
     console.log(this.props.location.state);
     if(array2.length === 0){
        alert('你还没有选座位！请进行选座！');
        return;
    }
    this.props.history.push({pathname:'/ticket-center/tickets/ticket-generation',
                                      state:{username : this.props.location.state.username,
                                      headPortrait : this.props.location.state.headPortrait,
                                      identification : this.props.location.state.identification,
                                      moviename : this.props.location.state.moviename,
                                      starttime:this.props.location.state.starttime,
                                      number:array2,
                                      url:this.props.location.state.url,
                                      cinemaname:this.props.location.state.cinemaname,
                                      cinemanumber:this.props.location.state.cinemanumber
                              }});
  
      }

  render(){
      return (
             <>
            <div style={{width:'100%',height:'100%',backgroundColor:'#00968861',overflow:'hidden'}}>
            <Divider orientation="center" style={{color:'white',fontSize:'25px'}}>影院选座</Divider>
            <div style={{height:'60%',position:'relative',overflow:'hidden'}}>
               <div style={{color:'white',textAlign:'center',lineHeight:'25px',position:'relative',left:'23%',width:'800px',height:'25px',backgroundColor:'#666'}}>
                    1+x电影生活空间今典花园店（原17.5影城）6号厅 屏幕方向
               </div>
               <div style={{position:'relative',left:'37%',backgroundColor:'white',width:'374px',margin:'10px 0'}}>
                   <span style={{position:'absolute',left:'0'}}><img src={Seat}></img> 可选</span>
                   <span style={{position:'relative',left:'28%'}}><img src={Seat3}></img> 已选</span>
                   <span style={{position:'relative',left:'42%'}}><img src={Seat2}></img> 已售</span>
                   <span style={{position:'absolute',right:'0'}}><img src={Seat4}></img> 情侣座</span>
               </div>
               <Button  onClick={this.submit}  type="primary" style={{zIndex:'1000',backgroundColor:'#ffc107',border:'1px solid #ffc107',position:'absolute',right:'20%',top:'47%',width:'100px',marginTop:'10px',marginLeft:'46%'}}>影院包场</Button>
               <div style={{ top:'61px',backgroundColor:'#666',borderRadius:'50%',position:'absolute',left:'29%',width:'20px',height:'20px'}}></div>
               <ul style={{position:'absolute',left:'29%',width:'20px',backgroundColor:'#666'}}>
                   <li style={{height:'65.6px',lineHeight:'65.6px',textAlign:'center',color:'white'}}>1</li>
                   <li style={{height:'65.6px',lineHeight:'65.6px',textAlign:'center',color:'white'}}>2</li>
                   <li style={{height:'65.6px',lineHeight:'65.6px',textAlign:'center',color:'white'}}>3</li>
                   <li style={{height:'65.6px',lineHeight:'65.6px',textAlign:'center',color:'white'}}>4</li>
                   <li style={{height:'65.6px',lineHeight:'65.6px',textAlign:'center',color:'white'}}>5</li>
               </ul>
               <div style={{backgroundColor:'#666',borderRadius:'50%',position:'absolute',left:'29%',top:'388px',width:'20px',height:'20px'}}></div>

              <table style={{position:'absolute',left:'31%',backgroundColor:'white'}} cellspacing="40px" cellpadding="20">
                     <tr>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='1' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='2' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='3' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='4' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='5' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='6' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='7' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='8' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='9' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          
                     </tr>
                     <tr>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='10' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='11' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='12' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='13' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='14' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='15' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='16' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='17' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='18' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                     </tr>
                     <tr>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='19' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='20' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='21' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img style={{width:'100%',height:'100%'}} className='22' src={Seat2}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='23' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='24' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='25' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='26' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='27' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                     </tr>
                     <tr>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='28' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='29' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img style={{width:'100%',height:'100%'}} className='30' src={Seat2}></img>
                          </td>
                          <td>
                              <img style={{width:'100%',height:'100%'}} className='31' src={Seat4}></img>
                          </td>
                          <td>
                              <img style={{width:'100%',height:'100%'}} className='32' src={Seat4}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='33' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='34' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='35' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='36' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>  
                     </tr>
                     <tr>
                         <td onClick={this.onclick.bind(this)}>
                              <img style={{cursor:'pointer',width:'100%',height:'100%'}} className='37' src={Seat}></img>
                          </td>
                          <td onClick={this.onclick.bind(this)}>
                              <img style={{cursor:'pointer',width:'100%',height:'100%'}} className='38' src={Seat}></img>
                          </td>
                          <td>
                              <img style={{width:'100%',height:'100%'}} className='39' src={Seat2}></img>
                          </td>
                          <td>
                              <img style={{width:'100%',height:'100%'}} className='40' src={Seat4}></img>
                          </td>
                          <td>
                              <img style={{width:'100%',height:'100%'}} className='41' src={Seat4}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='42' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='43' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='44' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>
                          <td>
                              <img onClick={this.onclick.bind(this)} className='45' style={{cursor:'pointer',width:'100%',height:'100%'}} src={Seat}></img>
                          </td>  
                     </tr>
               </table>
              </div>
              <Button  onClick={this.onSubmit}  type="primary" style={{width:'120px',height:'40px',marginTop:'10px',marginLeft:'46%'}}>确认选座</Button>
               </div>
          </>
      );
  }


}



