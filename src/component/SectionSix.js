// image
import title from '../image/section6/title.png'
// json
import { agendaData } from '../json/agendaData'
// animation
import { Tween } from 'react-gsap'

export default function SectionSix(){
    
    return(
        <div className='w-full flex flex-col items-center py-24'>
            <img src={title} alt="挑戰流程" className='mb-24'></img>
            {
                agendaData.map((item,index)=>{
                    return(
                        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4 px-6 lg:px-48 mb-24 lg:mb-36' key={index}>
                            <Tween from={{opacity:0,y:-100}} to={{opacity:1,y:0,scrollTrigger:{trigger:'.fade',start:'-100px center',end:'100px center',scrub:1,markers:true}}}>
                                <div className='text-center lg:text-left fade'>
                                    <div className='text-white text-7xl font-bold mb-6'>{item.mainTitle}</div>
                                    <div className='text-white text-3xl font-bold mb-12 tracking-wider'>{item.time}</div>
                                    <div className='text-mainYellow text-4xl font-bold mb-6 lg:mb-24 tracking-wider'>{item.goal}</div>
                                    <div className='text-white text-lg mb-3'>挑戰人員</div>
                                    <div className='flex justify-center lg:justify-start'>
                                        {
                                            item.person.map((item,index)=>{
                                                return(
                                                    <div className='text-white text-lg border-white border-2 rounded-full px-3 py-2 mr-3' key={index}>
                                                        {item.name}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </Tween>
                            <div className='flex items-end py-12 lg:py-0'>
                                <img src={item.image} alt="圖片" className='w-full px-8 lg:px-0'></img>
                            </div>
                            <div className='hidden lg:flex flex-col justify-end'>
                                <div className='text-white text-left border-mainYellow border-2 px-6 py-3 mb-3'>
                                    <span dangerouslySetInnerHTML={{ __html:item.note}}></span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className='flex lg:hidden flex-col justify-end'>
                <div className='text-white text-left border-mainYellow border-2 px-6 py-3 mb-3'>
                每個挑戰主題提供 <b>一週開發時間</b><br/>
                未在<b> 各週一中午 12:00 </b>前登陸作品者
                當週即為挑戰失敗！
                </div>
            </div>
        </div>
    )
}