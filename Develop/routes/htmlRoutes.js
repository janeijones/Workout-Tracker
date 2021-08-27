const router = require('express').Router()
const path = require('path')

router.get('/', (req, res) => {
    //sendfile, public index html file
})

router.get('/exercise', (req, res) => {
    //sendfile, public exercise html file
})

router.get('/stats', (req, res) => {
    //sendfile, public stats html file
})


module.exports = router;