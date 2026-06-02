const express = require('express')
const UserModel = require('../model/User')
const bcrypt = require('bcrypt')

exports.getUserDetail = async(req, res) =>{
    const result = await UserModel.getUser()
    res.json(result)
}

exports.registerUser = async(req, res) => {
    const { username, password }= req.body
    const hashedPassowrd = await bcrypt.hash(password, 10)
    res.send({username, hashedPassowrd})
}

exports.comparePassword = async(req, res) => {
    const hashedPassowrd = await bcrypt.hash("Admin#1234", 10)
    const isMatch = await bcrypt.compare(req.body.password, hashedPassowrd)
    res.send([isMatch])
}