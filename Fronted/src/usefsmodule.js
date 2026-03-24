const http=require('http');
const PORT=4002;
const sum=require('./apiCall')
// const dataWrite=require('./usefsmodule');
const {dataWrite,dataRead,dataDelete}=require('./usefsmodule');
const server=http.createServer((req,res)=>{
      //res.setHeader('Content-Type',"application/json");
      //res.end("<h2 style=color:red>Hiii...Welcome to Node Server</h2>");
        //res.end(JSON.stringify({msg:"hiiii...jSON format"}))

   if(req.url=="/msg" && req.method=="GET"){
    res.setHeader('Content-Type',"application/json")
    res.end(JSON.stringify({msg:"Hiii...inside /msg endpoint"}))
   }
   else if(req.url=="/data" && req.method=="GET"){
     res.setHeader('Content-Type',"application/json")
    //  const data={
    //     name:"Ravi",
    //     branch:"IT",
    //     college:"ABES"
    //  }
    const data=sum(30,40);

    res.end(JSON.stringify({msg:data}))

   }
   
   else if(req.url=="/data" && req.method=="POST"){
     res.setHeader('Content-Type',"application/json")
    res.end(JSON.stringify({msg:"/data post method calling"}))
   }

   else if(req.url=="/dataWrite" && req.method=="GET"){
    res.setHeader('Content-Type',"application/json");
    const result=dataWrite();
    res.end(JSON.stringify({msg:result}));
   }
   else if(req.url=="/dataRead" && req.method=="GET"){
    res.setHeader('Content-Type',"application/json");
    const result=dataRead();
    res.end(JSON.stringify({msg:result}));
   }
   else if(req.url=="/dataDelete" && req.method=="GET"){
    res.setHeader('Content-Type',"application/json");
    const result=dataDelete();
    res.end(JSON.stringify({msg:result}));
   }
   else{
    res.setHeader('Content-Type',"text/html")
    res.end("<h2 style=color:red>No endpoint available</h2>")
   }



    })


server.listen(PORT,()=>{
    console.log("Server is live on"+PORT)
})