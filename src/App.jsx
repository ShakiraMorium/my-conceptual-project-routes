import './App.css';
import Navbar from './Components/Navbar/Navbar';
import PriceOptions from './Components/PriceOptions/PriceOptions';



function App() {
  

  return (
    <>
     <Navbar></Navbar>
     <h1 className='text-5xl bg-red-400 text-center'>Courses Price</h1>
     <PriceOptions></PriceOptions>
      
    </>
  )
}






export default App
