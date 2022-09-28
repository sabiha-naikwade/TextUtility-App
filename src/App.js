
import { useState } from 'react';

import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'darkGrey';
      showAlert('dark mode has been enabled', "success")
      
      
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has been enabled', "success")
      
    }

  }
  return (
    <>

      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />


        <div className="container my-3">

          <Routes>

            <Route path="/" element={<Textform heading="Try TextUtils-Word Counter, Character Counter and clears our entered text" mode={mode} />}></Route>
            {/* <About/> */}
            <Route path="/about" element={<About />}></Route>


          </Routes>

        </div>
      </Router>
    </>

  );
}

export default App;
//event bubbling and event looping