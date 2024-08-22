import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Homepage from './Homepage';

const LazyAbout = React.lazy(() => import('./About')); 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback={<h1>Loading...</h1>}> 
              <LazyAbout />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
