// import React, { useContext } from 'react';
// import Navbar from './Navbar';
// import { useParams } from 'react-router-dom';
// import { albumsData, assets } from '../assets/assets';
// import { PlayerContext } from '../context/PlayerContext';

// const DisplayAlbum = () => {

//     const { id } = useParams();
//     const albumData = albumsData[id];
//     const { playWithId } = useContext(PlayerContext);
  
//     return (
//         <>
//             <Navbar /> 
//             <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
//                 <img className='w-48 rounded' src={albumData.image} alt='Album Art' />
//                 <div className='flex flex-col'>
//                     <p>Playlist</p>
//                     <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
//                     <h4>{albumData.desc}</h4>
//                 </div>
//             </div>
//             <div className='grid grid-cols-3 sm:grid-cols-3 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
//                 <p><b className='mr-4'>#</b>Title</p>
//                 <p>Artists</p>
//                 <div className='flex justify-center'>
//                     <img src={assets.clock_icon} className='w-6' alt='Clock Icon' />
//                 </div>
//             </div>
//             <hr />
//             {
//                 albumData.songs.map((item, index) => (
//                     <div onClick={() => playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-3 gap-2 p-2 text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer'>
//                         <p className='text-white'>
//                             <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
//                             {item.name}
//                         </p>
//                         <p className='text-[15px]'>{item.desc}</p>
//                         <p className='text-[15px] text-center'>{item.duration}</p>
//                     </div>
//                 ))
//             }
//         </>
//     );
// }

// export default DisplayAlbum;

import React, { useContext } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumData = albumsData[id];
    const { playWithId } = useContext(PlayerContext);

    return (
        <>
            <Navbar /> 
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumData.image} alt='Album Art' />
                <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                </div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p><b className='mr-4'>#</b>Title</p>
                <p className='hidden sm:block'>Artists</p>
                <div className='flex justify-center sm:justify-center md:justify-end'>
                    <img src={assets.clock_icon} className='w-6 mr-2.5' alt='Clock Icon' />
                </div>
            </div>
            <hr />
            {
                albumData.songs.map((item, index) => (
                    <div onClick={() => playWithId(item.id)} key={index} className='grid grid-cols-2 sm:grid-cols-3 gap-2 p-2 text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer'>
                        <div className='flex items-center text-white'>
                            <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                            <span>{item.name}</span>
                        </div>
                        <p className='text-[15px] hidden sm:block'>{item.desc}</p>
                        <p className='text-[15px] text-center sm:text-center md:text-right'>{item.duration}</p>
                    </div>
                ))
            }
        </>
    );
}

export default DisplayAlbum;













