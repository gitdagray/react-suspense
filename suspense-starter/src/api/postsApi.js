import axios from "axios"

// Not needed until optimistic UI updates example
const delay = () => new Promise((res) => setTimeout(() => res(), 1800));

const postsApi = axios.create({
    baseURL: "http://localhost:3500"
})

export const postsUrlEndpoint = '/posts'

export const getPostsByUserId = async (url, userId) => {
    await delay()
    const response = await postsApi.get(`${url}?userId=${userId}`)
    return response.data
}

