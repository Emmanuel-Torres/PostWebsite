const { default: axios } = require("axios");

const postsUrl = '/api/posts';
const commentsUrl = '/api/comments';

const getPosts = async () => {
    const res = await axios.get(postsUrl);
    return res.data.map(p => {
        return { ...p, posted_on: (new Date(p.posted_on)).toLocaleDateString() }
    });
};

const getPostById = async (postId) => {
    const res = await axios.get(postsUrl + '/' + postId);
    return { ...res.data, posted_on: (new Date(res.data.posted_on)).toLocaleDateString() }
};

const addPost = async (post) => {
    await axios.post(postsUrl, { post: { ...post, posted_on: new Date() } });
};

const updatePost = async (postId, post) => {
    await axios.put(postsUrl + '/' + postId, { post })
};

const deletePost = async (postId) => {
    await axios.delete(postsUrl + '/' + postId);
};

const getCommentsByPostId = async (postId) => {
    const res = await axios.get(postsUrl + '/' + postId + '/comments');
    return res.data.map(c => {
        return { ...c, posted_on: (new Date(c.posted_on)).toLocaleDateString() }
    })
};

const getCommentById = async (commentId) => {
    const res = await axios.get(commentsUrl + '/' + commentId);
    return { ...res.data, posted_on: (new Date(res.data.posted_on)).toLocaleDateString() }
};

const addComment = async (comment) => {
    await axios.post(commentsUrl, { comment: { ...comment, posted_on: new Date() } });
};

const updateComment = async (commentId, comment) => {
    await axios.put(commentsUrl + '/' + commentId, { comment });
};

const deleteComment = async (commentId) => {
    await axios.delete(commentsUrl + '/' + commentId);
};

const apiService = {
    getPosts,
    getPostById,
    addPost,
    updatePost,
    deletePost,
    getCommentsByPostId,
    getCommentById,
    addComment,
    updateComment,
    deleteComment
}

export default apiService;