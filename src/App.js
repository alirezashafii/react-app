// import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from './components/Search';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Search />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
