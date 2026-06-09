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