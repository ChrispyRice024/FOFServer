const express = require('express')
const router = require('express').Router()

const itemRoutes = require('./itemRoutes')
router.use('/imageStock', itemRoutes)

module.exports = router