// image
import title1 from '../image/section2/secTitle1.png'
import title1inside from '../image/section2/image-painpoint-1-inside.png'
import left1 from '../image/section2/title1imgLeft.png'
import right1 from '../image/section2/image-painpoint-2.png'
import err from '../image/section2/image-painpoint-2-inside.png'
import left2 from '../image/section2/image-painpoint-3.png'
import ques from '../image/section2/image-painpoint-3-inside.png'

export default function SectionSec(){
    return(
        <div className="py-12">
            <div className='flex justify-center mb-24 mx-6'>
                <img src={title1} alt="你是否也有以下困擾？"></img>
            </div>
            <div className='flex flex-col lg:flex-row items-center mb-16'>
                <img src={left1} alt="插圖"></img>
                <img src={title1inside} className='absolute' alt='插圖' style={{marginLeft:'20%',marginTop:'-10%'}}></img>
                <div className='text-4xl lg:text-6xl text-lightBlue font-bold text-left tracking-wider leading-normal'>
                    羨慕別人的<br/>酷酷網頁動畫？</div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row items-center mb-16'>
                <div className='text-4xl lg:text-6xl text-lightBlue font-bold text-right tracking-wider leading-normal'>
                    滿足不了<br/>同事的許願？</div>
                <div className='relative'>
                    <img src={right1} alt="插圖"></img>
                    <img src={err} className='absolute' alt='插圖' style={{top:'80px',left:'280px'}}></img>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center mb-16'>
                <div className='relative'>
                    <img src={left2} alt="插圖" className=''></img>
                    <img src={ques} className='absolute' alt='插圖' style={{top:'120px',left:'300px'}}></img>
                </div>
                <div className='text-4xl lg:text-6xl text-lightBlue font-bold text-left tracking-wider leading-normal'>
                    動畫技能樹太雜<br/>無從下手？</div>
            </div>

        </div>
    )
}