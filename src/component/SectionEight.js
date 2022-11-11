// image
import title from '../image/section8/title.png'
import unit1 from '../image/section8/unit1.png'
import unit2 from '../image/section8/unit2.png'
import unit3 from '../image/section8/unit3.png'

export default function SectionEight(){
    return(
        <div className="w-full flex flex-col items-center py-24">
            <img src={title} alt="贊助單位" className='w-2/3 lg:w-1/4 mb-6'></img>
            <div className='flex flex-col lg:flex-row'>
                <img src={unit1} alt="KDAN mobile" className='px-6'></img>
                <img src={unit2} alt="新加坡商 鈦坦科技" className='px-6'></img>
                <img src={unit3} alt="板塊設計" className='px-6'></img>
            </div>
        </div>
    )
}