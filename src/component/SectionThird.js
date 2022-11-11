// image
import outside from '../image/section3/image-solution-outside.png'
import inside from '../image/section3/image-solution-inside.png'
import title from '../image/section3/title.svg'

export default function SectionThird(){
    return(
        <div className="w-full flex flex-col items-center py-24">
            <div className="text-white text-6xl lg:text-9xl text-center font-black tracking-wide">
                TOGETHER</div>
            <div className="text-white text-6xl lg:text-9xl text-center font-black tracking-wide">
                WE CAN</div>
            <div className="text-white text-6xl lg:text-9xl text-center font-black tracking-wide">
                GO FAR</div>
            <img src={title} alt="UI設計師與前端工程師" className='w-1/2 lg:w-2/5 mt-6 lg:mt-12'></img>
            <div className='relative flex justify-center'>
                <img src={outside} alt="插圖"></img>
                <img src={inside} alt="插圖" className='absolute w-5/12 lg:w-1/3' style={{marginLeft:'10%',marginTop:'15%'}}></img>
            </div>
        </div>
    )
}