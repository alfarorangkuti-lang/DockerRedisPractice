const express = require('express')
const categoriesModel = require('../model/categories')

exports.getAllCategories = async (req,res) => {
    try {
        const data = await categoriesModel.getAll()
        res.send(data)   
    } catch (error) {
        res.send(error.message)
    }
}

exports.createCategory = async (req,res) => {
    try {
        const {category, description} = req.body
        const data = await categoriesModel.createCategory(category, description)
        res.send(data)    
    } catch (error) {
        res.send(error.message)
    }
    
}

exports.deleteCategory = async (req,res) => {
    try{
        const {id} = req.params
        const data = await categoriesModel.destroyCategory(id)
        res.send(data)

    } catch (error) {
        res.send(error.message)
    }
}

exports.updateCategory = async (req,res) => {
    try{  
        const {id, category, description} = req.body
        const data = await categoriesModel.updateCategory(id, category, description)
        res.send(data)

    } catch (error) {
        res.send(error.message)
    }
}

exports.getCategoryById = async (req,res) => {
    try{
        const{id} = req.params
        const data = await categoriesModel.getCategoryById(id)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}