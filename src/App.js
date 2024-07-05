
import './App.css';
import Video from './component/video/Video';
import NewsComponent from './component/news/NewsComponent';
import Home from './component/home/Home';

function App() {
  return (
    <header className="App-header">
    <div className="App">
      <h1>YOUTUBE</h1>
      <Home/>
      <NewsComponent/>

    </div>
    </header>
  );
}

export default App;
