
// component
import SectionFirst from './component/SectionFirst';
import SectionSec from './component/SectionSec';
import SectionThird from './component/SectionThird';
import SectionForth from './component/SectionForth';
import SectionFive from './component/SectionFive';
import SectionSix from './component/SectionSix';
import SectionSeven from './component/SectionSeven';
import SectionEight from './component/SectionEight';
import SectionNine from './component/SectionNine';
import SectionTen from './component/SectionTen';
// image
import star from './image/header_divide.png';
import logo from './image/logo.png';
// style
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='w-full h-header flex items-center justify-between px-3 md:px-24'>
        <img src={logo} alt="logo"></img>
        <div className='items-center hidden lg:flex'>
          <button className='font-bold'>關卡資訊</button>
          <img src={star} alt="divide" className='px-4'></img>
          <button className='font-bold'>攻略資源</button>
          <img src={star} alt="divide" className='px-4'></img>
          <button className='font-bold'>求職專區</button>
          <div className='flex items-center pl-4'>
            <button className=' bg-mainYellow border-black-0 border-2 px-3 py-1 font-bold mr-4'>註冊報名</button>
            <button className='border-black-0 border-2 px-3 py-1 font-bold'>登入</button>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center bg-black-bg'>
        <SectionFirst/>
      </div>
      <div className='w-full flex justify-center bg-black-bg'>
        <SectionSec/>
      </div>
      <div className='w-full bg-mainYellow'>
        <SectionThird/>
      </div>
      <div className='w-full bg-lightBlue'>
        <SectionForth/>
      </div>
      <div className='w-full bg-black-bg'>
        <SectionFive/>
      </div>
      <div className='w-full bg-lightBlue'>
        <SectionSix/>
      </div>
      <div className='w-full bg-mainYellow'>
        <SectionSeven/>
      </div>
      <div className='w-full bg-white'>
        <SectionEight/>
      </div>
      <div className='w-full bg-lightBlue'>
        <SectionNine/>
      </div>
      <div className='w-full bg-black-bg'>
        <SectionTen/>
      </div>
    </div>
  );
}

export default App;
