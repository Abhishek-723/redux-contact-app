import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import View from './Components/View';
import Create from './Components/Create';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit from './Components/Edit';

function App() {
  return (
      <>
      <ToastContainer />
    <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/view-contacts" element={<View />} />
                <Route path="/add-contact" element={<Create />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
        </Router>
      </>
  );
}

export default App;
