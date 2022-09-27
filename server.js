const express=require('express');

const app=express();

app.get('/server',(request,response)=>{
//设置响应头 设置允许跨域
response.setHeader('Access-Control-Allow-Origin','*')
//设置响应体    
response.send('hello ajax');
})

app.listen(8000,()=>{
    console.log("go");
})