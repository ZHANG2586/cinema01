import React,{Component,useState,useEffect} from 'react';
import {BrowserRouter as Router,HashRouter,Route,Switch,Link} from 'react-router-dom';
import {createBrowserHistory,createHashHistory} from 'history';   //注意此处是为了能够使用js的方式进行路由跳传并传参，目的引用的是history文件内部的createBrowserHistory和createHashHistory两个js文件（此处是用js方式进行路由传参的简便导入方法，下面还有js方式进行路由跳转并传参的常规的方法）
import home from '../Page/home/home';
import longo from '../Page/logon/logon';
import register from '../Page/register/register';
import retrieve from '../Page/retrieve/retrieve';
import logon from '../style/logon';
import  Comic from '../Page/comic/comic'
import Swordsman from '../Page/movie/swordsman'
import  Comedy from '../Page/movie/comedy'
import Love from '../Page/movie/love'
import Ticket from '../Page/ticket/ticket'
import Personal from '../Page/personal/personal'
import Persontickets from '../Page/personal/component/person-tickets'
import Usernumber from '../Page/administrators/user-number'
import Employeenumber from '../Page/administrators/tickets'
import This from '../Page/finance/this-quarter-fiance'
import Next from '../Page/finance/next-quarter-finance'
import Warfare from '../Page/movie/warfare';
import Resecond  from '../Page/retrieve/component/reSecond'
import Ticket1map from '../Page/ticket/component/ticket1-map'
import TicketGeneration  from '../Page/ticket/component/ticket-generation'
// import 'antd/dist/antd.css';
import { Spin } from 'antd';

// import CreateHashHistory from 'history/createHashHistory';//导入createHashHistory文件的常规方法(注意导入的方法)，**注意注意在react中导入某个包中的组件时接受该组件的变量名必须首字母大写（如果此处把CreateBrowserHistory首字母变成小写会报错！）（因为react使用的是jsx语法，只有首字母大写才被认为是组件，小写标记名被认为是HTML标记，但是带有点的（属性访问器）的小写标记名不是）
// const hashHistory=CreateHashHistory();                   //注意只有通过js方式进行路由跳传并*传参*时才要在npm中下载history包文件引用其中的createHashHistory和createBrowserHistory文件（分别对应两种不同的路由方式）
// import CreateBrowserHistory from 'history/createBrowserHistory';   //导入createBrowserHistory文件的常规方法
// const BrowserHistory=CreateBrowserHistory();
export default function router(){
    const [loading,setLoading]=new useState(true);

    useEffect(()=>{
        //   console.log(document.getElementsByClassName('ant-spin-nested-loading'));  
        //  console.log(document.getElementsByClassName('ant-spin-nested-loading')[0]);
        //  document.getElementsByClassName('ant-spin-nested-loading')[0].style.position='absolute';
        //  document.getElementsByClassName('ant-spin-nested-loading')[0].style.top='0';
         let loading=document.getElementById('Loading');
         if(loading){
               document.body.removeChild(loading);
         }
       
    },[])


    return (  
   
   
                     
        <Router history={createBrowserHistory()}>  
        {/* // <Router history={BrowserHistory}>  */}
        {/* <HashRouter history={hashHistory}>  */}
            {/* <Link to={{pathname:'/home',query:{id:'01009'}}}>adad</Link>   //注意此处使用的是链接方式进行路由跳转时进行传参，与js方式路由跳转传参不同的是它不需要在npm中下载history包直接写就可以达到目的（比较便捷！） */  }      
            <Switch>
              <Route exact path='/' component={longo} ></Route>
              <Route exact path='/register' component={register}></Route>
              <Route exact path='/retrieve' component={retrieve}></Route>
              <Route exact path='/retrieve/second' component={Resecond}></Route>
              <Route exact path='/home' component={home}></Route>
              <Route exact path='/config/template' component={logon}></Route>
              <Route exact path='/comic' component={Comic}></Route>
              <Route exact path='/swordsman' component={Swordsman}></Route>
              <Route exact path='/comedy' component={Comedy}></Route>
              <Route exact path='/love' component={Love}></Route>
              <Route exact path='/warfare' component={Warfare}></Route>
              <Route exact path='/ticket-center' component={Ticket}></Route>
              <Route exact path='/ticket-center/tickets' component={Ticket1map}></Route>
              <Route exact path='/ticket-center/tickets/ticket-generation' component={TicketGeneration}></Route>
              <Route exact path='/personal-center' component={Personal}></Route>
              <Route exact path='/person-tickets' component={Persontickets}></Route>
              <Route exact path='/user-number' component={Usernumber}></Route>
              <Route exact path='/employee-number' component={Employeenumber}></Route>
              <Route exact path='/this-quarter' component={This}></Route>
              <Route exact path='/next-quarter' component={Next}></Route>
              {/* <Route exact path='/home/:id' component={home}></Route> */}
              {/* <Route exact path='' ></Route> */}
            </Switch>
        {/* </HashRouter>  */}
        </Router>
 
    );

}



