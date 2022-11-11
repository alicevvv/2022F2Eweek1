// image
import standard from '../image/section7/standard.png'
import award from '../image/section7/award.png'

export default function SectionSeven(){
    return(
        <div className="w-full flex flex-col items-center py-16">
            <div className="text-black-0 text-base opacity-30 mb-2">
                區區修煉已經無法滿足了嗎？</div>
            <div className="text-black-0 text-3xl tracking-widest font-bold mb-12">還有比賽等著你！</div>
            <img src={standard} alt="評審機制" className='mb-12 px-6'></img>
            <img src={award} alt="獎項" className='mb-6 px-6'></img>
            <div className='text-base text-black-0 tracking-wider font-bold'>以上皆提供完賽數位獎狀</div>
        </div>
    )
}