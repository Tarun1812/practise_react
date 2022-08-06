import Header from '../src/components/Header';
import './App.css';
import Footer from './components/Footer';
import Product from './components/Productdisplay';

function App() {
  return (
    <div className="App">
      <Header />
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
