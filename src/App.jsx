import Auth from 'features/Auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Homepage</div>} />
          <Route path="/auth/*" element={<Auth />} />
          <Route element={<div>page not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
