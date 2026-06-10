'use client'
import api from "../lib/axios";
import { StockParentHead } from "./types";

export const createParentProducts = async(name:string, memory:string, price:number) => {
    try {
        const result = await api.post('/parentProducts', {name,memory,price})
        return result.data    
    } catch (error) {
        return error
    }
    
}

export const getAllParentProducts = async() => {
    try {
        const result = await api.get('/parentProducts')
        return result.data as StockParentHead[]
    } catch (error) {
        return error    
    }
}

export const  getAllParentProductsByName = async(name:string) => {
    try {
        const result = await api.get(`/parentProducts/${name}`)
        return result.data
    } catch (error) {
        return error
    }
}

export const  getParentProductsById = async(id:number) => {
    try {
        const result = await api.get(`/parentProducts/byId/${id}`)
        return result.data
    } catch (error) {
        return error
    }
}

export const editParentProductsName = async(name:string, newName:string) => {
    try {
        const result = await api.put('/parentProducts/editName', {name,newName})
        return result.data
    } catch (error) {
        return error
    }
}

export const editParentProducts = async(id:number, name:string, memory:string, price:number) => {
    try {
        const result = await api.put('/parentProducts/editParentProducts', {id,name,memory,price})
        return result.data
    } catch (error) {
        return error
    }
}

export const deleteParentProducts = async(id:number) => {
    try {
        const result = await api.delete(`/parentProducts/${id}`)
        return result.data
    } catch (error) {
        return error
    }
}