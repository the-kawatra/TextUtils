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

  const removeBodyClass = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
  }
  const toggleMode = (cls) => {
    removeBodyClass();
    document.body.classList.add('bg-'+cls);
    if(cls === 'dark') {
      setMode('dark');
      document.body.classList.remove('bg-dark');
      document.body.style.color = 'white';
      document.body.style.backgroundColor = '#000020';
      // showAlert("Dark mode has been enabled", "Success");
      // document.title = 'TextUtils - Dark Mode';
    }
    else if(cls === 'light') {
      setMode('light');
      document.body.classList.remove('bg-light');
      document.body.style.color = 'black';
      document.body.style.backgroundColor = '#dbdbfb';
      // showAlert("Light mode has been enabled", "Success");
      // document.title = 'TextUtils - Light Mode';
    }
    else if(cls === 'primary') {
      setMode('light');
      document.body.style.color = 'white';
      // showAlert("Blue mode has been enabled", "Success");
    }
    else if(cls === 'danger') {
      setMode('light');
      document.body.style.color = 'white';
      // showAlert("Red mode has been enabled", "Success");
    }
    else if(cls === 'warning') {
      setMode('light');
      document.body.style.color = 'black';
      // showAlert("Orange mode has been enabled", "Success");
    }
    else if(cls === 'success') {
      setMode('light');
      document.body.style.color = 'white';
      // showAlert("Green mode has been enabled", "Success");
    }
    else {
      setMode('dark');
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
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={
            <TextForm heading="Try TextUtils - Word counter Character counter Remove extra spaces Uppercase Lowercase Capitalcase"  mode={mode} showAlert={showAlert} />
            }>
            </Route>
          </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
