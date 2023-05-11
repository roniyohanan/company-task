import './App.css';
import { UserContextProvider } from './userContext';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import {CompaniesPage} from './companiesPage';

import {LoginPage} from './loginPage'

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter >
      <div className="App">
      <Routes>
        <Route path="/company" component={<></>} />
        <Route path="/allcompanies" element={<CompaniesPage/>} />
        <Route path="/" element={<LoginPage/>} />
      </Routes>
      </div>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
