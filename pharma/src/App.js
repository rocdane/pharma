import './App.css';
import Header from './components/Header';
import Cover from './components/Cover';
import Infos from './components/Infos';
import Rubric from './components/Rubric';
import Marketing from './components/Marketing';
import Discover from './components/Discover';
import Footer from './components/Footer';
import Viewer from './components/Viewer';
import Cookie from './components/Cookie';

function App() {
  return (
    <div className="App">
      <Header />
      <Cover />
      <Infos />
      <Rubric />
      <Marketing />
      <Discover />
      <Footer />
      <Viewer />
      <Cookie />
    </div>
  );
}

export default App;
