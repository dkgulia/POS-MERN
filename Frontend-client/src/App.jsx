// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage.jsx';
import Itempage from './Pages/Itempage.jsx';
import BillsPage from './Pages/BillsPage.jsx';
import DefaultLayout from './Components/DefaultLayout.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="items" element={<Itempage />} />
          <Route path="bills" element={<BillsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
