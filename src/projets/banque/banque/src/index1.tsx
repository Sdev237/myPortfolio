import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import AccountsPage from './pages/accounts';
import TransactionsPage from './pages/transactions';
import TransferPage from './pages';

const BanqueApp: React.FC = () => {
  return (
    <Router>
      <div className="banque-app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<AccountsPage />} />
            <Route path="/pages/transactions" element={<TransactionsPage />} />
            <Route path="/pages/transfers" element={<TransferPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default BanqueApp;