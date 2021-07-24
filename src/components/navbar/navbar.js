import { gql, useQuery } from '@apollo/client';
import { parse } from 'graphql';

const MENU_QUERY = gql`
  {
      menuItems(where: {location: PRIMARY}) {
        nodes {
          key: id
          parentId
          title: label
          url
        }
      }
    }
`;

const NavBarItems = (items) => (
  items.forEach(item => <itemComponent item={item} />)
)

const NavBar = () => {
  const { data, loading, error } = useQuery(MENU_QUERY);

  if (loading) return <p>Loading Menu...</p>;
  if (error) return <p>Something wrong happened!</p>;
  
  const menuItems = data.menuItems.nodes;
  menuItems.map(({ name }) => name = {name})

  return <div>
  {menuItems.map(({ title }) => <h3>{title}</h3>)}
  {menuItems.map(({ url }) => <div dangerouslySetInnerHTML={{
    __html: url
  }}></div>)}
  </div>;
};

export default NavBar;