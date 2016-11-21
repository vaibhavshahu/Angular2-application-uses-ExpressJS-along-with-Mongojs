var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/employeeinfo',['employees']);

//for file upload 
//var multer  = require('multer')
//var upload = multer({ dest: 'uploads/' })

// Get All Todos
router.get('/employees', function(req, res, next){
    db.employees.find(function(err, todos){
        if(err){
           res.send(err); 
        } else {
            res.json(todos);
        }
    });
});

// Get Single Todo
router.get('/employee/:id', function(req, res, next){
    db.employees.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, todo){
        if(err){
           res.send(err); 
        } else {
            res.json(todo);
        }
    });
});

// search employee
router.get('/searchemployee/:qry', function(req, res, next){
    db.employees.find({
        'name': {'$regex': req.params.qry}
    }, function(err, todo){
        if(err){
           res.send(err); 
        } else {
            res.json(todo);
        }
    });
});

router.get('/checkEmpId/:empid', function(req, res, next){
    db.employees.findOne({
        'empid': req.params.empid
    }, function(err, todo){
        if(err){
           res.send(err); 
        } else {
            var bool = true;
            bool = checkjson(todo);
            res.json(bool);
        }
    });
});

// Save Todo
router.post('/employee', function(req, res, next){
    //console.log("inside save router");
    var todo = req.body;
    //console.log(req);
    
        db.employees.save(todo, function(err, result){
            if(err){
                res.send(err); 
            } else {
                res.json(result);
            }
        });
    
});

// Update Todo
router.put('/employee/:id', function(req, res, next){
    var todo = req.body;
    var updObj = {};
    
    if(todo.isCompleted){
        updObj.isCompleted = todo.isCompleted;
    }
    
    if(todo.text){
        updObj.text = todo.text;
    }
    
    if(!updObj){
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.employees.update({
            _id: mongojs.ObjectId(req.params.id)
        }, updObj, {}, function(err, result){
            if(err){
                res.send(err); 
            } else {
                res.json(result);
            }
        });
    }
});

// Delete Todo
router.delete('/employee/:id', function(req, res, next){
    db.employees.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, '', function(err, result){
        if(err){
            res.send(err); 
        } else {
            res.json(result);
        }
    });
});
function checkjson(obj){
    for(var key in obj){
        return true; // not empty
    }

    return false; // empty
}
module.exports = router;