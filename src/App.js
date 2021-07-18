import logo from './logo.svg';
import './App.css';

fetch('https://juandac.com/wp/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
        {
          posts {
            nodes {
              id
              title
              date
              content
            }
          }
        }
    `,
  }),
})

  .then(res => res.json())
  .then(res => console.log(res.data)) 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Juandac.com

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
