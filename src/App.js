import { BrowserRouter} from 'react-router-dom';
import './App.css';
// import { useEffect, useState } from 'react';
import Router from './Router/Router';


function App() {

  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch('/api/hello')
  //     .then(response => response.text())
  //     .then(message => {
  //       setMessage(message);
  //     });
  // },[])

  return (
    <div>
      {/* <h1>Hello World!!</h1>
      <p>{message}</p>
      <br /> */}

      <BrowserRouter>
        <Router />  {/* Router (react-router-dom) 이 아닌 컴포넌트 Router */}
      </BrowserRouter>
    </div>
    
  );
}

export default App;
