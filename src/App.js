import './App.css';
import React, {useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      types: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.color = 'white';
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "Success");
      // document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      <Router>
      <Navbar title = 'TextUtils' aboutText = 'About Us' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        {/* /users --> Component 1
        /users/home --> Component 2 */}
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={
            <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
            }>
            </Route>
          </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
