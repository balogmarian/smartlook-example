import { RESTDataSource } from 'apollo-datasource-rest';

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  postsReducer(post) {
    return {
      ...post,
      cursor: `${post.id}`
    }
  }

  async getAllUsers() {
    const res = await this.get('users');
    return Array.isArray(res) ? res : [];
  }

  async getUserById({ id }) {
    const res = await this.get('users', { id });
    return Array.isArray(res) ? res : [];
  }

  async getAllPosts() {
    const res = await this.get('posts');
    return Array.isArray(res) ? res.map(post => this.postsReducer(post)) : [];
  }

  async getPostById({ id }) {
    const res = await this.get('posts', { id });
    return Array.isArray(res) ? res : [];
  }

  async getAllComments() {
    const res = await this.get('comments');
    return Array.isArray(res) ? res : [];
  }

  async getCommentsByPostId({ postId }) {
    const res = await this.get('comments', { postId });
    return Array.isArray(res) ? res : [];
  }
}

export default UserAPI;
