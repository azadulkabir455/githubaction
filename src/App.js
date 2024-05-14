import logo from './logo.svg';
import './app.css';
import { Link} from 'react-router-dom';

function App() {
  return (  
    <>
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>

    </>
  );
}

export default App;
