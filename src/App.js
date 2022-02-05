
import './App.css'

import HomePage from './pages/HomePage';
import Footer from './components/footer/Footer';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (<div>

    <BrowserRouter>
      
      <HomePage/>
      <Footer/>
    </BrowserRouter>
  </div>

  );
}

export default App;
