import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './views/Landing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>  
        <div>
          <Route path='/' component={Landing} exact/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
