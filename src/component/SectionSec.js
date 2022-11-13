// image
import title1 from '../image/section2/secTitle1.png'
import title1inside from '../image/section2/image-painpoint-1-inside.png'
import left1 from '../image/section2/title1imgLeft.png'
import right1 from '../image/section2/image-painpoint-2.png'
import err from '../image/section2/image-painpoint-2-inside.png'
import left2 from '../image/section2/image-painpoint-3.png'
import ques from '../image/section2/image-painpoint-3-inside.png'
// animation
import { Tween } from 'react-gsap'

export default function SectionSec(){

    return(
        <div className="py-12">
            <div className='flex justify-center mb-24 mx-6'>
                <Tween from={{opacity:0}}
                to={{opacity:1,
                    scrollTrigger:{
                    trigger:'.ani-fadeInUp',
                    start:'-400px center',
                    end:'100px center',
                    scrub:1,
                }}}
                >
                    <img src={title1} alt="你是否也有以下困擾？" className='ani-fadeInUp'></img>
                </Tween>
            </div>
            <div className='flex flex-col lg:flex-row items-center mb-16'>
                <Tween from={{opacity:0,y:100}}
                    to={{opacity:1,y:0,
                    scrollTrigger:{trigger:'.fade',start:'-100px center',end:'100px center',scrub:1}}}
                >
                    <img src={left1} alt="插圖" className='fade relative'></img>
                    <img src={title1inside} className='absolute' alt='插圖' style={{marginLeft:'20%',marginTop:'-10%'}}></img>
                </Tween>
                <Tween from={{opacity:0,x:100}} to={{opacity:1,x:0,scrollTrigger:{trigger:'.fade',start:'-100px center',end:'100px center',scrub:1}}}>
                    <div className='text-4xl lg:text-6xl text-lightBlue font-bold text-left tracking-wider leading-normal'>
                        羨慕別人的<br/>酷酷網頁動畫？</div>
                </Tween>
            </div>
            <div className='flex flex-col-reverse lg:flex-row items-center mb-16'>
                <Tween from={{opacity:0,x:-100}} to={{opacity:1,x:0,scrollTrigger:{trigger:'.fade-in',start:'-100px center',end:'100px center',scrub:1}}}>
                    <div className='text-4xl lg:text-6xl text-lightBlue font-bold text-right tracking-wider leading-normal fade-in'>
                        滿足不了<br/>同事的許願？</div>
                </Tween>
                <Tween from={{opacity:0,y:100}} to={{opacity:1,y:0, scrollTrigger:{trigger:'.fade-in',start:'-100px center',end:'100px center',scrub:1}}}>
                    <div className='relative fade-in'>
                        <img src={right1} alt="插圖" className='ani-fadeIn'></img>
                        <img src={err} className='absolute' alt='插圖' style={{top:'80px',left:'280px'}}></img>
                    </div>
                </Tween>
            </div>
            <div className='flex flex-col lg:flex-row items-center mb-16'>
                <Tween from={{opacity:0,y:100}} to={{opacity:1,y:0, scrollTrigger:{trigger:'.fade5',start:'-100px center',end:'100px center',scrub:1}}}>
                    <div className='relative fade5'>
                        <img src={left2} alt="插圖" className=''></img>
                        <img src={ques} className='absolute' alt='插圖' style={{top:'120px',left:'300px'}}></img>
                    </div>
                </Tween>
                <Tween from={{opacity:0,x:100}} to={{opacity:1,x:0,scrollTrigger:{trigger:'.fade6',start:'-100px center',end:'100px center',scrub:1}}}>
                    <div className='text-4xl lg:text-6xl text-lightBlue font-bold text-left tracking-wider leading-normal fade6'>
                        動畫技能樹太雜<br/>無從下手？</div>
                </Tween>
            </div>

        </div>
    )
}