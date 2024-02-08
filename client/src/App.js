import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useApi } from './hooks/use-api';
import Exams_Page from './pages/exams';
import NavTut from './components/navbar';
import Landing_Page from './pages/landing_page';
import Patient_Example from './pages/single_patient';

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
                path="/exams"
                element={<Exams_Page />}
              />
              <Route
                path="/"
                element={<Landing_Page />}
              />
              <Route
                path="/single_patient"
                element={<Patient_Example />}
              />
            </Routes>
          </div>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
