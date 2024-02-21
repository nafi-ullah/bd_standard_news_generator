
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Result from './components/Result';

function App() {
  return (
    <>
     <Navbar />
     <div className='w-full min-h-min flex'>
          <div className='w-1/2'>
          <Form />

          </div>
          <div className='w-1/2'>
         

          </div>

     </div>
     
     </>
  );
}

export default App;
