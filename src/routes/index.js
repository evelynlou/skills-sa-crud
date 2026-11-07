import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

import GerenciarHabilidades from '../pages/gerenciar-habilidades/GerenciarHabilidades.js';

function WebRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<GerenciarHabilidades />}
        />

        <Route
          path="/habilidades"
          element={<GerenciarHabilidades />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
}

export { WebRoutes };
