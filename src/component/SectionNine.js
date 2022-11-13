// image
import title from '../image/section9/title.png'
import god1 from '../image/section9/god1.png'
import god2 from '../image/section9/god2.png'
import god3 from '../image/section9/god3.png'
import god4 from '../image/section9/god4.png'
import arrow from '../image/section9/arrow.png'
// json
import { godsInfo } from '../json/godsInfo'

export default function SectionNine(){
    return(
        <div className="w-full flex flex-col items-center py-24">
            <img src={title} alt="贊助單位" className='w-2/3 lg:w-1/4 mb-6'></img>
            <div className='w-full px-12 md:px-48 lg:px-80'>
                {
                    godsInfo.map((item,index)=>{
                        return(
                            <div className='flex w-full flex-col lg:flex-row py-6'>
                                <img src={item.godImage} alt={item.godName} className='flex-none mx-6 lg:mx-0'></img>
                                <div className='grow flex flex-col justify-between bg-white rounded-none lg:rounded-tr-[100px] pt-3'>
                                    <div className='bg-lightBlue w-1/3 lg:w-1/5 text-white mx-3 px-3'>免費公開場</div>
                                    <div className='justify-self-end'>
                                        <div className='text-left text-2xl lg:text-3xl font-black mx-3 mb-8'>{item.title}</div>
                                        <div className='text-left font-black mx-3 mb-3'>{item.time}</div>
                                        <div className='flex bg-black-0 font-black text-left border-white border-b-2 py-2 px-4'>
                                            <img src={arrow} alt="arrow.png" className='py-3 mr-3'></img><span className='text-mainYellow text-2xl'>{item.godName}</span>
                                        </div>
                                        <div className='bg-black-0 font-black text-left py-2 px-4'>
                                            <span className='text-white'>{item.godTitle}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}