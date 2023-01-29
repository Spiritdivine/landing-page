import './App.css';
import Page from './component/landing-page';
import Second from './component/whiteblu/second';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Page/>}/>
          <Route path='second' element={<Second/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
