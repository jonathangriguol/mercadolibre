import { Outlet } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='MainContent' data-testid="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
