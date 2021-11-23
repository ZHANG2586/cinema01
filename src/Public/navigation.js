//导航栏组件
import React, { createRef, useRef } from 'react';
import 'antd/dist/antd.css';
import { Menu, Button,Switch } from 'antd';

import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
}  from  '@ant-design/icons';
import { withRouter } from 'react-router-dom';
// import { prependOnceListener } from '../../server/users';

const { SubMenu } = Menu;
const ref1=new createRef(null);


class App extends React.Component {
  constructor(props){
    super(props);
  }
  
  state = {
    collapsed: false,
    theme: 'dark',
    current: '1',
    identification:''
  };

  componentWillMount(){
    if(this.props.location.state !== undefined){
        console.log(this.props.location);
          this.setState({identification:this.props.location.state.identification});
          console.log(this.state.identification);
    }
  }

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  
  onclick1=()=>{
    if(this.props.location.state === undefined){
        alert('请重新进行登录！');
        this.props.history.push('/');
        return;
    }
     this.props.history.push({pathname:'/home',state:{username:this.props.location.state.username,headPortrait:this.props.location.state.headPortrait,identification:this.props.location.state.identification}});
  }
  onclick2=()=>{
    if(this.props.location.state === undefined){
      alert('请重新进行登录！');
      this.props.history.push('/');
      return;
  }
     this.props.history.push({pathname:'/comic',state:{username:this.props.location.state.username,headPortrait:this.props.location.state.headPortrait,identification:this.props.location.state.identification}});
  }
  onclick3=()=>{
    if(this.props.location.state === undefined){
      alert('请重新进行登录！');
      this.props.history.push('/');
      return;
  }
     this.props.history.push({pathname:'/swordsman',state:{username:this.props.location.state.username,headPortrait:this.props.location.state.headPortrait,identification:this.props.location.state.identification}});
  }
  onclick4=()=>{
    if(this.props.location.state === undefined){
      alert('请重新进行登录！');
      this.props.history.push('/');
      return;
  }
     this.props.history.push({pathname:'/comedy',state:{username:this.props.location.state.username,headPortrait:this.props.location.state.headPortrait,identification:this.props.location.state.identification}});
  }
  onclick5=()=>{
    if(this.props.location.state === undefined){
      alert('请重新进行登录！');
      this.props.history.push('/');
      return;
  }
     this.props.history.push({pathname:'/love',state:{username:this.props.location.state.username,headPortrait:this.props.location.state.headPortrait,identification:this.props.location.state.identification}});
  }
  onclick6=()=>{
    if(this.props.location.state === undefined){
      alert('请重新进行登录！');
      this.props.history.push('/');
      return;
  }
    this.props.history.push({pathname:'/warfare',state:{username:this.props.location.state.username,headPortrait:this.props.location.state.headPortrait,identification:this.props.location.state.identification}});
  }
  onclick7=()=>{
    if(this.props.location.state === undefined){
      alert('请重新进行登录！');
      this.props.history.push('/');
      return;
  }
    this.props.history.push({pathname:'/ticket-center',state:{username:this.props.location.state.username,headPortrait:this.props.location.state.headPortrait,identification:this.props.location.state.identification}});
  }
  onclick8=()=>{
     if(this.props.location.state === undefined){
        alert('请重新进行登录！');
        this.props.history.push('/');
        return;
    }
    this.props.history.push({pathname:'/personal-center',state:{username:this.props.location.state.username,headPortrait:this.props.location.state.headPortrait,identification:this.props.location.state.identification}});
  }
  onclick9=()=>{
    if(this.props.location.state=== undefined){
         alert('请先进行登录！');
         this.props.history.push('/');
         return;
    }else{
         if(this.props.location.state.identification === '管理员'){
             this.props.history.push({pathname:'/user-number',state:{username:this.props.location.state.username,headPortrait:this.props.location.state.headPortrait,identification:this.props.location.state.identification}});
         }else{
             alert('此权限只有管理员能使用！');
         }

    } 
  }
  onclick10=()=>{
    if(this.props.location.state === undefined){
      alert('请先进行登录！');
      this.props.history.push('/');
      return;
    }else{
      if(this.props.location.state.identification === '管理员'){
        this.props.history.push({pathname:'/employee-number',state:{username:this.props.location.state.username,headPortrait:this.props.location.state.headPortrait,identification:this.props.location.state.identification}});
       
      }else{
          alert('此权限只有管理员能使用！');
      }

    } 
   
}
  onclick11=()=>{
    if(this.props.location.state === undefined){
      alert('请先进行登录！');
      this.props.history.push('/');
      return;
    }else{
      if(this.props.location.state.identification === '管理员'){
        this.props.history.push({pathname:'/this-quarter',state:{username:this.props.location.state.username,headPortrait:this.props.location.state.headPortrait,identification:this.props.location.state.identification}});
        
      }else{
          alert('此权限只有管理员能使用！');
      }

    }  
}
  onclick12=()=>{
    if(this.props.location.state === undefined){
      alert('请先进行登录！');
      this.props.history.push('/');
      return;
    }else{
      if(this.props.location.state.identification === '管理员'){
        this.props.history.push({pathname:'/next-quarter',state:{username:this.props.location.state.username,headPortrait:this.props.location.state.headPortrait,identification:this.props.location.state.identification}});
  
      }else{
          alert('此权限只有管理员能使用！');
      }

    } 
}

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ position:'relative', width: '100%',height:'100%'}}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        {/* <div style={}}></div> */}
        {/* <Blank width='1%'/> */}
        <Switch
          style={{position:'absolute',right:0,top:'1%'}}
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
          theme={this.state.theme}
          inlineCollapsed={this.state.collapsed}
          onClick={this.handleClick}
          style={{width:'100%',height:'100%'}}
        >
          <Menu.Item key="1" onClick={this.onclick1} icon={<PieChartOutlined />}>
            影院大厅
          </Menu.Item>
          <Menu.Item key="2" onClick={this.onclick2} icon={<DesktopOutlined />}>
            动漫影院
          </Menu.Item>
          
          <SubMenu key="sub1" icon={<MailOutlined />} title="电影">
            <Menu.Item key="5"  onClick={this.onclick3}>武侠</Menu.Item>
            <Menu.Item key="6" onClick={this.onclick4}>喜剧</Menu.Item>
            <Menu.Item key="7" onClick={this.onclick5}>爱情</Menu.Item>
            <Menu.Item key="8" onClick={this.onclick6}>战争</Menu.Item>
          </SubMenu>
          <Menu.Item key="3" icon={<ContainerOutlined />} onClick={this.onclick7}>
             购票中心
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />} onClick={this.onclick8}>
             个人中心
          </Menu.Item>

          <SubMenu key="sub2"  icon={<AppstoreOutlined />} title="影院管理">
            <Menu.Item key="9" onClick={this.onclick9}>账号管理</Menu.Item>
            <Menu.Item key="10" onClick={this.onclick10}>添加影片</Menu.Item>
            <SubMenu key="sub3" title="财务">
              <Menu.Item key="11" onClick={this.onclick11}>影院本季度账单</Menu.Item>
              <Menu.Item key="12" onClick={this.onclick12}>影院下季度的预判</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
export default withRouter(App);