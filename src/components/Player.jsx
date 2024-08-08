//import { useContext } from 'react';
//import { assets } from '../assets/assets';
//import { PlayerContext } from '../context/PlayerContext';
//
//const Player = () => {
//  const { seekBar, seekBg, playStatus, play, pause, track, time, previous, next, seekSong } = useContext(PlayerContext);
//
//  return (
//    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
//      <div className='hidden lg:flex items-center gap-4'>
//        <img src={track.image} alt='' className='w-12'/>
//        <div>
//            <p>{track.name}</p>
//            <p>{track.desc}</p>
//        </div>
//      </div>
//      <div className='flex flex-col items-center gap-1 m-auto'>
//        <div className='flex gap-4'>
//            <img className='icon w-6 md:w-4 cursor-pointer' src={assets.shuffle_icon} alt=''/>
//            <img onClick={previous} className='icon w-6 md:w-4 cursor-pointer' src={assets.prev_icon} alt=''/>
//            {playStatus 
//                ? <img onClick={pause} className='icon w-6 md:w-4 cursor-pointer' src={assets.pause_icon} alt=''/>
//                : <img onClick={play} className='icon w-6 md:w-4 cursor-pointer' src={assets.play_icon} alt=''/>
//            }
//            <img onClick={next} className='icon w-6 md:w-4 cursor-pointer' src={assets.next_icon} alt=''/>
//            <img className='icon w-6 md:w-4 cursor-pointer' src={assets.loop_icon} alt=''/>
//        </div>
//        <div className='flex items-center gap-2 md:gap-5'>
//            <p className='text-xs md:text-base'>{time.currentTime.minute}:{time.currentTime.second}</p>
//            <div ref={seekBg} onClick={seekSong} className='w-[80vw] md:w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
//                <hr ref={seekBar} className='h-1 border-none w-0 bg-green-600 rounded-full'/>
//            </div>
//            <p className='text-xs md:text-base'>{time.totalTime.minute}:{time.totalTime.second}</p>
//        </div>
//      </div>
//      {/* <div className='hidden lg:flex items-center gap-2 opacity-75'> */}
//        {/* <img src={assets.plays_icon} className='w-4' alt=''/> */}
//        {/* <img src={assets.mic_icon} className='w-4' alt=''/> */}
//        {/* <img src={assets.queue_icon} className='w-4' alt=''/> */}
//        {/* <img src={assets.speaker_icon} className='w-4' alt=''/> */}
//        {/* <img src={assets.volume_icon} className='w-4' alt=''/> */}
//        {/* <div className='w-20 bg-slate-50 h-1 rounded'> */}
//{/*              */}
//        {/* </div> */}
//        {/* <img src={assets.mini_player_icon} className='w-4' alt=''/> */}
//        {/* <img src={assets.zoom_icon} className='w-4' alt=''/> */}
//      {/* </div> */}
//    </div>
//  )
//}
//
//export default Player;

import { useContext } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
  const { seekBar, seekBg, playStatus, play, pause, track, time, previous, next, seekSong, loopStatus, toggleLoop, shuffleStatus, toggleShuffle } = useContext(PlayerContext);

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img src={track.image} alt='' className='w-12'/>
        <div>
            <p>{track.name}</p>
            <p>{track.desc}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
            <img onClick={toggleShuffle} className={`icon w-6 md:w-4 cursor-pointer ${shuffleStatus ? 'opacity-100' : 'opacity-50'}`} src={assets.shuffle_icon} alt=''/>
            <img onClick={previous} className='icon w-6 md:w-4 cursor-pointer' src={assets.prev_icon} alt=''/>
            {playStatus 
                ? <img onClick={pause} className='icon w-6 md:w-4 cursor-pointer' src={assets.pause_icon} alt=''/>
                : <img onClick={play} className='icon w-6 md:w-4 cursor-pointer' src={assets.play_icon} alt=''/>
            }
            <img onClick={next} className='icon w-6 md:w-4 cursor-pointer' src={assets.next_icon} alt=''/>
            <img onClick={toggleLoop} className={`icon w-6 md:w-4 cursor-pointer ${loopStatus ? 'opacity-100' : 'opacity-50'}`} src={assets.loop_icon} alt=''/>
        </div>
        <div className='flex items-center gap-2 md:gap-5'>
            <p className='text-xs md:text-base'>{time.currentTime.minute}:{time.currentTime.second}</p>
            <div ref={seekBg} onClick={seekSong} className='w-[80vw] md:w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                <hr ref={seekBar} className='h-1 border-none w-0 bg-green-600 rounded-full'/>
            </div>
            <p className='text-xs md:text-base'>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      {/* <div className='hidden lg:flex items-center gap-2 opacity-75'> */}
        {/* <img src={assets.plays_icon} className='w-4' alt=''/> */}
        {/* <img src={assets.mic_icon} className='w-4' alt=''/> */}
        {/* <img src={assets.queue_icon} className='w-4' alt=''/> */}
        {/* <img src={assets.speaker_icon} className='w-4' alt=''/> */}
        {/* <img src={assets.volume_icon} className='w-4' alt=''/> */}
        {/* <div className='w-20 bg-slate-50 h-1 rounded'> */}
{/*              */}
        {/* </div> */}
        {/* <img src={assets.mini_player_icon} className='w-4' alt=''/> */}
        {/* <img src={assets.zoom_icon} className='w-4' alt=''/> */}
      {/* </div> */}
    </div>
  )
}

export default Player;
