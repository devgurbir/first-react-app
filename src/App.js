import logo from './logo.svg';
import './App.css';
import List from './components/List'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <List />
      <Button btnText="Click Me" />
      <Button btnText="Are Click Me Bhai" />
    </div>
  );
}

export default App;
