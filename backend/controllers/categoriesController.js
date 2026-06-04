const express = require('express')
const categoriesModel = require('../model/categories')

exports.getAllCategories = async (req,res) => {
    const data = await categoriesModel.getAll()
    res.send(data)
}

exports.createCategory = async (req,res) => {
    const {category, description} = req.body
    const data = await categoriesModel.createCategory(category, description)
    res.send(data)
}

exports.deleteCategory = async (req,res) => {
    const {id} = req.body
    const data = await categoriesModel.destroyCategory(id)
    res.send(data)
}

exports.updateCategory = async (req,res) => {
    const {id, category, description} = req.body
    const data = await categoriesModel.updateCategory(id, category, description)
    res.send(data)
}

exports.getCategoryById = async (req, res) => {
    const{id} = req.params
    const data = await categoriesModel.getCategoryById(id)
    res.send(data)
}