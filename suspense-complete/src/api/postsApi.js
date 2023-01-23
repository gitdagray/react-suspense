import axios from "axios"

const delay = () => new Promise((res) => setTimeout(() => res(), 800));

const postsApi = axios.create({
    baseURL: "http://localhost:3500"
})

export const postsUrlEndpoint = '/posts'

export const getPostsByUserId = async (url, userId) => {
    await delay()
    const response = await postsApi.get(`${url}?userId=${userId}`)
    return response.data
}

