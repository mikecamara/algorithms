import './App.css';
import './ratio-categories/Ratio';
import plusMinus from './ratio-categories/Ratio';
import minMax from './min-max/MinMax';
import convertTime from './convert-time/ConvertTime';
import alpha2CodeToCountry from './alpha2code-to-country-name/Alpha2CodeToCountry';
import lonelyinteger from './lonely-element/LonelyElement';

function App() {
  // var resultsPlusMinus = plusMinus();
  // var resultsMinMax = minMax();
  // var convertedTime = convertTime();
  var javascriptIsFun = minMax([0,5,4,3,2,1]);
  var lonelyElementFun = lonelyinteger([1,1,2,2,3,3,4]);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Having fun with algorithms.
        </p>

        <p>
          {javascriptIsFun}
        </p>

        <p>
          {lonelyElementFun}
        </p>

        
      </header>
    </div>
  );
}

export default App;
