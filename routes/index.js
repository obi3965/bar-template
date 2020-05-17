const express = require('express')

const router = express.Router();

router.get('/home',function(req,res){
      res.render('index',{
            title:'home',
            page:'homeNav'
      })
})


router.get('/events', function(req,res){
      res.render('events',{
            title:'Events',
            page:'eventsNav'
      })
})


router.get('/quiz', function(req,res){
      res.render('quiz',{
            title:'quiz',
            page:'quizNav'
      })
})

router.get('/contact', function(req,res){
      res.render('contact',{
            title:'contact',
            page:'contactNav'
      })
})

module.exports = router;