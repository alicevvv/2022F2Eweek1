// image
import title from '../image/section6/title.png'
import cha1 from '../image/section6/challenge1.png'
import cha2 from '../image/section6/challenge2.png'
import cha3 from '../image/section6/challenge3.png'

export default function SectionSix(){
    return(
        <div className='w-full flex flex-col items-center py-24'>
            <img src={title} alt="挑戰流程" className='mb-24'></img>
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4 px-6 lg:px-48 mb-24 lg:mb-36'>
                <div className='text-center lg:text-left'>
                    <div className='text-white text-7xl font-bold mb-6'>每週一</div>
                    <div className='text-white text-3xl font-bold mb-12 tracking-wider'>中午 12:00</div>
                    <div className='text-mainYellow text-4xl font-bold mb-6 lg:mb-24 tracking-wider'>獲得新主題</div>
                    <div className='text-white text-lg mb-3'>挑戰人員</div>
                    <div className='flex justify-center lg:justify-start'>
                        <div className='text-white text-lg border-white border-2 rounded-full px-3 py-2 mr-3'>UI 設計師</div>
                        <div className='text-white text-lg border-white border-2 rounded-full px-3 py-2'>團體組</div>
                    </div>
                </div>
                <div className='flex items-end py-12 lg:py-0'>
                    <img src={cha1} alt="圖片" className='w-full px-8 lg:px-0'></img>
                </div>
                <div className='hidden lg:flex flex-col justify-end '>
                    <div className='text-mainYellow text-left border-white border-2 px-6 py-3 mb-3'>
                        每個挑戰主題提供 <b>一週開發時間</b><br/>
                        未在<b> 各週一中午 12:00 </b>前登陸作品者
                        當週即為挑戰失敗！
                    </div>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4 px-6 lg:px-48 mb-24'>
                <div className='text-center lg:text-left'>
                    <div className='text-white text-7xl font-bold mb-6'>隔週一</div>
                    <div className='text-white text-3xl font-bold mb-12 tracking-wider'>中午 12:00</div>
                    <div className='text-mainYellow text-4xl font-bold mb-6 lg:mb-24 tracking-wider'>UI組、團體組登陸 UI作品;<br/>前端組認領設計稿</div>
                    <div className='text-white text-lg mb-3'>挑戰人員</div>
                    <div className='flex justify-center lg:justify-start'>
                        <div className='text-white text-lg border-white border-2 rounded-full px-3 py-2 mr-3'>
                            UI 設計師</div>
                        <div className='text-white text-lg border-white border-2 rounded-full px-3 py-2 mr-3'>
                            前端工程師</div>
                        <div className='text-white text-lg border-white border-2 rounded-full px-3 py-2'>
                            團體組</div>
                    </div>
                </div>
                <div className='flex items-end py-12 lg:py-0'>
                    <img src={cha1} alt="圖片" className='w-full px-8 lg:px-0'></img>
                </div>
                <div className='hidden lg:flex flex-col justify-end'>
                    <div className='text-mainYellow text-left border-white border-2 px-6 py-3 mb-3'>
                        每個挑戰主題提供 <b>一週開發時間</b><br/>
                        未在<b> 各週一中午 12:00 </b>前登陸作品者
                        當週即為挑戰失敗！
                    </div>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4 px-6 lg:px-48 mb-24'>
                <div className='text-center lg:text-left'>
                    <div className='text-white text-7xl font-bold mb-6'>再隔週一</div>
                    <div className='text-white text-3xl font-bold mb-12 tracking-wider'>中午 12:00</div>
                    <div className='text-mainYellow text-4xl font-bold mb-6 lg:mb-24 tracking-wider'>前端組、團體組登陸作品</div>
                    <div className='text-white text-lg mb-3'>挑戰人員</div>
                    <div className='flex justify-center lg:justify-start'>
                        <div className='text-white text-lg border-white border-2 rounded-full px-3 py-2 mr-3'>前端工程師</div>
                        <div className='text-white text-lg border-white border-2 rounded-full px-3 py-2'>團體組</div>
                    </div>
                </div>
                <div className='flex items-end py-12 lg:py-0'>
                    <img src={cha1} alt="圖片" className='w-full px-8 lg:px-0'></img>
                </div>
                <div className='flex flex-col justify-end'>
                    <div className='text-mainYellow text-left border-white border-2 px-6 py-3 mb-3'>
                        每個挑戰主題提供 <b>一週開發時間</b><br/>
                        未在<b> 各週一中午 12:00 </b>前登陸作品者
                        當週即為挑戰失敗！
                    </div>
                </div>
            </div>
        </div>
    )
}