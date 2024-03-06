const mongoose=require('mongoose')
const connectionString=process.env.MONGO_URL
mongoose.connect(connectionString).then(()=>{
    console.log("___MongoDB Atlas Connected___");
}).catch((err)=>{
    console.log(`__MongoDB Atlas Connection Failed !! ${err}__`);
})