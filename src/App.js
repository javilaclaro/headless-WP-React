import logo from './logo.svg';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/client";
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import Posts from "./components/posts";
import NavBar from "./components/navbar/navbar";


const client = new ApolloClient({
  uri: 'https://juandac.com/wp/graphql',
});

  const App = () => {
    return (
      <ApolloProvider client={client}>
        <NavBar></NavBar>
        <div>
          <Posts />
        </div>
      </ApolloProvider>
    );
  };


export default App;
