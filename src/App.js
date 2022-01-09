
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';



function App() {
  return (
    <div >
   
      <Routes>
          <Route path="/" element={<HomePage/>}> </Route>
          <Route path="/shop" element={<ShopPage/>}> </Route>
          <Route path="*" element={<HomePage/>} /> 
          </Routes>
    </div>
  );
}

export default App;
