//电影票订单信息数据库

const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/Cinema-data',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,  //必需加否则报错！
    autoIndex: false   //被禁用，因为索引创建可能会导致显著性能影响
},function(err){
    if(err){
        console.log('链接数据库失败：'+err);
    }else{
        console.log('数据库连接成功！');
    }
})
const UserSchema=new mongoose.Schema({
  id:{
      type:String     //注意此处不能使用_id当变量名（因为_id是mongodb的默认主键名(文档在保存之前必须要有一个_id)）
  },
  username:{
      type:String
  },
  moviename:{
      type:String
  },
  seatNumber:{
      type:Array
  },
  star_time:{
      type:Date
  },
  url:{
      type:String
  },
  cinemaname:{
      type:String
  },
  cinemanumber:{
      type:String
  }

})

module.exports=mongoose.model('Movie-ticket',UserSchema);
