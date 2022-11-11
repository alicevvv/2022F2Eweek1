import React,{ useState,useEffect, useRef, useLayoutEffect } from 'react'
// image
import kv1 from '../image/section1/KV-1.png'
// import kv2 from './image/section1/KV-2.png'
import kv6 from '../image/section1/KV-6.png'
import kv4 from '../image/section1/KV-4.png'
import kv3 from '../image/section1/KV-3.png'
import kv5 from '../image/section1/KV-5.png'
import kv7 from '../image/section1/KV-7.png'
import arrow from '../image/section1/scroll_down.png'
import { gsap } from 'gsap'

export default function SectionFirst(){
    // const [seconds,_setSconds] = useState(59)
    const root = useRef()
    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
            gsap.to(".box",{rotation:"+=360",repeat:2},root);
        })
        return () => ctx.revert();
    },[])

    return(
        <div className='flex flex-col py-3 md:py-16' style={{maxWidth:'1092px'}}>
            <table className='table-auto'>
                <tbody>
                    <tr>
                        <td className='border-white border-2'>
                            <img src={kv1} alt="banner" style={{width:'100%'}}></img>       
                        </td>
                        <td className='border-white border-2 bg-mainYellow'>
                            <div className='flex justify-center p-3'>
                                <img src={kv6} alt="banner" className='w-auto'></img>
                                {/* <img src={kv2} alt="banner" className='absolute mx-auto w-1/6 md:w-1/6' style={{right:'0px'}}></img> */}
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
                        <td className='border-white border-2 px-8' colSpan={3}>
                            <span className='text-white font-bold text-xl md:text-6xl'>互動式｜</span>
                            <span className='text-white text-xl md:text-6xl'>網頁設計</span>
                        </td>
                        <td className='border-white border-2' rowSpan={2}>
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
                        <td className='bg-mainGreen text-white border-2 font-bold text-sm md:text-5xl w-5/4 px-0 lg:px-12'>
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
                <span className=''>報名倒數</span>
                <span className='font-audiowide bg-black-0  mx-1 md:mx-4 px-3 md:px-6'>6</span>
                <span>天</span>
                <span className='font-audiowide bg-black-0  mx-1 md:mx-4 px-3 md:px-6'>8</span>
                <span>小時</span>
                <span className='font-audiowide bg-black-0  mx-1 md:mx-4 px-3 md:px-6'>0</span>
                <span>分鐘</span>
                <span className='font-audiowide bg-black-0  mx-1 md:mx-4 px-3 md:px-6'>59</span>
                <span>秒</span>
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