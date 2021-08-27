const router = require('express').Router()
const db = require('../models');
const mongojs = require('mongojs');


router.get('/workouts', (req, res) => { //gets last workout
    db.Workout.aggregate([ //aggregate used for values
      {
        $addFields: {
          totalDuration: {
            $sum: '$exercises.duration'
          },
        },
      },
    ])
    .then(Data => { //respond with workout handling
      res.json(Data);
    })
    .catch((err) => {  //error handling
        res.status(500).json(err) 
    });
});

router.post('/workouts', (req, res) => { //creates workout
    db.Workout.create(req.body)
  .then(dbWorkout => {
    res.json(dbWorkout)
    //console.log(dbWorkout)
  }) 
  .catch(err => {
    //error handling
    res.json(err);
  });
});


router.put() //- workouts by id

router.get() //- workouts in Range


module.exports = router;

