let express = require('express');
let routes = express.Router();


routes.get('/', (req, res)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type', 'aplication/json');
    res.json({
        user:[{
            name:'Jonas',
            email:'jonas@jonas',
            id:1
        }]
    });  
})

routes.get('/admin', (req,res)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type', 'aplication/json');
    res.json({
        user:[]
    });

});

module.exports = routes;

