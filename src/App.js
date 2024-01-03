import './App.css';
import Footer from './component/Footer';
import Header from './component/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import VoteQuestion from './page/VoteQuestion';
import CreateQuestion from './page/CreateQuestion';

function App() {
  return (
    <div className="App">
      <Header />   
      <BrowserRouter>     
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/vote"
              element={<VoteQuestion /> }
            />
            <Route
              path="/create"
              element={<CreateQuestion />}
            />
          </Routes>    
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
