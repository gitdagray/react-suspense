import axios from "axios"

const delay = () => new Promise((res) => setTimeout(() => res(), 800));

const usersApi = axios.create({
    baseURL: "http://localhost:3500"
})

export const usersUrlEndpoint = '/users'

export const getUsers = async () => {
    await delay()
    const response = await usersApi.get(usersUrlEndpoint)
    return response.data
}

export const getUserById = async (url, userId) => {
    await delay()
    const response = await usersApi.get(`${url}/${userId}`)
    return response.data
}

