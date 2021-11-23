//影院新增影片数据库
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/Cinema-data',function (err) {
        if(!err){
            console.log('数据库连接成功！');
        }else{
            console.log('数据库连接失败！');
        }    
})

const schema=new mongoose.Schema({
    movieurl:{
        type:String,
        unique:true
    },
    moviename:String,
    moviestarttime:Date,
    movieduration:{
        type:String,
        unique:true
    },
    moviedirector:String,
    moviedescribe:String
});
module.exports=mongoose.model('Film',schema);