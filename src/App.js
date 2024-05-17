
import Home from './Components/Home';
import CarContent from './Components/CarContent';
import DataProvider from './Components/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <DataProvider>
   <BrowserRouter>
   <Routes>
<Route path='/' element={<Home />} />
   <Route path='/cart' element={<CarContent /> } />
   
   </Routes>
   </BrowserRouter>
   </DataProvider>
  );
}

export default App;
