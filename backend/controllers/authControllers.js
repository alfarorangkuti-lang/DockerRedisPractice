const express = require('express')
const UserModel = require('../model/User')
const bcrypt = require('bcrypt')

exports.getUserDetail = async(req, res) =>{
    res.json({id:req.user.id, username:req.user.username})
}

exports.registerUser = async(req, res) => {
    const { username, password } = req.body
    const result = await UserModel.register(username, password)
    res.send({message : result})
}

exports.logIn = async(req, res) => {
    const { username, password } = req.body
    const result = await UserModel.logIn(username,password)
    res.send({message: result})
}