const router = require('express').Router()
const path = require('path')

router.get('/', (req, res) => {
    //allows use of public index html file
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

router.get('/exercise', (req, res) => {
    //allows use of public exercise html file
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
});


module.exports = router;