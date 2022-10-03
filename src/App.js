import './App.css';
import ProductListing from './Components/ProductListing';
import SearchBar from './Components/SearchBar';
import dataResult from './Test.json';

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Food name" />
      <ProductListing data={dataResult}/>
    </div>
  );
}

export default App;
