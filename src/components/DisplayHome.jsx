import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem';

const DisplayHome = () => {
  // Define subsets of albumsData for different sections
  const hindiHits = albumsData.slice(0, 8); // First 3 albums for Hindi Hits
  const _90Hits = albumsData.slice(8, 16); // Next 3 albums for Kannada Hits
  const KannadaHits = albumsData.slice(16, 22);
  const ForU = albumsData.slice(21, 28);
  const Artists = albumsData.slice(28, 33); // Next 3 albums for Featured Charts

  return (
    <>
     <Navbar /> 
     <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Hindi Hits</h1>
        <div className='flex overflow-auto'>
        {hindiHits.map((item, index) => (
          <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
        ))}
        </div>
     </div>
     <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>90's Special</h1>
        <div className='flex overflow-auto'>
        {_90Hits.map((item, index) => (
          <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
        ))}
        </div>
     </div>
     <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Kannada Hits</h1>
        <div className='flex overflow-auto'>
        {KannadaHits.map((item, index) => (
          <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
        ))}
        </div>
     </div>
     <div className='mb-4'>
         <h1 className='my-5 font-bold text-2xl'>Just For You</h1>
         <div className='flex overflow-auto'>
         {ForU.map((item, index) => (
           <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
         ))}
         </div>
      </div>
      <div className='mb-4'>
         <h1 className='my-5 font-bold text-2xl'>Artists</h1>
         <div className='flex overflow-auto'>
         {Artists.map((item, index) => (
           <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
         ))}
         </div>
      </div>
    </>
  )
}

export default DisplayHome
