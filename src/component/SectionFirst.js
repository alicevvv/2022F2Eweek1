import React,{ useState,useEffect, useRef, useLayoutEffect } from 'react'
import Typed from 'react-typed'
// image
import kv1 from '../image/section1/KV-1.png'
import eyes1 from '../image/section1/eyes1.png'
// import eyes2 from '../image/section1/eyes2.png'
import kv6 from '../image/section1/KV-6.png'
import kv4 from '../image/section1/KV-4.png'
import kv3 from '../image/section1/KV-3.png'
import kv5 from '../image/section1/KV-5.png'
import kv7 from '../image/section1/KV-7.png'
import arrow from '../image/section1/scroll_down.png'
import { gsap } from 'gsap'

export default function SectionFirst(){
    const [_timeleft,_setTimeLeft] = useState(59)
    const intervalRef = useRef()

    const root = useRef()
    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
            gsap.to(".box",{rotation:"+=360",repeat:2},root);
        })
        return () => ctx.revert();
    },[])


    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            _setTimeLeft((t)=>t-1)
        },1000);
        return ()=>clearInterval(intervalRef.current)
    },[]);
    useEffect(()=>{
        if (_timeleft < 0) {
            _setTimeLeft(59)
        }
    },[_timeleft])

    return(
        <div className='flex flex-col py-3 md:py-16 max-w-[760px] lg:max-w-[1092px]'>
            {/* //style={{maxWidth:'1092px'}} */}
            <table className='table-auto'>
                <tbody>
                    <tr>
                        <td className='border-white border-2'>
                            <img src={kv1} alt="banner" style={{width:'100%'}}></img>       
                        </td>
                        <td className='border-white border-2 bg-mainYellow relative'>
                            <div className='flex justify-center h-full p-3'>
                                <img src={kv6} alt="banner" className='w-auto'></img>
                                <img src={eyes1} alt="banner" className='absolute w-1/4' style={{right:'0px',bottom:'0px'}}></img>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className='table-auto'>
                <tbody>
                    <tr>
                        <td className='border-white border-2 bg-mainYellow' rowSpan={2}>
                            <div className='flex justify-center'>
                                <img src={kv7} alt="banner" className='flex'></img>
                            </div>
                        </td>
                        <td className='border-white text-left border-2 pl-1 lg:pl-3' colSpan={3}>
                            <span className='text-white font-bold text-xl md:text-3xl lg:text-6xl'>????????????</span>
                            <Typed
                                strings={['????????????']}
                                typeSpeed={500}
                                loop
                                className='text-black-bg text-xl font-bold tracking-wider md:text-3xl lg:text-6xl'
                                style={{textShadow:'white -1px 0px, white 1px 0px, white 0px 1px, white 0px -1px'}}
                            />
                        </td>
                        <td className='border-white border-2 z-100' rowSpan={2}>
                            <div className='flex justify-center'>
                                <img src={kv3} alt="banner" className=''></img>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='border-white border-b-2'>
                            <img src={kv4} alt="banner" className='animate-spin-slow'></img>   
                        </td>
                        <td className='border-white border-b-2'>
                            <img src={kv5} alt="banner" className=''></img>
                        </td>
                        <td className='bg-mainGreen text-white border-2 font-bold text-sm lg:text-5xl px-0 lg:px-12'>
                            HexSchool
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='flex w-full'>
                <div className='flex w-1/3 border-white border-2 bg-lightBlue px-auto py-1 md:py-2 justify-center'>
                    <span className='text-white text-xs md:text-4xl font-audiowide'>Total: </span>
                    <span className='bg-mainBlack text-mainYellow text-xs font-audiowide md:text-4xl ml-1 px-2'>1088</span>
                </div>
                <div className='flex w-1/3 border-white border-2 bg-lightBlue px-auto py-1 md:py-2 justify-center'>
                    <span className='text-white text-xs md:text-4xl font-audiowide'>Personal: </span>
                    <span className='bg-mainBlack text-mainYellow text-xs font-audiowide md:text-4xl ml-1 px-2'>376</span>
                </div>
                <div className='flex w-1/3 border-white border-2 bg-lightBlue px-auto py-1 md:py-2 justify-center'>
                    <span className='text-white text-xs font-audiowide md:text-4xl '>Personal: </span>
                    <span className='bg-mainBlack text-mainYellow text-xs font-audiowide md:text-4xl ml-1 px-2'>122</span>
                </div>
            </div>
            <div className='w-full border-white border-2 bg-lightBlue text-center py-1 md:py-3 text-base md:text-2xl text-white'>
                <span className=''>????????????</span>
                <span className='font-audiowide bg-black-0  mx-1 md:mx-4 px-3 md:px-6'>6</span>
                <span>???</span>
                <span className='font-audiowide bg-black-0  mx-1 md:mx-4 px-3 md:px-6'>8</span>
                <span>??????</span>
                <span className='font-audiowide bg-black-0  mx-1 md:mx-4 px-3 md:px-6'>0</span>
                <span>??????</span>
                <span className='font-audiowide bg-black-0  mx-1 md:mx-4 px-3 md:px-6'>{_timeleft}</span>
                <span>???</span>
            </div>
            <div className='text-center mt-12 text-white '>
                Scroll down
            </div>
            <div className='flex justify-center'>
                <img src={arrow} alt="scroll down"></img>
            </div>
        </div>
    )
}