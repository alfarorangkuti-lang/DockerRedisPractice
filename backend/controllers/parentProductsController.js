const express = require('express')
const parentProductsModel = require('../model/parentProducts')

exports.getAllParentProducts = async(req,res) => {
    try {
        const data = await parentProductsModel.getAll()
        const map = new Map()
        for(const {name, ...rest} of data) {
            if(!map.has(name)){
                map.set(name, {
                    name:name,
                    variants:[]
                })
            }
            map.get(name).variants.push(rest)
        }
        const result = [...map.values()]
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

exports.getAllParentProductsByName = async(req, res) => {
    try {
        const {name} = req.params
        const data = await parentProductsModel.getParentProductsByName(name)
        res.send(data)
        
    } catch (error) {
        res.send(error.message)
    }
    
}

exports.createParentProducts = async(req,res) => {
    try {
        const {name,memory,price} = req.body
        const result = await parentProductsModel.createParentProduct(name, memory, price)
        res.send(result)
    } catch (error) {
        res.send(error.message)
    }
}

exports.editParentProductName = async(req,res) => {
    try {
        
        const {name, newName} = req.body
        const result = await parentProductsModel.editParentProductName(name, newName)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

exports.editParentProduct = async(req,res) =>{
    try {
        const{name,memory,price,id} = req.body
        const result = await parentProductsModel.editParentProduct(name,memory,price,id)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

exports.getParentProductsById = async(req,res) => {
    try {
        const { id } = req.params
        const result = await parentProductsModel.getParentProductsById(id)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

exports.deleteParentProduct = async(req, res) => {
    try {
        const { id } = req.params
        const result = await parentProductsModel.deleteParentProduct(id)
        res.send(result)
    } catch (error) {
        res.result(error)
    }
}