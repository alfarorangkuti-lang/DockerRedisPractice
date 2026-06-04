const express = require('express')
const suppliersModel = require('../model/suppliers')

exports.getAllSuppliers = async (req,res) => {
    try {
        const data = await suppliersModel.getAllSuppliers()
        res.send(data)   
    } catch (error) {
        res.send(error.message)
    }
}

exports.createSupplier = async (req,res) => {
    try {
        const {name} = req.body
        const data = await suppliersModel.createSupplier(name)
        res.send(data)    
    } catch (error) {
        res.send(error.message)
    }
    
}

exports.deleteSupplier = async (req,res) => {
    try{
        const {id} = req.params
        const data = await suppliersModel.destroySupplier(id)
        res.send(data)

    } catch (error) {
        res.send(error.message)
    }
}

exports.updateSupplier = async (req,res) => {
    try{  
        const {id, name} = req.body
        const data = await suppliersModel.updateSupplier(id, name)
        res.send(data)

    } catch (error) {
        res.send(error.message)
    }
}

exports.getSupplierById = async (req,res) => {
    try{
        const{id} = req.params
        const data = await suppliersModel.getSupplierById(id)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}