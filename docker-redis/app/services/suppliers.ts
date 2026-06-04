import api from "../lib/axios";

export const getSuppliers = async () => {
    const result = await api.get('/suppliers')
    return result.data
}

export const createSupplier = async (name: String | null | undefined) => {
    const result = await api.post('/suppliers', {name})
    return result.data
}

export const getSupplierById = async (id:number) => {
    const result = await api.get(`/suppliers/${id}`)
    return result.data
}

export const editSupplier = async(id:number, name: String | null | undefined ) =>{
    const result = await api.put('/suppliers', {id, name})
    return result.data
}

export const deleteSupplier = async(id: number | undefined) => {
    const result = await api.delete(`/suppliers/${id}`)
    return result.data
}