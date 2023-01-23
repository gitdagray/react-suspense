const Post = ({ post, user }) => {
    return (
        <article className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>Post ID: {post.id}</p>
            <p>Author: {user.name} from {user.company.name}</p>
            <p>Tagline: {user.company.catchPhrase}</p>
        </article>
    )
}
export default Post