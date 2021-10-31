import logo from './logo.svg';
import './App.css';
import FirstComponent, {SecondComponent} from './components/learning-examples/FirstComponent'
function App() {
  return (
    <div className="App">
         My Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
    </div>
  );
}

export default App;
