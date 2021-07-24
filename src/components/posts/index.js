import { gql, useQuery } from '@apollo/client';
import { parse } from 'graphql';

const POSTS_QUERY = gql`
  {
    posts {
      nodes {
        id
        title(format: RENDERED)
        content
        authorId
        author {
          node {
            firstName
          }
        }
      }
    }
  }
`;

const Posts = () => {
  const { data, loading, error } = useQuery(POSTS_QUERY);

  if (loading) return <p>Loading Posts...</p>;
  if (error) return <p>Something wrong happened!</p>;

  const posts = data.posts.nodes;
  posts.map(({ content }) => content = {content})

  return <div>
  {posts.map(({ title }) => <h3>{title}</h3>)}
  {posts.map(({ content }) => <div dangerouslySetInnerHTML={{
    __html: content
  }}></div>)}
  <div>Creado por {posts.map(({authorId}) => <span>{authorId}</span>)}</div>
  </div>;
};

export default Posts;