// image
import outside from '../image/section3/image-solution-outside.png'
import inside from '../image/section3/image-solution-inside.png'
import subtitle from '../image/section3/X.svg'
// animation
import { Tween } from 'react-gsap'

export default function SectionThird(){
    return(
        <div className="w-full flex flex-col items-center py-24">
            <Tween from={{opacity:0,scale:0.1,y:'50%'}} to={{opacity:1,scale:1,y:0, scrollTrigger:{trigger:'.fade1',start:'-300px center',end:'0px center',scrub:1}}}>
                <div className='fade1'>
                    <div className="text-white text-6xl lg:text-9xl text-center font-black tracking-wide">
                        TOGETHER</div>
                    <div className="text-white text-6xl lg:text-9xl text-center font-black tracking-wide">
                        WE CAN</div>
                    <div className="text-white text-6xl lg:text-9xl text-center font-black tracking-wide">
                        GO FAR</div>
                </div>
            </Tween>
            <div className='flex  mt-6 lg:mt-12'>
                <Tween from={{opacity:0,x:'-500px'}} to={{opacity:1,x:0, scrollTrigger:{trigger:'.fade3',start:'-400px center',end:'0px center',scrub:1}}}>
                    <div className='font-black text-5xl fade3'>UI設計師</div>
                </Tween>
                <img src={subtitle} alt="x" className='mx-6'></img>
                <Tween from={{opacity:0,x:'500px'}} to={{opacity:1,x:0, scrollTrigger:{trigger:'.fade4',start:'-400px center',end:'0px center',scrub:1}}}>
                    <div className='font-black text-5xl fade4'>前端工程師</div>
                </Tween>
            </div>
            <div className='relative flex justify-center'>
                <img src={outside} alt="插圖"></img>
                <Tween from={{y:'40px'}} to={{y:0, scrollTrigger:{trigger:'.fade2',start:'-200px center',end:'100px center',scrub:1}}}>
                    <img src={inside} alt="插圖" className='absolute w-5/12 lg:w-1/3 fade2' style={{marginLeft:'10%',marginTop:'15%'}}></img>
                </Tween>
            </div>
        </div>
    )
}