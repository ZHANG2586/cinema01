//财务面包屑
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';
import { useEffect,useState } from 'react';

const routes = [
  {
    path: '/home',
    breadcrumbName: '🏠影视大厅',
  },
  {
    path: '',
    breadcrumbName: '影院管理',
  },
  {
    path:'',
    breadcrumbName:'影院本季度账单>',
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
         routes[2]=props.breadcrumbName3;
         console.log(props.state);
         location1=props;
         console.log(location1);
         console.log(location1.state);
         if(location1.state !== undefined){
           setUsername(location1.state.username);
           setHeadPortrait(location1.state.headPortrait);
           setIdentification(location1.state.identification);
         }
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
        <Breadcrumb itemRender={itemRender} params={location1} routes={routes} />
    );
}

export default breadcrumb;