import React,{Component} from 'react';
import Router from './router/router'
import './style/App.css';
import { Button } from 'antd';


const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
)

function d(){
     return (
         <>
            <Router />
            {/* <App></App> */}
         </>
     );
}
export default d;