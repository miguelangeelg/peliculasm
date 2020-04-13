


    var express=require('express'),
       path= require('path'),
       favicon=require('serve-favicon'),
       jade=require('jade'),
       rutas=require('./rutas/index'),
       faviconURL=__dirname+'/public/img/logo.png',
       publicDir= express.static(path.join(__dirname+'/public')),
       views=__dirname+"/views",
       puerto=(process.env.PORT || 3000),
       app=express()


       app
       .set('views',views)
       .set('view engine','jade') 
       .set('puerto',puerto)  
       .use(favicon(faviconURL))
       .use(publicDir)
       .use(rutas) // escuche todas las rutas 
  
module.exports=app
   

//mi color rojo C83434
// mi color fondo #252A37
//color gris ojo #949494




