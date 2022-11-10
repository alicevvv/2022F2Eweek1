// image
import title from '../image/section5/title.png'
import decrib1 from '../image/section5/des1.png'
import decrib2 from '../image/section5/des2.png'
import decrib3 from '../image/section5/des3.png'
import time from '../image/section5/time.png'

export default function SectionFive(){
    return(
        <div className='w-full flex flex-col items-center py-24'>
            <img src={title} alt="活動說明"></img>
            <div className='flex py-12'>
                <img src={decrib1} alt="報名時間" className='px-4'></img>
                <img src={decrib2} alt="登陸作品" className='px-4'></img>
                <img src={decrib3} alt="額外競賽" className='px-4'></img>
            </div>
            <img src={time} alt="開賽時間"></img>
        </div>
    )
}