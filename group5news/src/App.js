import './App.css';
import data from './hackernews.json'
import Top from "./Components/Top"
import Main from "./Components/Main"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Top />
      <Main />
      
    </div>
  );
}

export default App;
