import './App.css';
// import { useApi } from './hooks/use-api';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// pages and comps
import ListExams from './pages/list_exams'
import NavBar from './components/navbar';

function App() {
  // const { response } = useApi();
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* <header className="App-header">
          <p>
            {response}
          </p>
        </header> */}
        <div className='App-header'>
          <Routes>
            <Route
              path="/"
              element={<ListExams />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
