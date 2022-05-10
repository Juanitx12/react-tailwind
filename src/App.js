
import './App.css';
import Gtr from './assets/Images/Gtr.jpg'
import GtrLogo from './assets/Images/GtrLogo.jpg'
import Nissan from './assets/Images/Nissan.webp'


function App() {
  return (
      <div className="sm:w-screen h-screen flex  justify-center items-center">
          <div className="w-10/12 h-full flex flex-col justify-between items-center">
            <div className='contenedor-image'>
              <img src={Nissan} alt="" className="w-full h-5/6 object-contain"/>
            </div>
            <div className='w-full h-2/6 flex flex-col items-center border-b-8 '>
              <button className='botones'>About Us</button>
              <button className='botones'>Projects</button>
              <button className='botones'>Contact</button>
            </div>
            <div className='contenedor-image'>
              <img src={GtrLogo} alt="" className="w-full h-5/6 object-contain"/>
            </div>
            <div className='contenedor-image'>
              <img src={Gtr} alt="" className="w-full h-5/6 object-contain"/>
            </div>
            <div className='w-full h-2/6 flex flex-col justify-center items-center'>
              <p className='text-3xl'>Juan David López Foronda</p>
            </div>
          </div>
      </div>
  );
}

export default App;
