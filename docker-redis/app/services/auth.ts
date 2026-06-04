import api from "../lib/axios"

export const login = async (username: String, password: String) => {
    const result = await api.post('/auth/login', {username, password})
    return result.data
}