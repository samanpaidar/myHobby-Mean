var express = require('express');
var router  = express.Router();

var Message = require('../models/message');


router.get('/', function (req, res, next) {
    Message.find()
        .exec(function (err, messages) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                radin: messages
            });
        });
});
router.post('/', function (req, res, next) {
    var message = new Message({
        content: req.body.content
    });
    message.save(function(err,result){
        if(err){
            return res.status(500).json({
                title: 'There is an error',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved message',
            obj: result
        });
    });
});
router.patch('/:id', function(req, res, next){
    Message.findById(req.params.id, function(err, message){
        if(err){
            return res.status(500).json({
                title: 'There is an error',
                error: err
            });
        }
        if(!message){
            return res.status(500).json({
                title: 'There is not any message here!',
                error: {message:'You have to choose a message'}
            });
        }
        message.content= req.body.content;
        message.save(function(err, result){
            if(err){
                return res.status(500).json({
                    title: 'There is an error',
                    error: err
                });
            }
            res.status(200).json({
                message: 'The message is now updated',
                obj: result
            });
        });
    });
});
router.delete('/:id',function(req,res,next){
    Message.findById(req.params.id, function(err, message){
        if(err){
            return res.status(500).json({
                title: 'There is an error',
                error: err
            });
        }
        if(!message){
            return res.status(500).json({
                title: 'There is not any message here!',
                error: {message:'You have to choose a message'}
            });
        }
        message.remove(function(err, result){
            if(err){
                return res.status(500).json({
                    title: 'There is an error',
                    error: err
                });
            }
            res.status(200).json({
                message: 'The message is now deleted',
                obj: result
            });
        });
    });
});

module.exports = router;
