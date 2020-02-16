import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    users: [User]
    userById(id: ID!): [User]
    posts(pageSize: Int, after: String): PostConnection!
    postById(id: ID!): [Post]
    comments: [Comment]!
    commentsByPostId(postId: ID!): [Comment]
  }

  type User {
    id: ID!
    name: String
    username: String!
    email: String!
    address: Address
    phone: String
    website: String
    company: Company
    posts: [Post]
  }

  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }

  type Geo {
    lat: String
    lng: String
  }

  type Company {
    name: String
    catchPhrase: String
    bs: String
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    comments(postId: ID!): [Comment]
    userId: String,
  }

  type PostConnection {
    cursor: String!
    hasMore: Boolean!
    posts: [Post]!
  }

  type Comment {
    id: ID!
    name: String!
    email: String!
    body: String!
  }
`;

export default typeDefs;
