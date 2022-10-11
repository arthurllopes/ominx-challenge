import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CepContextProvider } from './contexts/cepContext';
import ProtectedRoute from './fragments/ProtectedRoute';
import DealsPage from './pages/deals';
import HomePage from './pages/home';

function App() {
  return (
    <CepContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path="/deals"
          element={
            <ProtectedRoute>
              <DealsPage />
            </ProtectedRoute>
          }
        />         
      </Routes>
    </BrowserRouter>
  </CepContextProvider>
  );
}

export default App;
