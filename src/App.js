import './App.css';

import Nav from './Nav'
import './Nav.css';

import Login from './Login'
import './Login.css';

// this function returns the components in a div to the index page
function App() {
  return (
    <div className="App">
      <Nav/>
      <Login/>
    </div>
  );
}

export default App;