//练习
// function Effect(){
//     const [count,setCount]=useState(0);
//     useEffect(()=>{
//         console.log(`YOU are count ${count}`);
//     });
//     return (
//         <div>
//             <p>you click {count}</p>
//             <button onClick={              //此处因为useSate更新特性问题(不会自动合并更新对象或值，而是直接替换它），导致只能用函数式的setState结合展开运算符来达到合并更新对象的效果
//                 ()=>{
//                     setCount(count+1);     //此处不能使用count++的自增模式因为此处的count变量是const类型常量不可变类型，只能使用count+1表达式模式才可以
//                 }
//             }>click me</button>
//         </div>
//     );
// }
// export default Effect;



// function LinkedList() {
//     var a=NaN;
//     var b=a;
//     console.log(b);
//     b=1;
//     console.log(a);
//     console.log(b);

//     var Node = function (val) {　　　　　　 //新元素构造
//         this.val = val;
//         this.next = null;
//     };
//     var length = 0;
//     var head = null;
 
//     this.append = function (val) {
//         var node = new Node(val);　　　　   //构造新的元素节点
//         var current;
//         if (head === null) {　　　　　　　　//头节点为空时  当前结点作为头节点
//             head = node;
//         } else {
//             current = head;　　　　　　　　　　　　　　
//             while (current.next) {　　　　　//遍历，直到节点的next为null时停止循环，当前节点为尾节点
//  
//                 current = current.next;
//             }
//            
//             current.next = node;　　　　　　//将尾节点指向新的元素，新元素作为尾节点
//            
//         }           
//         length++;　　　　　　　　　　　　　　//更新链表长度
//     };
//     this.removeAt = function (position) {
//         if (position > -1 && position < length) {
//             var current = head;
//             var index = 0;
//             var previous;
//             if (position == 0) {
//                 head = current.next;
//             } else {
//                 while (index++ < position) {
//                     previous = current;
//                     current = current.next;
//                 }
//                 previous.next = current.next;
//             }
//             length--;
//             return current.val;
//         } else {
//             return null;
//         }
//     };
//     // this.insert = function (position, val) {
//     //     if (position > -1 && position <= length) {　　　//校验边界
//     //         var node = new Node(val);　　　　　　　　
//     //         var current = head;
//     //         var index = 0;
//     //         var previous;
//     //         if (position == 0) {　　　　　　 //作为头节点，将新节点的next指向原有的头节点。
//     //             node.next = current;
//     //             head = node;　　　　　　　　　//新节点赋值给头节点
//     //         } else {
//     //             while (index++ < position) {
//     //                 previous = current;
//     //                 current = current.next;
//     //             }　　　　　　　　　　　　　　　//遍历结束得到当前position所在的current节点，和上一个节点
//     //             previous.next = node;　　　　//上一个节点的next指向新节点  新节点指向当前结点，可以参照上图来看
//     //             node.next = current;
//     //         }
//     //         length++;
//     //         return true;
//     //     } else {
//     //         return false;
//     //     }
//     // };
//     this.toString = function () {
//         var string = head.val;
//         var current = head.next;        
//         while (current) {
//             string += ',' + current.val;
//             current = current.next;
//         }
//         return string;
//     };
//     // this.indexOf = function (val) {
//     //     var current = head;
//     //     var index = -1;
//     //     while (current) {
//     //         if (val === current.val) { //从头节点开始遍历
//     //             return index;
//     //         }
//     //         index++;
//     //         current = current.next;
//     //     }
//     //     return -1;
//     // };
//     this.getLength = function () {
//         return length;
//     }
//     this.getHead = function () {
//         return head;
//     }
// }
 
// // 创建链表
// export default function b() {
//     var li = new LinkedList();
  

// li.append(1);
// li.append(2);
// li.append(4);
// li.append(4);
// li.append(5);
// // li.insert(2,3);
// // li.insert(2,3);
// console.log(li.toString())  // 1,2,3,3,4,4,5
// console.log(li.getHead())   // 1->2->3->3->4->4->5
//  return null;
// }

//Effect Hook

// export default function c(){
//     const [count,setCount]=useState(0);
//     function f(){
//         setCount(count+1);
//     }
//     useEffect(()=>{
//          console.log(`You clicked ${count}`);
//     });
//     return (
//         <div>
//             <p>you click {count} times</p>
//             {/* <button onClick={()=>{
//                 setCount(count+1);
//             }}></button> */}
//             <button onClick={f}></button>
//         </div>
//     );
// }


