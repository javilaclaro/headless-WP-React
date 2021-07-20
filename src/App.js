import logo from './logo.svg';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Posts from "./components/posts";

const client = new ApolloClient({
  uri: 'https://juandac.com/wp/graphql',
});

  const App = () => {
    return (
      <ApolloProvider client={client}>
        <div>
          <Posts />
        </div>
      </ApolloProvider>
    );
  };


export default App;
