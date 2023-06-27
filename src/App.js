import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Create from './Component/Create';
import Read from './Component/Read';
import Update from './Component/Update';
import Option from './Component/Option';
function App() {
  return (
    <div className="App">
      <h1>create form using API with CRUD operation</h1>
      
        <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Option/>}/>
          <Route exact path='/create' element={<Create/>}/>
          <Route exact path="/Read" element={<Read/>}/>
          <Route exact path="/update" element={<Update/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
