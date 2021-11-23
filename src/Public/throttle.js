         //对节流的封装

//此处的节流有缺陷（当不停点击就会无法执行函数）
// export default function throttle(fu,wait){
//     let timeout;
//     console.log(arguments);                        
//     return function(){
//         let args=arguments;
//         console.log(args);
//         if(!timeout){
//             timeout=setTimeout(() => {
//                 timeout=null;
//                 fu.apply(this,args);
//             }, wait);
//         }
//     }
// }

//一下是对上述缺点的改进
export default function antishake(fu,wait,time){
      let timer=null;
      let prevTime=null;  //用来记录上次的运行时间
      return function(){
          var  now=new Date();
          if(!prevTime) {
              prevTime=now;
            }
          if(now.getTime()-prevTime.getTime()>time){       //不知为何此处对防抖的优化没起作用（之后会对此遗漏问题进行解决！）
              fu.apply(this,arguments);
              clearTimeout(timer);
              prevTime=now;
        
          }else{
              clearTimeout(timer);
              timer=setTimeout(() => {
                  fu.apply(this,arguments);
              }, wait);
          }
         
      }
}