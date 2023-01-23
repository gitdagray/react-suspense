import useSWR from 'swr'

import {
    getPostsByUserId,
    postsUrlEndpoint as postsCacheKey
} from '../api/postsApi'

import {
    getUserById,
    usersUrlEndpoint as usersCacheKey
} from '../api/usersApi'

import Post from './Post'

const PostsList = ({ currentUserId }) => {

    const {
        data: posts,
    } = useSWR(
        [postsCacheKey, currentUserId],
        ([url, userId]) => getPostsByUserId(url, userId),
        { suspense: true }
    )

    const {
        data: user
    } = useSWR(
        posts?.length ? [usersCacheKey, currentUserId] : null,
        ([url, userId]) => getUserById(url, userId),
        { suspense: true }
    )

    const content = (
        <main>
            {posts.map(post => {
                return <Post key={post.id} post={post} user={user} />
            })}
        </main>
    )

    return content
}
export default PostsList