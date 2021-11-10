
import './App.css'
import NavBar from './components/navbar/navbar';
import HomePage from './pages/HomePage';
import Footer from './components/footer/Footer';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (<div>

    <BrowserRouter>
      <NavBar />
      <HomePage/>
      <Footer/>
    </BrowserRouter>
  </div>

  );
}

export default App;
