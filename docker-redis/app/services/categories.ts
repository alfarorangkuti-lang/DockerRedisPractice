import api from "../lib/axios";

export const getCategories = async () => {
    const result = await api.get('/categories')
    return result.data
}

export const createCategory = async (category: String | null | undefined, description: String | null | undefined) => {
    const result = await api.post('/categories', {category, description})
    return result.data
}

export const getCategoryById = async (id:number) => {
    const result = await api.get(`/categories/${id}`)
    return result.data
}

export const editCategory = async(id:number, category: String | null | undefined, description: String | null | undefined ) =>{
    const result = await api.put('/categories', {id,category, description})
    return result.data
}

export const deleteCategory = async(id: number | undefined) => {
    const result = await api.delete(`/categories/${id}`)
    return result.data
}