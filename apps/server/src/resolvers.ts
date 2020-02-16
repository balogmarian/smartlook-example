const { paginateResults } = require('./utils');

const resolvers = {
  Query: {
    users: (_, __, { dataSources }) => dataSources.userAPI.getAllUsers(),

    userById: (_, { id }, { dataSources }) => {
      const res = dataSources.userAPI.getUserById({ id });
      return res;
    },

    posts: async (_, { pageSize = 20, after }, { dataSources }) => {
      const allPosts = await dataSources.userAPI.getAllPosts();
      const posts = paginateResults({
        after,
        pageSize,
        results: allPosts
      });
      return {
        posts,
        cursor: posts.length ? posts[posts.length - 1].cursor : null,
        hasMore: posts.length
          ? posts[posts.length - 1].cursor !==
            allPosts[allPosts.length - 1].cursor
          : false
      };
    },

    postById: (_, { id }, { dataSources }) => {
      const res = dataSources.userAPI.getPostById({ id });
      return res;
    },

    comments: (_, __, { dataSources }) => dataSources.userAPI.getAllComments(),

    commentsByPostId: (_, { postId }, { dataSources }) => {
      const res = dataSources.userAPI.getCommentsByPostId({ postId });
      return res;
    }
  },

  Post: {
    comments: (_, { postId }, { dataSources }) => {
      const res = dataSources.userAPI.getCommentsByPostId({ postId });
      return res;
    }
  }
};

export { resolvers };
