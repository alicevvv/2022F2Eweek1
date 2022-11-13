
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
import menu from './image/menu.png'
// style
import './App.css';



function App() {

  const gotoSection=(position)=>{
    console.log(position)
    const section = document.querySelector(position);
    section.scrollIntoView({behavior:'smooth',block:'start'})
  }
  return (
    <div className="App">
      <div className='w-full h-header flex items-center justify-between px-3 md:px-24'>
        <img src={logo} alt="logo"></img>
        <div className='items-center hidden lg:flex'>
          <button className='font-bold p-3' onClick={()=>gotoSection('#section4')}>關卡資訊</button>
          <img src={star} alt="divide" className='px-4'></img>
          <a className='font-bold p-3' href='https://hackmd.io/ofJD4K7iSI65V19zxC7d0w'>攻略資源</a>
          <img src={star} alt="divide" className='px-4'></img>
          <a className='font-bold p-3' href='https://2022.thef2e.com/jobs'>求職專區</a>
          <div className='flex items-center pl-4'>
            <button className=' bg-mainYellow border-black-0 border-2 px-3 py-1 font-bold mr-4'>註冊報名</button>
            <button className='border-black-0 border-2 px-3 py-1 font-bold'>登入</button>
          </div>
        </div>
        <div className='items-center flex lg:hidden'>
          <img src={menu} alt="menu"></img>
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
      <div className='w-full bg-lightBlue' id="section4">
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
