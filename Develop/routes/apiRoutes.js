const router = require('express').Router()
const db = require('../models');


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
    .then(workoutData => { //respond with workout handling
      res.json(workoutData);
    })
    .catch((err) => {  //error handling
        res.status(500).json(err) 
    });
});

router.post('/workouts', (req, res) => { 
    //creates workout
    db.Workout.create({})
  .then(dbWorkout => {
    res.json(dbWorkout)
  }) 
  .catch(err => {
    //error handling
    res.send(err);
  });
});


router.put("/workouts/:id", (req, res) => { //updates individual workout
    //const body = req.body
    //console.log("Body" + body)

db.Workout.findByIdAndUpdate(
    req.params.id, {
      $push: {
        exercises: (req.body)
      }
    }, 
    {
      runValidators: true
    }
  )
  .then(workoutData => {
    res.json(workoutData); //respond with workout data
  })
  .catch((err) => {
    //error handling
    console.log("Error"+ err)
    res.status(500).json(err)
  });
}); 


router.get('/workouts/range', (req, res) => {

    db.Workout.aggregate([{
          $addFields: {
            totalDuration: {
              $sum: '$exercises.duration',
            },
          },
        },
        {
          $addFields: {
            totalWeight: {
              $sum: '$exercises.weight',
            },
          },
        }
      ])
      .then(workoutData => {
          //respond with workout data
        res.json(workoutData);
      })
      .catch((err) => {
      //error handling
        res.status(500).json(err)
      });
  });
   //- workouts in Range


module.exports = router;

