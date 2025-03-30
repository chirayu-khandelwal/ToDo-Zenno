const {Router} = require('express')

const router = Router

router.get('/', (req, res) => {
    res.json({message: 'Hey there....'})
    console.log('Hey there....')
    })

module.exports = router;