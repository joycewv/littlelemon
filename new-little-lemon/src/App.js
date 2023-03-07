import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Specials from './components/Specials';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <>
    <ChakraProvider>
      <Nav />
      <Header />
      <Main />
      <Specials />
      <BookingForm />
      <h1>Testing: Hello World</h1>
      <Footer />
    </ChakraProvider>
    </>
  );
}

export default App;
