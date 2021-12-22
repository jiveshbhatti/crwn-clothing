
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import HomePage from './components/pages/homepage/homepage.component.jsx';

const HatsPage = () =>{
return(
  <div>
    <h1>Hats Page</h1>
  </div>)
}


function App() {
  return (
    <div >
   
      <Routes>
          <Route path="/" element={<HomePage/>}> </Route>
          <Route path="/hats" element={<HatsPage/>}> </Route>
          <Route path="*" element={<HomePage/>} /> 
          </Routes>
    </div>
  );
}

export default App;
