'use strict'

var app=require('./app.js'),
    server=app.listen(app.get('puerto'),()=>{ 
        console.log(`Iniciando Express..... Puerto ${app.get('puerto')}`)
     })