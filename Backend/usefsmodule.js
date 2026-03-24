const fs=require('fs');
const fs1=require('fs').promises

function dataWrite(){
    let statusmsg="";
try{
fs.writeFileSync('data.txt',"hello,this is program generated");
//console.log("successfuly written");
statusmsg="successfuly written";
}catch(e){
statusmsg="error during written in file"+e;
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
//module.exports=dataWrite;
async function readFileAsync(){
 let statusmsg="";
 try{
    const data=await fs1.readFile('student.json',{encoding:"utf-8"})
    statusmsg=data;
 }catch(error){
  statusmsg=e;
 }
 return statusmsg;
}
const obj={dataWrite,dataRead,readFileAsync}
module.exports=obj;