const http=require('http');
const PORT=4002;
const sum=require('./apiCall')
// const dataWrite=require('./usefsmodule')
const {dataWrite,dataRead, dataDelete}=require('./usefsmodule')
const server=http.createServer(async (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
      res.setHeader('Access-Control-Allow-Credentials', true);
     //res.setHeader('Content-Type',"application/json");
      //res.end("<h2 style=color:red>Hiii...Welcome to Node Server</h2>");
        //res.end(JSON.stringify({msg:"hiiii...jSON format"}))

   if(req.url=="/msg" && req.method=="GET"){
    res.setHeader('Content-Type',"application/json")
    res.end(JSON.stringify({msg:"Hiii...inside /msg endpoint"}))
   }
   else if(req.url=="/data" && req.method=="GET"){
     res.setHeader('Content-Type',"application/json")
    
    const data=await sum();

    res.end(JSON.stringify({msg:data}))

   }
   
   else if(req.url=="/data" && req.method=="POST"){
     res.setHeader('Content-Type',"application/json")
     
     
    res.end(JSON.stringify({msg:"/data post method calling"}))

   }

   else if(req.url=="/dataWrite" && req.method=="GET"){
    res.setHeader("Content-Type","application/json")
             const data=dataWrite();
             res.end(JSON.stringify({msg:data}));


   }

   else if(req.url=="/dataRead" && req.method=="GET"){
    res.setHeader("Content-Type","application/json")
             const data=dataRead();
             res.end(JSON.stringify({msg:data}));


   }

    else if(req.url=="/dataDelete" && req.method=="GET"){
    res.setHeader("Content-Type","application/json")
             const data=dataDelete();
             res.end(JSON.stringify({msg:data}));


   }

   else{
    res.setHeader('Content-Type',"text/html")
    res.end("<h2 style=color:red>No endpoint available</h2>")
   }



    })


server.listen(PORT,()=>{
    console.log("Server is live on"+PORT)
})