import './App.css';
import PriceInput from './ui/PriceInput';
import AgeGroupSelect from './ui/AgeGroupSelect';

function App() {
  return (
    <div className="app">
      <PriceInput />
      <AgeGroupSelect
        id={1}
        onChange={(disabledResult) => {
          console.log(disabledResult);
        }}
      />
      <AgeGroupSelect
        id={2}
        onChange={(disabledResult) => {
          console.log(disabledResult);
        }}
      />
      <AgeGroupSelect
        id={3}
        onChange={(disabledResult) => {
          console.log(disabledResult);
        }}
      />
    </div>
  );
}

export default App;
