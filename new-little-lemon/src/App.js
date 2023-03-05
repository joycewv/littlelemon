import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <>
    <ChakraProvider>
      <h1>Testing: Hello World</h1>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </ChakraProvider>
    </>
  );
}

export default App;
