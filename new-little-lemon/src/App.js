import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Specials from './components/Specials';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';
import BookingForm from './components/BookingForm';
/*import Routing from './components/Routing';*/

function App() {
  return (
    <>
    <ChakraProvider>
      <Nav />
      
      <Header />
      <Specials />
      <BookingForm />
      <Footer />
    </ChakraProvider>
    </>
  );
}

export default App;
