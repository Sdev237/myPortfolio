import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AccountsPage from './accounts';
import TransactionsPage from './transactions';
import TransferPage from './transfers';

const BanqueApp: React.FC = () => {
  return (
    <Router>
      <div className="banque-app">
        <main>
          <Routes>
            <Route path="/" element={<AccountsPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/transfers" element={<TransferPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default BanqueApp;