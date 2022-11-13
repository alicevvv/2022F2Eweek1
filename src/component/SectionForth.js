// image
import title from '../image/section4/title.png'

export default function SectionForth(){
    const cardData=[
        {
            "title":"關卡1",
            "image":require('../image/section4/card1.png')
        },{
            "title":"關卡2",
            "image":require('../image/section4/card2.png')
        },{
            "title":"關卡3",
            "image":require('../image/section4/card3.png')
        },
    ]
    return(
        <div className="flex flex-col items-center py-24">
            <img src={title} alt="年度最強合作，三大主題來襲" className='mb-8'></img>
            <div className='text-white opacity-30 font-bold text-2xl mb-8'>
            各路廠商強強聯手，共同設計出接地氣的網頁互動挑戰關卡
            </div>
            <div className='flex flex-col lg:flex-row'>
                {
                    cardData.map((item,index)=>{
                        return(
                            <div className='relative' key={index}>
                                <img src={item.image} alt="item.title" className='px-6 mt-3 hover:mt-0 hover:drop-shadow-[0px_4px_28px_rgba(255,255,255,0.55)]'></img>
                                <div className='absolute' style={{right:'80px', bottom:'24px'}}>
                                    <span className='border-white font-extrabold border-b-4 mr-3'>
                                    關卡細節
                                    </span>
                                    <span>→</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}