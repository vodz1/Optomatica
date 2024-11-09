import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Books from './Pages/Books';
import CreateBooks from './Pages/CreateBooks';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Books/>} />     
      <Route path="/create"  element={<CreateBooks/>} />     

    </Routes>
    </BrowserRouter>

  );
}

export default App;
