import React, { useEffect } from 'react';
import Navigation from './Components/Navigation';
import "./Components/Imports/css"
function App() {
  useEffect(() => {
    var userLang = navigator.language || navigator.userLanguage;
    console.log(userLang)
  }, [])
  return <Navigation />
}

export default App;
