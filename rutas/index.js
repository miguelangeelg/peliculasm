'use strict'


var express=require('express'),
    enrutador=express.Router()




function Error404(request,response,next){
let error= new Error()   
let local={
    titulo: 'Pagina No Encontrada 🤕',
    tipo:'ERROR 404',
    error:error.stack.slice(0,190)+'....'
}
error.status=404
response.render('error',local)
next()
}    

enrutador.get('/',(request,response,next)=>{
    let local={
        titulo:"Peliculas M"
    }
    response.render('index',local)
})    


enrutador.use(Error404);

 

module.exports=enrutador;