// import throttle from '../Public/throttle'
// import antishake from '../Public/antishake'
// //节流改进版
// export default class s extends Component {
//     constructor(props){
//         super(props);
//         // this.onClick=throttle(this.onClick,2000);
//         this.onClick=antishake(this.onClick,500,1000)
//     }
//        render(){
//            return (
//             <div>
//             <button onClick={this.onClick}>点击</button>
//              </div>
//            );
//        };
  
//     onClick=(e)=>{
//         console.log(e);
//     }
// }



// function ListNode(val,next){
//     this.val= val===undefined?0:val;
//     this.next= next===undefined?null:next;
// }
//此处是牺牲空间换时间（但是同时把没必要的内存占用进行了优化，例如此处对sum变量把它放到了循环体内的处理）
// function s(l1,l2){          //此方法的妙处在于它使用了头指针，简便了循环体的设计，只需在最后返回该头指针的指针域就好（即有实际数据的头节点）
//    let dummy=new ListNode();
//    let curr=dummy;    //指向链表的头部
//    let carry=0;
//    while(l1||l2){
//        let sum=0;
//        if(l1!==null){
//            sum+=l1.val;
//            l1=l1.next;
//        }
//        if(l2!==null){
//            sum+=l2.val;
//            l2=l2.next;
//        }
//     sum+=carry;
//     curr.next=new ListNode(sum%10);
//     carry=Math.floor(sum/10);    //注意此处只适用于正整数（如是负数此运算也是向下取整将导致（-8.1向下取整后得到是-9，这是因为向下取整是取向小于等于该数据的数据最大整数））
//     curr=curr.next;        
//    }
//    if(carry>0){
//        curr.next=new ListNode(carry);
//    }
//     return dummy.next;
// }

//此处是用时间换去空间，使空间消耗达到最小(即空间最优解)
// let addTwoNmbers=function(l1,l2){
//      let res=new ListNode(),c=0;
//      res.val=(l1.val+l2.val)%10;
//      c=Math.floor((l1.val+l2.val)/10);
//      l1=l1.next;l2=l2.next;
//      res.next=null;
//      let rear=res;
//      while(l1!=null&&l2!=null){
//          let p=new ListNode();
//          p.val=(l1.val+l2.val+c)%10;
//          c=Math.floor((l1.val+l2.val+c)%10);
//          p.next=null;
//          rear.next=p;
//          rear=p;
//          l1=l1.next;
//          l2=l2.next;
//      }
//      while(l1!=null){
//          var p=new ListNode();
//          p.val=(l1.val+c)%10;
//          c=Math.floor((l1.val+c)/10);
//          p.next=null;
//          rear.next=p;
//          rear=p;
//          l1=l1.next;
//      }
//      while(l2!=null){
//          let p=new ListNode();
//          p.val=(l2.val+c)%10;
//          c=Math.floor((l2.val+c)/10);
//          p.next=null;
//          rear.next=p;
//          rear=p;
//          l2=l2.next;
//      }
//      while(c!=0){
//          let p=new ListNode();
//          p.val=c%10;
//          c=Math.floor(c/10);
//          p.next=null;
//          rear.next=p;
//          rear=p;
//      }
//      return res;
// }
// var swapPairs=function(head){
//     const dummyHead= new ListNode(0);
//     dummyHead.next=head;
//     let temp=dummyHead;
//     while(temp.next!==null&&temp.next.next!==null){
//             const node1=temp.next;
//             const node2=temp.next.next;
//             temp.next=node2;     //此处及一下两行是节点交换
//             node1.next=node2.next;
//             node2.next=node1;
//             temp=node1;     //此处是迭代
//     }
//     return dummyHead;
// }

// var swapPairs=function(head){
//     if(head===null||head.next===null){
//         return head;
//     }
//     const newHead=head.next;
//     head.next=swapPairs(newHead.next);
//     newHead.next=head;
//     return newHead;
// }
//此处因为使用了递归所以空间复杂度为o(n)因为递归调用要消耗栈空间（因为调用函数要消耗大量的时间和空间）
//此处的时间复杂度为o（n），因为要遍历n个(此n代表的是链表的节点数量)链表的结点

// //使用递归解决，假设这些数位是正向存放的，又该如何解决呢？
// //示例：
// //输入：（6 -> 1 -> 7）+ (2 -> 9 ->5),即617+295
// //输出：9 -> 1 -> 2,即912
// var addTwoNumbers=function(l1,l2,n=0){
//      let total=n;
//      if(!l1&&!l2){
//          if(n){
//              return new ListNode(n);
//          }else{
//              return null;
//          }
//      }
//      l1 && (total+=l1.val);
//      l2 && (total+=l2.val);
//      let node=new ListNode(total%10);
//      node.next=addTwoNumbers(l1 && l1.next,l2 &&l2.next,total>9?1:0);
//      return node;
// }



