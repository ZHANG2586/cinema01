//对防抖的封装
export default function shake(fu,wait){
    let time;
    return function(){
        if(time) clearTimeout(time);
            time=setTimeout(() => {
                fu.apply(this,arguments);
            }, wait);
    }
}