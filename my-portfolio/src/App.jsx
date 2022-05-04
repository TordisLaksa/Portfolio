import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { AppRouter } from './components/AppRouter/AppRouter';

function App() {
  return (
    <Router>
      <AppRouter></AppRouter>
    </Router>
  );
}

export default App;