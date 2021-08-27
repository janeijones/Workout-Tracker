const router = require('express').Router()
const path = require('path')

router.get('/', (req, res) => {
    //allows use of public index html file
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get('/exercise', (req, res) => {
    //sendfile, public exercise html file
})

router.get('/stats', (req, res) => {
    //sendfile, public stats html file
})


module.exports = router;