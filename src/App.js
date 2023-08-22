import './App.css';
import AgeGroupPriceList from './ui/AgeGroupPriceList';
import { AgeGroupContextProvider } from './ui/AgeGroupContext';
import NewAgeGroupPriceItem from './ui/NewAgeGroupPriceItem';

function App() {
  return (
    <div className="app">
      <AgeGroupContextProvider>
        <AgeGroupPriceList onChange={console.log} />
        <NewAgeGroupPriceItem />
      </AgeGroupContextProvider>
    </div>
  );
}

export default App;
