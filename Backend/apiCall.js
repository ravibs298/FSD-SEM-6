async function getServerData() {
    const serverData= await fetch('https://fakestoreapi.com/products')
    const jsondata=await serverData.json();

    console.log(jsondata);
    return jsondata;
    
}
module.exports=getServerData;