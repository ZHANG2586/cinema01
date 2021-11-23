//排片购票中(组件中要传props.url,props.language,props.office)

import {React,useEffect,useRef,useState} from 'react';
import { Row, Col,Button} from 'antd';
import { withRouter } from 'react-router-dom';


const style = { height:'52px',lineHeight:'52px',textAlign:'center'};
let day=1;

function tickets(props) {
    const [starttime,setStarttime]=new useState(new Date());
    const [time,setTime]=new useState('');
    const [aname,setAname]=new useState('查看排期▽');
    const ref2 = new useRef(null);
    const [moviename2,setMoviename2] = new useState('');
    const see=()=>{
        if(aname !== '查看排期▽'){
            setAname('查看排期▽');
            ref2.current.style.display='none';
      }else{
      setAname('收起△');
      console.log(ref2.current);
      ref2.current.style.display='block';
      }
    }
    useEffect(()=>{
         if(day > 7){
              day=1;
         }
         console.log(starttime);
         setStarttime(starttime.setDate(starttime.getDate() + day++));
         console.log(starttime);
         let year=String(starttime.getFullYear());
         let month=String(starttime.getMonth()+1);
         let day1=String(starttime.getDate());
         let strtime=year+'/'+month+'/'+day1;
         console.log(strtime);
                     
         setTime(()=>{
              return strtime;
         });
         console.log(time);
    },[])
    useEffect(()=>{
     console.log(props);
         if(props.moviename2 !== undefined){
                   console.log(props);
                   setMoviename2(props.moviename2);
         }   
    },[])
    return (
                <>
                        <ul>
                             <li style={{backgroundColor:'white',marginBottom:'10px'}}>
                                <div style={{position:'relative',lineHeight:'150px',height:'150px',left:'2px'}}>
                                      <div style={{width:'200px',height:'100px',lineHeight:'95px',position:'relative',top:'17%'}}>
                                      <img style={{width:'100%',height:'100%',border:'2px solid #acdcf3'}} src={props.url}></img>
                                      </div>
                                       
                                      <div style={{display:'inline-block',position:'absolute',top:'-20px',left:'30%',height:'100%'}}>
                                           <h2 style={{position: 'relative',top: '-25px'}}>{moviename2}</h2>
                                           <h5 style={{position:'absolute',top:'6px',color:'#999'}}>地址：文慧园北路9号今典花园9号二层</h5>
                                           <h5 style={{position:'absolute',top:'24px',color:'#999'}}>电话：010-62228452</h5>
                                       </div>
                                       <div style={{float:'right',position:'relative',top:'-75px',textAlign:'center',height:'60px',width:'150px'}}>
                                          <h2 style={{color:'#1ba4e5',position:'absolute',top:'-50px',textAlign:'center',width:'150px',height:'100px'}}>￥43.9<span style={{color:'black',color:'#999',fontSize:'14px'}}>起</span></h2>
                                          <p onClick={see} style={{borderRadius:'5px',backgroundColor:'#1890ff',color:'white',zIndex:'100',lineHeight:'40px',textAlign:'center',width:'100px',height:'40px',cursor:'pointer',position:'relative',top:'37px',left:'30px'}}>{aname}</p>
                                       </div>
                                </div>
                                <div ref={ref2} style={{width:'1075px',display:'none',marginTop:'5px',marginBottom:'15px'}}>
                                  
                                  <div style={{width:'100%',borderBottom:'1px solid #9999995c',borderTop:'1px solid  rgb(27, 164, 229)',height:'52px',background:'#99999924'}}>
                                        <div style={{textAlign:'center',lineHeight:'48px',width:'255.250px',height:'48px',marginRight:'17px',display:'inline-block'}}>
                                          放映时间
                                        </div>
                                        <div style={{textAlign:'center',lineHeight:'48px',width:'255.250px',height:'48px',marginRight:'17px',display:'inline-block'}}>
                                           语言/版本
                                        </div>
                                        <div style={{textAlign:'center',lineHeight:'48px',width:'255.250px',height:'48px',marginRight:'17px',display:'inline-block'}}>
                                           放映厅
                                        </div>
                                        <div style={{textAlign:'center',lineHeight:'48px',width:'255.250px',height:'48px',marginRight:'17px',display:'inline-block',position:'absolute'}}>
                                            购票
                                        </div>
                                  </div>
                                  <Row gutter={16} style={{ backgroundColor:'white',marginRight:'0px',width:'1089px',height:'52px'}}>
                                       <Col  className="gutter-row" span={6}>
                                            <div style={style}>{time} 14:00</div>
                                       </Col>
                                       <Col className="gutter-row" span={6}>
                                            <div style={style}>{props.language}</div>
                                       </Col>
                                       <Col className="gutter-row" span={6}>
                                            <div style={style}>{props.office}</div>
                                       </Col>
                                       <Col className="gutter-row" span={6}>   
                                          <div  style={{padding: '0',height:'52px',lineHeight:'52px',width:'150px',margin:'auto'}}>
                                              <Button data-number='1' style={{width:'150px',height:'33px'}} onClick={(e)=>{
                                                    if(props.location.state === undefined){
                                                       alert('请重新进行登录！');
                                                       props.history.push('/');
                                                    }
                                                     console.log('kkk'+'  '+e.target);
                                                     console.log(e.target);
                                                     console.log(e.target.parentNode.dataset.number);
                                                     let t=e.target.parentNode.dataset.number;
                                                     if(t !==undefined && moviename2 !== ''){
                                                       props.history.push({pathname:'/ticket-center/tickets',
                                                       state:{username : props.location.state.username,
                                                             headPortrait : props.location.state.headPortrait,
                                                             identification : props.location.state.identification,
                                                             moviename : props.location.state.moviename,
                                                             starttime : time+' '+'14:00',
                                                             url:props.location.state.url2,
                                                             cinemaname:props.moviename2 ? props.moviename2 : '1+x电影生活空间今典花园店（原17.5影城）',
                                                             cinemanumber:t
                                                            }});
                                                       }
                                                  console.log(props.location.state);
                                              }} type="primary">选座购票</Button>
                                           </div>
                                       </Col>
                                  </Row>
                                  <Row gutter={16} style={{backgroundColor:'white',marginRight:'0px',width:'1089px',height:'52px'}}>
                                       <Col className="gutter-row" span={6}>
                                            <div style={style}>{time} 18:00</div>
                                       </Col>
                                       <Col className="gutter-row" span={6}>
                                            <div style={style}>{props.language}</div>
                                       </Col>
                                       <Col className="gutter-row" span={6}>
                                            <div style={style}>{props.office}</div>
                                       </Col>
                                       <Col className="gutter-row" span={6}>
                                            <div  style={{padding: '0',height:'52px',lineHeight:'52px',width:'150px',margin:'auto'}}>
                                            <Button data-number='2' style={{width:'150px',height:'33px'}} onClick={(e)=>{
                                                    if(props.location.state === undefined){
                                                       alert('请重新进行登录！');
                                                       props.history.push('/');
                                                   }
                                                   props.history.push({pathname:'/ticket-center/tickets',
                                                   state:{username : props.location.state.username,
                                                          headPortrait : props.location.state.headPortrait,
                                                          identification : props.location.state.identification,
                                                          moviename : props.location.state.moviename,
                                                          starttime : time + ' ' + '18:00',
                                                          url:props.location.state.url2,
                                                          cinemaname2:props.moviename2,
                                                          cinemanumber :  e.target.parentNode.dataset.number
                                                         }});
                                              }} type="primary">选座购票</Button>
                                            </div>
                                       </Col>
                                  </Row>
                                  <Row gutter={16} style={{backgroundColor:'white',marginRight:'0px',width:'1089px',height:'52px'}}>
                                       <Col className="gutter-row" span={6}>
                                            <div style={style}>{time} 22:00</div>
                                       </Col>
                                       <Col className="gutter-row" span={6}>
                                            <div style={style}>{props.language}</div>
                                       </Col>
                                       <Col className="gutter-row" span={6}>
                                            <div style={style}>{props.office}</div>
                                       </Col>
                                       <Col className="gutter-row" span={6}>
                                            <div  style={{padding: '0',height:'52px',lineHeight:'52px',width:'150px',margin:'auto'}}>
                                               <Button data-number='3' style={{width:'150px',height:'33px'}} onClick={(e)=>{
                                                       if(props.location.state === undefined){
                                                            alert('请重新进行登录！');
                                                            props.history.push('/');
                                                       }
                                                       props.history.push({pathname:'/ticket-center/tickets',
                                                       state:{username : props.location.state.username,
                                                              headPortrait : props.location.state.headPortrait,
                                                              identification : props.location.state.identification,
                                                              moviename : props.location.state.moviename,
                                                              starttime : time + ' ' + '18:00',
                                                              url:props.location.state.url2,
                                                              cinemaname2:props.moviename2,
                                                              cinemanumber :  e.target.parentNode.dataset.number
                                                             }});
                                                }} type="primary">选座购票</Button>
                                            </div>
                                       </Col>
                                  </Row>
                                </div>
                             </li>
                             
                         </ul>
        
                </>
    );
}

export default withRouter(tickets);