import './App.css';
import NavBar from './components/nav';
import Banner from './components/banner';
import Category from './components/category';
import Safety from './components/safety';
import Footer from './components/footer';

function App() {
  return (
    <div className="App container py-2">
     <NavBar />
     <Banner />
     <Category />
     <Safety />
     <Footer />
    </div>
  );
}

export default App;
