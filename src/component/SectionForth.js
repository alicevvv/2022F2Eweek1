// image
import title from '../image/section4/title.png'
import card from '../image/section4/card.png'

export default function SectionForth(){
    return(
        <div className="flex flex-col items-center py-24">
            <img src={title} alt="年度最強合作，三大主題來襲" className='mb-8'></img>
            <div className='text-white opacity-30 font-bold text-2xl mb-8'>
            各路廠商強強聯手，共同設計出接地氣的網頁互動挑戰關卡
            </div>
            <div className='flex '>
                <img src={card} alt="關卡1" className='px-6'></img>
                <img src={card} alt="關卡2" className='px-6'></img>
                <img src={card} alt="關卡3" className='px-6'></img>
            </div>
        </div>
    )
}