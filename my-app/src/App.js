import logo from './logo.svg';
import { MyComponent } from 'ui-library';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent title='Using component from ui library'/>
      </header>
    </div>
  );
}

export default App;
