const express = require('express')
const router = require('express').Router()

const itemRoutes = require('./itemRoutes')
router.use('/item', itemRoutes)

module.exports = router