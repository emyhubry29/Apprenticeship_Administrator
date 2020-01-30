import React from 'react';
import './App.css';
import SignUp from './components/SignUpForm/Index';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Création de compte
        </p>
       <SignUp></SignUp>
      </header>
    </div>
  );
}

export default App;
