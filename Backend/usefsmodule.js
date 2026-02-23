const fs=require('fs');
const fs1=require('fs').promises

function dataWrite(){
     let statusmsg="";
    try{
       
fs.writeFileSync('data.txt',"Hello, this is program generated file");
//console.log("Data written successfully!!!")
     statusmsg="Data written successfully!!!";   

    }catch(e){
        statusmsg="Error during written in file:"+e;
        
    }
    return statusmsg
}


function dataRead(){
    let statusmsg="";
    try{
      const fileData=fs.readFileSync('data.txt',{encoding:'utf-8'})
         statusmsg=fileData;
          
    }catch(err){
       statusmsg=err;

    }
    return statusmsg;
}

function dataDelete(){
    let statusmsg;
    try{
        fs.unlinkSync('data.txt');
        statusmsg="File deleted successfully"


    }catch(e){
       statusmsg=e;
    }
    return statusmsg;
}





const obj={dataWrite,dataRead,dataDelete}

module.exports=obj;