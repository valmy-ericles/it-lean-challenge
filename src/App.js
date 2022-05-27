import { Router } from "react-router-dom";
import Routes from "./routes";

import history from './services/history';

import GlobalStyles from "./styles/GlobalStyles";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router history={history}>
      <Routes/>
      <GlobalStyles/>
      <ToastContainer/>
    </Router>
  );
}

export default App;
