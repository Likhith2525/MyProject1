//create express application
const exp=require("express")
const app=exp();
const path=require("path")
//import mongoclient
const mc=require("mongodb").MongoClient;

//connect angular app with express server
app.use(exp.static(path.join(__dirname,"./dist/MyProject1/")))

//connection string
const databaseurl="mongodb+srv://vnr2023:vnr2023@mymongo1.v5zxf.mongodb.net/vividlydb?retryWrites=true&w=majority"

//connect to db
mc.connect(databaseurl,{useNewUrlParser:true, useUnifiedTopology:true},(err,client)=>{
    if(err){
        console.log("error in database connection",err)
    }
    else{
        //get database object from client object
        let databaseObj=client.db("vividlydb")
        //create user collection object
        let userCartCollectionObject = databaseObj.collection("cartcollection")
        let userCollectionObj=databaseObj.collection("usercollection")
        app.set("userCollectionObj", userCollectionObj)
        app.set("userCartCollectionObject", userCartCollectionObject)
        console.log("connected to database successfully")
    }
})


//import APIs
const userApi=require("./APIs/userApi")

//execure specific api based on path
app.use('/user',userApi)

//error handling middleware
app.use((err,req,res,next)=>{
    res.send({message:`error is ${err.message}`})
})


//invalid path
app.use((req,res,next)=>{
    res.send({message:`path ${req.url} is invalid`})
})



//assign port
const port=4000;
app.listen(port,()=>console.log(`server is listening on port ${port}`))