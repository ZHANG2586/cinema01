//用户和管理员账户信息数据库

const mongoose=require('mongoose')
const bcrypt= require('bcrypt');
const SALT_WORK_FACTOR = 10;

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
   username:{
       type:String,
       unique:true   //字段唯一
   },
   password:{
       type:String,  //在Schema架构中使用同步的加密方法貌似已经被废弃了，只能使用schema架构的异步方法来进行加密！（或者在express中进行同步加密之后再存储到数据库中也行！）
       //此处注释掉是因为在部署（虚拟机上的Centos7虚拟服务器上）到局域网上时，因为加密的原因，导致mongoose无法识别此类型的数据导致把该数据存入数据库的操作失败！（所以就目前所掌握的知识只能先是注释掉，等后续有时间了进行改进！）
    //    set(val){    //set()是SchemaType.prototype.set()功能是将设置器添加到此框架类型中，设置器使您可以在数据转换到原始mongodb文档或查询之前进行转换！
    //        return require('bcryptjs').hashSync(val,10);   //通过bcryptjs对密码进行加密（该加密方式是bcrypt的同步加密，还有异步加密此处没用！）  参数一表示返回值， 参数二表示密码强度(例如此处的10表示最高的加密强度！)    
    //    }
   },
   email:{
       type:String,
       unique:true
   },
   headPortrait:{
       type:Number,
       unique:true
   },
   identification:{
       type:String,
       unique:true
   }

})
UserSchema.pre('save',function (next) {       //此处使用的是bcryptjs的异步加密用法
    var user=this;
    
    bcrypt.genSalt(SALT_WORK_FACTOR,function (err,salt) {
         if(err){
             return next(err);
         }
         bcrypt.hash(user.password,salt,function(err,hash){
             if(err){
                 return next(err);
             }
             user.password=hash;
             next();
         })
         
    })

})




module.exports=mongoose.model('User',UserSchema);
