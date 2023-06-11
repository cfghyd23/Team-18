//create express application
const exp=require('express')
const app=exp()
const mclient=require('mongodb').MongoClient;
require('dotenv').config()
app.use(exp.json());

//import path module
const path=require('path')

//connect build of react app with nodejs
app.use(exp.static(path.join(__dirname, './build')))



//DB connection url
const DBUrl=process.env.DATABASE_CONNECTION_URL;
mclient.connect(DBUrl)
.then((client)=>{
    //get DB object
    let dbObj=client.db("vnr2023db");

    //create collection object
    let userCollectionObject=dbObj.collection("usercollection");
    let detailsCollectionObject=dbObj.collection("detailscollection");

    //sharing collection objects to respective apis
    app.set("userCollectionObject", userCollectionObject);
    app.set("detailsCollectionObject", detailsCollectionObject);

    console.log("DB connection success");
})
.catch(err=>console.log('error in DB connection ', err))



//import userApp and productApp
const userApp=require('./APIS/userApi');
const productApp=require('./APIS/productApi');
const payDetailsApp=require('./APIS/payDetailsApi');
const adminApp=require('./APIS/adminApi');


//sending requests to respected modules
app.use('/user-api', userApp);
app.use('/details-api',payDetailsApp);
app.use('/product-api', productApp);
app.use('/admin-api',adminApp);


//dealing with page refresh
app.use('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./build/index.html'))
})


//handling invalid paths
app.use((req,res,next)=>{
    res.send({message:`path ${req.url} not found`})
})

//error handling middleware
app.use((error,req,res,next)=>{
    res.send({message:'error occured', reason:`${error.message}`})
})


//assign port number
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`web server listening on port ${port}`)
})