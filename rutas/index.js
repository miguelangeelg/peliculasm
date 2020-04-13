'use strict'


var express=require('express'),
    enrutador=express.Router()



enrutador.get('/',(request,response,next)=>{
    let local={
        titulo:"Peliculas M"
    }
    response.render('index',local)
})    
 

module.exports=enrutador;


