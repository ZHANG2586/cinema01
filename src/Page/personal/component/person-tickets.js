//个人电影票据中心
import React,{Component, useEffect, useState} from 'react';
import {  Divider,Button} from 'antd';
import 'antd/dist/antd.css';



export default function  Ticketgeneration(props) {
    const [url,setUrl]=new useState('https://img.daeyes.com.cn:8081/uploads/images/Film/25adf535-6b55-4116-8dd9-dedeb84e57ee/20210520091242.jpg');
    const [moviename,setMoviename]=new useState('你好世界');
    const [starttime,setStarttime]=new useState('无');
    const [office,setOffice]=new useState('6号厅');
    const [money,setMoney] = new useState(45.9);
    const [list,setList]=new useState([]);
   

    useEffect(()=>{
          console.log(props.location);
          console.log(props.location.state.headPortrait);
          if(props.location.state !== undefined){
                setUrl(props.location.state.url);
                setMoviename(()=>props.location.state.moviename);
                setStarttime(()=>props.location.state.starttime);
                setList(props.location.state.number)
                console.log(list);
                
          }else{
               props.history.push('/');
          }
    },[])
    const onclick=()=>{
        props.history.push({pathname:'/personal-center',state:{username : props.location.state.username,
        headPortrait : props.location.state.headPortrait,
        identification : props.location.state.identification,}});
    }

    return (
        <>
          <div style={{overflow:'hidden',width:'100%',height:'100%',backgroundColor:'rgba(0, 150, 136, 0.38)'}}> 
          <Divider orientation="center" style={{position:'absolute',color:'white',fontSize:'25px'}}>🐟水影院票据</Divider>
          <div style={{position:'relative',top:'42px'}}>
              <span onClick={onclick} style={{color:'#00000073',cursor:'pointer'}}>💎个人中心</span><span> / </span><span>票据中心></span>
               {/* <Bread4  state={{username :props.location.state === undefined ? '' : props.location.state.username,
                        headPortrait : props.location.state.headPortrait,
                        identification : props.location.state.identification,}}
                        breadcrumbName1={{path: '/personal-center',breadcrumbName: '💎个人中心'}}
                        breadcrumbName2={{path: '/',breadcrumbName: '票据中心>'}}/> */}
            </div>
              <div style={{boxShadow:'1px',padding:'10px',backgroundColor:'#ebf9f8',position:'relative',top:'50.2px',margin:'auto',width:'600px',border:'1px solid #f6e7f2'}}>
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
                           <p>已购票数：{list.length}张</p>
                           <p>已付金额（含手续费）：<span style={{fontWeight:'bold',fontSize:'20px',color:'#51a9e5'}}>￥{list.length*money}</span></p>   
                    </div>
                    <p style={{position:'absolute',right:'10px',bottom:'24px',fontSize:'20px',color:'red'}}>购买者：{props.location.state.username}</p>
                    <p style={{marginBottom:'0px'}}>本产品暂时不支持退票功能！</p>
                       
             
              </div> 
           </div> 
        </>
    );
    
}

