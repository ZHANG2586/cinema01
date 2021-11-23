//选组成功后进行购票的生成

import React,{Component, useEffect, useState} from 'react';
import axios from 'axios';
import {  Divider,Button} from 'antd';
import 'antd/dist/antd.css';
import img1 from '../../../images/支付宝.jpg';
import img2 from '../../../images/微信.png';


export default function  Ticketgeneration(props) {
    const [url,setUrl]=new useState('https://img.daeyes.com.cn:8081/uploads/images/Film/25adf535-6b55-4116-8dd9-dedeb84e57ee/20210520091242.jpg');
    const [moviename,setMoviename]=new useState('你好世界');
    const [starttime,setStarttime]=new useState('无');
    const [office,setOffice]=new useState('6号厅');
    const [money,setMoney] = new useState(45.9);
    const [list,setList]=new useState([]);
   

    useEffect(()=>{
          console.log(props.location);
          if(props.location.state !== undefined){
                setUrl(props.location.state.url);
                setMoviename(()=>props.location.state.moviename);
                setStarttime(()=>props.location.state.starttime);
                setList(props.location.state.number)
                console.log(list);
                
          }
    },[])
    
    const onSubmit=()=>{
        console.log(list);
        if(list.length===0){
            alert('亲你还没有选座！请选完座再来购票！');
            return;
        }
      
        // let time1=new Date();
  
        let post1={
            username:props.location.state.username,
            moviename:props.location.state.moviename,
            number:list,
            star_time:props.location.state.starttime,
            url:props.location.state.url,
            cinemaname:props.location.state.cinemaname,
            cinemanumber:props.location.state.cinemanumber
        }
        console.log(post1);
        axios.post('http://localhost:3017/yuding/zuowei/add',post1,{withCredentials:true})
           .then((res)=>{
                console.log(res.data);
                alert('购票成功！');
                console.log(props.location.state);
                props.history.push({pathname:'/ticket-center',
                                        state:{username : props.location.state.username,
                                        headPortrait : props.location.state.headPortrait,
                                        identification : props.location.state.identification,
                                        moviename : props.location.state.moviename,
                                        starttime:props.location.state.starttime,
                                        number:list,
                                        url2:props.location.state.url,
                                        cinemaname:props.location.state.cinemaname,
                                        cinemanumber:props.location.state.cinemanumber
                                      }});
                
           }).catch((err)=>{
              console.log(err);
              alert('购票失败！');
           })
    }
    return (
        <>
          <div style={{width:'100%',height:'140%',backgroundColor:'rgba(0, 150, 136, 0.38)'}}> 
          <Divider orientation="center" style={{position:'absolute',color:'white',fontSize:'25px'}}>付款购票</Divider>
              <div style={{boxShadow:'1px',padding:'10px',backgroundColor:'#ebf9f8',position:'relative',top:'69.2px',margin:'auto',width:'600px',border:'1px solid #f6e7f2'}}>
                    <div style={{position:'relative',width:'100%',height:'150px'}}>
                           <img src={url} style={{width:'40%',height:'100%'}}></img>  
                           <p style={{position:'absolute',top:'10px',left:'45%',fontSize:'20px',fontWeight:'bold'}}>{moviename}</p> 
                           <p style={{color:'#777',position:'absolute',top:'80px',left:'45%'}}>语言版本：国语/2D/3D</p>
                           <p style={{color:'#777',position:'absolute',top:'110px',left:'45%'}}>时长：125分钟</p>
                    </div>
                    <div style={{width:'100%'}}>
                            <p style={{marginTop:'5px'}}>影院：1+x电影生活空间今典花园店（原17.5影城)</p>
                            <p>影厅：{office}</p>
                            <p>场次：{starttime}</p>
                            <p style={{width:'100%'}}>座位：<ul style={{display:'inline-block'}}>{list.map((value)=>{
                                  let a=0,b=0;
                                   a=(value/9 === parseInt(value/9) ? value/9 :parseInt(value/9)+1);
                                   b=(value%9 === 0 ? 9 : value%9);
                                   return <li style={{display:'inline-block',marginRight:'10px',padding:'5px',border:'1px solid red'}}>{a}排{b}号</li>
                            })}</ul></p>
                    </div>
                    <div style={{margin:'auto',width:'95%',padding:'0',borderBottom:'1px solid #f6e7f2'}}></div>
                    <div style={{width:'100%',height:'100px'}}>
                           <p>票价：{money}元/1张</p>
                           <p>票数：{list.length}张</p>
                           <p>总计（含手续费）：<span style={{fontWeight:'bold',fontSize:'20px',color:'#51a9e5'}}>￥{list.length*money}</span></p>   
                    </div>
                    <div style={{height:'210px'}}>
                       <p >本产品暂时只支持微信和支付宝扫码支付功能！</p>
                       <p style={{float:'left',width:'90px',height:'90px'}}>微信：<img src={img1} style={{width:'100%',height:'100%'}}></img></p>
                       <p style={{ float:'right',width:'90px',height:'90px'}}>支付宝：<img src={img2} style={{width:'100%',height:'100%'}}></img></p>
                    </div>               
              </div> 
              <Button  onClick={onSubmit}  type="primary" style={{width:'120px',height:'40px',marginTop:'10px',marginLeft:'46%'}}>确认购票</Button>
           </div> 
        </>
    );
    
}

