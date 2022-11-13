// image
import title from '../image/section10/title.png'
import qaImg from '../image/section10/qaimg.png'
import qa from '../image/section10/qa.png'
import final from '../image/section10/final.png'
import star from '../image/section10/star.png'
// json
import { godsInfo } from '../json/godsInfo'

export default function SectionTen(){
    return(
        <div className="w-full flex flex-col items-center py-24">
            <div className='flex items-center justify-center w-3/5 relative py-12'>
                <img src={title} alt="常見問題" className='mb-6'></img>
                <img src={qaImg} className="hidden lg:flex absolute" style={{left:'0px'}}></img>
            </div>
            <img src={qa} className="mb-16"></img>
            <div className='flex flex-row justify-center w-full lg:w-4/5 mx-12 my-24'>
                <img src={final} className="w-1/2 lg:w-auto"></img>
                <div className='bg-white flex flex-col lg:flex-row justify-center items-center lg:justify-between w-1/2 lg:w-2/3 p-3 lg:p-8 '>
                    <div className='text-left'>
                        <div className='font-black text-xl lg:text-3xl'>最強練功修煉合作</div>
                        <div className='text-base lg:text-3xl'>together we can go far</div>
                    </div>
                    <img src={star} className='w-[44px] h-[44px] my-3'></img>
                    <button className='bg-mainYellow border-black-0 border-2 text-xl lg:text-2xl px-4 py-2'>註冊報名</button>
                </div>
            </div>
            <div className='text-center text-white'>Copyright © 2019 HexSchool.All rights reserved.</div>
        </div>
    )
}