//面包屑  (此处是本人对antd的面包屑组件的结构性的小更改使得它可以在跳转的同时进行传参,使其具备了更强的可复用性以及传参能力)
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';
import { useEffect, useState } from 'react';

const routes = [
  {
    path: '/home',
    breadcrumbName: '🏠影视大厅',
  },
  {
    path: '/ticket-center',
    breadcrumbName: '购票中心>',
  },
];

let location1;

function breadcrumb(props){

  const [username,setUsername] = new useState('');
  const [headPortrait,setHeadPortrait] = new useState('');
  const [identification,setIdentification] = new useState('');
  useEffect(()=>{
    
         console.log(routes[0].breadcrumbName);
         routes[0]=props.breadcrumbName1;
         routes[1]=props.breadcrumbName2;
         console.log(props.state);
         
         console.log(props);
         console.log(props.state);
         if(props.state !== undefined){
           setUsername(props.state.username);
           setHeadPortrait(props.state.headPortrait);
           setIdentification(props.state.identification);
         }
        //  if(props.location.params !== undefined){
        //   setUsername(props.location.params.username);
        //   setHeadPortrait(props.location.params.headPortrait);
        //   setIdentification(props.location.params.identification);
        //  }
        
  },[])
   const itemRender=(route, params, routes, paths) =>{
    
    const last = routes.indexOf(route) === routes.length - 1;
    useEffect(()=>{
        console.log(route);
        console.log(paths);
        console.log(params);
        console.log(username);
    });
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={{pathname:paths.join('/'),params:{username:username,
        headPortrait:headPortrait,identification:identification}}}>{route.breadcrumbName}</Link>
    );
  }
    return (
        <Breadcrumb itemRender={itemRender} routes={routes} />
    );
}

export default breadcrumb;