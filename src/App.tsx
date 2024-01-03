import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AuthForm from './pages/auth-page/auth-form/auth-form';
import Dashboard from './pages/auth-page/Dashboard';

const App: React.FC = () => {
    return (
        <Router>
            <Route path="/login" element={<AuthForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Добавьте другие маршруты, если необходимо */}
        </Router>
    );
};

export default App;
