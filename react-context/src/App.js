import { useState, createContext } from 'react'
import ComponentA from './components/ComponentA'
import './App.css';

export const DataContext = createContext();
console.log(DataContext)

function App() {

  const [userName, setUserName] = useState('Jesse')
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <DataContext.Provider value={{userName, setLoggedIn, loggedIn}}>
      <h1>Learning React Context</h1>
      {loggedIn ? "Logged In" : "Logged Out"}
      <ComponentA/>
    </DataContext.Provider>
    
  );
}

export default App;
