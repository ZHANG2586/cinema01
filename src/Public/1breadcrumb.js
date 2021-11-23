//影院大厅面包屑
import { Link, withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';
import { useEffect } from 'react';


const routes = [
  {
    path: '/home',
    breadcrumbName: '🏠 影视大厅>',
  },
];

function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  );
}

function breadcrumb(props){
  useEffect(()=>{
    console.log(props);
  },[])
    return (
        <>
        <Breadcrumb itemRender={itemRender} routes={routes} />
        </>
    );
}

export default withRouter(breadcrumb);