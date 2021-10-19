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
    return { ...res.data, posted_on: new Date(res.data.posted_on) }
};

const addPost = async (post) => {
    const newPost = {...post, posted_on: new Date}
    await axios.post(postsUrl, post);
};

const updatePost = async (postId, post) => {
    await axios.put(postsUrl + '/' + postId, post)
};

const deletePost = async (postId) => {
    await axios.delete(postsUrl + '/' + postId);
};

const getCommentByPostId = async (postId) => {
    await axios.get(postsUrl + '/' + postId + '/comments');
};

const getCommentById = async (commentId) => {
    await axios.get(commentsUrl + '/' + commentId);
};

const addComment = async (comment) => {
    await axios.post(commentsUrl, comment);
};

const updateComment = async (commentId, comment) => {
    await axios.put(commentsUrl + '/' + commentId, comment);
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
    getCommentByPostId,
    getCommentById,
    addComment,
    updateComment,
    deleteComment
}

export default apiService;