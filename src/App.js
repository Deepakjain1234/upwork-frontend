import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home';
const routes = {
  '/': <Home />
  
}

function App() {
  return (
    <BrowserRouter>
            <Routes>
                {
                    Object.keys(routes).map((route, index) => {
                        return (<Route key={index} path={route} element={routes[route]} />);
                    })
                }
            </Routes>
        </BrowserRouter>
  );
}

export default App;
