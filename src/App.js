import './App.css';
import DataFetching from './components/DataFetching';
import DataSending from './components/DataSending';

function App() {
  return (
    <div>
      <DataSending />
      <br />
      <br />
      <DataFetching />
    </div>
  );
}

export default App;
