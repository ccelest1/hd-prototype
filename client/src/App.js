import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useApi } from './hooks/use-api';
import Exams_Page from './pages/exams';
import NavTut from './components/navbar';

// Need to Perform Styling
function App() {
  // const { response } = useApi();

  return (
    <div className="App">
      <BrowserRouter>
        <NavTut />
        <header className="App-header">
          {/* <p>
          {response}
        </p> */}
          <div>
            <Routes>
              <Route
                path="/"
                element={<Exams_Page />}
              />
            </Routes>
          </div>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
