const fs=require('fs');
const fs1 =require('fs').promises

function dataWrite(){
    try{
        fs.writeFileSync('data.txt',"Hello, this is program generated file");
        //console.log("Data written Successfully!")
    }catch(e){
        statusmsg="Error during written in file"+e;
    }
    return statusmsg
}
module.exports=dataWrite;