import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(
//    <React.StrictMode>
//        <App />
//        <App1/>
//    </React.StrictMode>,
//    document.getElementById('root')
// );

// import {Component} from 'react';
// // import {render} from 'react-dom';
// const ThemeContext=React.createContext();
// class ThemeProvider extends Component{
//     constructor(props){
//         super(props);
//         console.log(props);
//         this.state={
//             theme:'dark',
//             color:'blue'
//         };
//     }
    
//     changeTheme=theme=>{
//         this.setState({
//             theme
//         });
//     }
//     changeColor=color1=>{
//         this.setState({
//             color:color1
//         });
//     }
//     render(){
//             return (
//             <ThemeContext.Provider value={{
//                     theme:this.state.theme,
//                     color:this.state.color,
//                     changeColor:this.changeColor
//                 }}>
//                 <button onClick={()=>this.changeTheme('light')}>change theme</button>
//                 {this.props.children}
//                 {/* {console.log(this.changeColor)} */}
//                 {console.log(this.props.children)}
//             </ThemeContext.Provider>
//             );	 
//         }
//    }
//    function SubComponent(props){
//        console.log(props);
//     return (  
//    <div>
//         <div>{props.theme}</div>
//         <button onClick={()=>props.changeColor('red')}>change color</button>   {/*此处会报错：是因为我们才此处间接的用到了'caller', 'callee', and 'arguments'东西，但是， webpack 打包好的 bundle.js 中，默认是启用严格模式的，所以，这两者冲突了。对此，我们的办法可以是把 webpack 打包时候的严格模式禁用掉，移除严格模式。对于移除严格模式，可以使用 babel-plugin-transform-remove-strict-mode 插件，进行移除。*/}
//         <div>{props.color}</div>
//         {console.log(props)}
//    </div>
//     )
//    };
//    class App1 extends Component{

//        constructor(props){
//            super(props);
//            console.log(props);
//        }
//        render(){
//            return (
//             <ThemeProvider>
//                 <ThemeContext.Consumer>
//                      {context=>
//                         {
//                             console.log(context);
//                            SubComponent(context); 
//                             //    <SubComponent theme={context.theme}
//                             //       color={context.color}
//                             //       changeColor={context.changeColor}
//                             //    />
//                         }
//                      }
                     
//                 </ThemeContext.Consumer>
//             </ThemeProvider>
//            );
//        }
//    }
import react,{useRef,useState,useEffect} from 'react';
function App1(){
    let [count,setCount]=useState(0);
    const prevCount=useRef();
    useEffect(()=>{
        prevCount.current=count;
    },[count]);
    const add=()=>{
        setCount(count+1);
    }
    return(
        <div>
             <p>{count}</p>
             <p>{prevCount.current}</p>
             <button onClick={add}>dian</button>
        </div>
    );
}


   ReactDOM.render(
    // <React.StrictMode>
    <>
      {/* <> */}
        <App />
        {/* <App1/> */}
        {/* <SubComponent></SubComponent> */}
    {/* // </React.StrictMode>, */}
         {/* </> */}
    </>
    ,
    document.getElementById('root')
 );