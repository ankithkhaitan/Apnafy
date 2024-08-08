// import { createContext, useEffect, useRef, useState } from "react";
// import { albumsData } from "../assets/assets";

// export const PlayerContext = createContext();

// const PlayerContextProvider = (props) => {

//     const audioRef = useRef();
//     const seekBg = useRef();
//     const seekBar = useRef();

//     const [currentAlbumId, setCurrentAlbumId] = useState(0);
//     const [currentSongIndex, setCurrentSongIndex] = useState(0);
//     const [track, setTrack] = useState(albumsData[0].songs[0]);
//     const [playStatus, setPlayStatus] = useState(false);
//     const [time, setTime] = useState({
//         currentTime: {
//             second: 0,
//             minute: 0
//         },
//         totalTime: {
//             second: 0,
//             minute: 0
//         }
//     });

//     const play = () => {
//         audioRef.current.play();
//         setPlayStatus(true);
//     }

//     const pause = () => {
//         audioRef.current.pause();
//         setPlayStatus(false);
//     }

//     const playWithId = async (id) => {
//         let song = null;
//         let albumId = null;

//         for (const album of albumsData) {
//             song = album.songs.find(s => s.id === id);
//             if (song) {
//                 albumId = album.id;
//                 break;
//             }
//         }

//         if (song) {
//             await setTrack(song);
//             setCurrentAlbumId(albumId);
//             setCurrentSongIndex(albumsData[albumId].songs.indexOf(song));
//             audioRef.current.load();
//             audioRef.current.play();
//             setPlayStatus(true);
//         }
//     }

//     const previous = async () => {
//         const currentAlbum = albumsData[currentAlbumId];
//         if (currentSongIndex > 0) {
//             const newSongIndex = currentSongIndex - 1;
//             const newTrack = currentAlbum.songs[newSongIndex];
//             await setTrack(newTrack);
//             setCurrentSongIndex(newSongIndex);
//             audioRef.current.load();
//             audioRef.current.play();
//             setPlayStatus(true);
//         } else if (currentAlbumId > 0) {
//             const newAlbumId = currentAlbumId - 1;
//             const newAlbum = albumsData[newAlbumId];
//             const newSongIndex = newAlbum.songs.length - 1;
//             const newTrack = newAlbum.songs[newSongIndex];
//             await setTrack(newTrack);
//             setCurrentAlbumId(newAlbumId);
//             setCurrentSongIndex(newSongIndex);
//             audioRef.current.load();
//             audioRef.current.play();
//             setPlayStatus(true);
//         }
//     }

//     const next = async () => {
//         const currentAlbum = albumsData[currentAlbumId];
//         if (currentSongIndex < currentAlbum.songs.length - 1) {
//             // Play the next song in the current album
//             const newSongIndex = currentSongIndex + 1;
//             const newTrack = currentAlbum.songs[newSongIndex];
//             await setTrack(newTrack);
//             setCurrentSongIndex(newSongIndex);
//             audioRef.current.load();
//             audioRef.current.play();
//             setPlayStatus(true);
//         } else if (currentAlbumId < albumsData.length - 1) {
//             // Move to the first song of the next album
//             const newAlbumId = currentAlbumId + 1;
//             const newAlbum = albumsData[newAlbumId];
//             const newTrack = newAlbum.songs[0];
//             await setTrack(newTrack);
//             setCurrentAlbumId(newAlbumId);
//             setCurrentSongIndex(0);
//             audioRef.current.load();
//             audioRef.current.play();
//             setPlayStatus(true);
//         } else {
//             // Handle the case where the current song is the last song of the last album
//             const newAlbumId = 0; // Loop back to the first album
//             const newSongIndex = 0; // Loop back to the first song
//             const newAlbum = albumsData[newAlbumId];
//             const newTrack = newAlbum.songs[newSongIndex];
//             await setTrack(newTrack);
//             setCurrentAlbumId(newAlbumId);
//             setCurrentSongIndex(newSongIndex);
//             audioRef.current.load();
//             audioRef.current.play();
//             setPlayStatus(true);
//         }
//     }

//     const seekSong = async (e) => {
//         audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
//     }

//     useEffect(() => {
//         const handleTimeUpdate = () => {
//             seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
//             setTime({
//                 currentTime: {
//                     second: Math.floor(audioRef.current.currentTime % 60),
//                     minute: Math.floor(audioRef.current.currentTime / 60)
//                 },
//                 totalTime: {
//                     second: Math.floor(audioRef.current.duration % 60),
//                     minute: Math.floor(audioRef.current.duration / 60)
//                 }
//             });
//         };

//         const handleEnded = () => {
//             next();
//         };

//         audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
//         audioRef.current.addEventListener('ended', handleEnded);

//         return () => {
//             audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
//             audioRef.current.removeEventListener('ended', handleEnded);
//         };
//     }, [next]);

//     useEffect(() => {
//         if (playStatus) {
//             audioRef.current.play();
//         } else {
//             audioRef.current.pause();
//         }
//     }, [track]);

//     const contextValue = { audioRef, seekBar, seekBg, track, setTrack, playStatus, setPlayStatus, time, setTime, play, pause, playWithId, previous, next, seekSong };

//     return (
//         <PlayerContext.Provider value={contextValue}>
//             {props.children}
//         </PlayerContext.Provider>
//     );
// }

// export default PlayerContextProvider;

//import { createContext, useEffect, useRef, useState } from "react";
//import { albumsData } from "../assets/assets";
//
//export const PlayerContext = createContext();
//
//const PlayerContextProvider = (props) => {
//
//    const audioRef = useRef();
//    const seekBg = useRef();
//    const seekBar = useRef();
//
//    const [currentAlbumId, setCurrentAlbumId] = useState(0);
//    const [currentSongIndex, setCurrentSongIndex] = useState(0);
//    const [track, setTrack] = useState(albumsData[0].songs[0]);
//    const [playStatus, setPlayStatus] = useState(false);
//    const [time, setTime] = useState({
//        currentTime: {
//            second: 0,
//            minute: 0
//        },
//        totalTime: {
//            second: 0,
//            minute: 0
//        }
//    });
//
//    const play = () => {
//        audioRef.current.play();
//        setPlayStatus(true);
//    }
//
//    const pause = () => {
//        audioRef.current.pause();
//        setPlayStatus(false);
//    }
//
//    const playWithId = async (id) => {
//        let song = null;
//        let albumId = null;
//
//        for (const album of albumsData) {
//            song = album.songs.find(s => s.id === id);
//            if (song) {
//                albumId = album.id;
//                break;
//            }
//        }
//
//        if (song) {
//            await setTrack(song);
//            setCurrentAlbumId(albumId);
//            setCurrentSongIndex(albumsData[albumId].songs.indexOf(song));
//            audioRef.current.load();
//            audioRef.current.play();
//            setPlayStatus(true);
//        }
//    }
//
//    const previous = async () => {
//        const currentAlbum = albumsData[currentAlbumId];
//        if (currentSongIndex > 0) {
//            const newSongIndex = currentSongIndex - 1;
//            const newTrack = currentAlbum.songs[newSongIndex];
//            await setTrack(newTrack);
//            setCurrentSongIndex(newSongIndex);
//            audioRef.current.load();
//            audioRef.current.play();
//            setPlayStatus(true);
//        } else if (currentAlbumId > 0) {
//            const newAlbumId = currentAlbumId - 1;
//            const newAlbum = albumsData[newAlbumId];
//            const newSongIndex = newAlbum.songs.length - 1;
//            const newTrack = newAlbum.songs[newSongIndex];
//            await setTrack(newTrack);
//            setCurrentAlbumId(newAlbumId);
//            setCurrentSongIndex(newSongIndex);
//            audioRef.current.load();
//            audioRef.current.play();
//            setPlayStatus(true);
//        }
//    }
//
//    const next = async () => {
//        const currentAlbum = albumsData[currentAlbumId];
//        if (currentSongIndex < currentAlbum.songs.length - 1) {
//            // Play the next song in the current album
//            const newSongIndex = currentSongIndex + 1;
//            const newTrack = currentAlbum.songs[newSongIndex];
//            await setTrack(newTrack);
//            setCurrentSongIndex(newSongIndex);
//            audioRef.current.load();
//            audioRef.current.play();
//            setPlayStatus(true);
//        } else if (currentAlbumId < albumsData.length - 1) {
//            // Move to the first song of the next album
//            const newAlbumId = currentAlbumId + 1;
//            const newAlbum = albumsData[newAlbumId];
//            const newTrack = newAlbum.songs[0];
//            await setTrack(newTrack);
//            setCurrentAlbumId(newAlbumId);
//            setCurrentSongIndex(0);
//            audioRef.current.load();
//            audioRef.current.play();
//            setPlayStatus(true);
//        } else {
//            // Handle the case where the current song is the last song of the last album
//            const newAlbumId = 0; // Loop back to the first album
//            const newSongIndex = 0; // Loop back to the first song
//            const newAlbum = albumsData[newAlbumId];
//            const newTrack = newAlbum.songs[newSongIndex];
//            await setTrack(newTrack);
//            setCurrentAlbumId(newAlbumId);
//            setCurrentSongIndex(newSongIndex);
//            audioRef.current.load();
//            audioRef.current.play();
//            setPlayStatus(true);
//        }
//    }
//
//    const seekSong = async (e) => {
//        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
//    }
//
//    useEffect(() => {
//        const handleTimeUpdate = () => {
//            seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
//            setTime({
//                currentTime: {
//                    second: Math.floor(audioRef.current.currentTime % 60),
//                    minute: Math.floor(audioRef.current.currentTime / 60)
//                },
//                totalTime: {
//                    second: Math.floor(audioRef.current.duration % 60),
//                    minute: Math.floor(audioRef.current.duration / 60)
//                }
//            });
//        };
//
//        const handleEnded = () => {
//            next();
//        };
//
//        audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
//        audioRef.current.addEventListener('ended', handleEnded);
//
//        return () => {
//            audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
//            audioRef.current.removeEventListener('ended', handleEnded);
//        };
//    }, [next]);
//
//    useEffect(() => {
//        if (playStatus) {
//            audioRef.current.play();
//        } else {
//            audioRef.current.pause();
//        }
//    }, [track]);
//
//    useEffect(() => {
//        const handleKeydown = (e) => {
//            if (e.code === 'Space') {
//                e.preventDefault();
//                if (playStatus) {
//                    pause();
//                } else {
//                    play();
//                }
//            } else if (e.code === 'ArrowLeft') {
//                e.preventDefault();
//                previous();
//            } else if (e.code === 'ArrowRight') {
//                e.preventDefault();
//                next();
//            }
//        };
//
//        window.addEventListener('keydown', handleKeydown);
//
//        return () => {
//            window.removeEventListener('keydown', handleKeydown);
//        };
//    }, [playStatus, previous, next]);
//
//    const contextValue = { audioRef, seekBar, seekBg, track, setTrack, playStatus, setPlayStatus, time, setTime, play, pause, playWithId, previous, next, seekSong };
//
//    return (
//        <PlayerContext.Provider value={contextValue}>
//            {props.children}
//        </PlayerContext.Provider>
//    );
//}
//
//export default PlayerContextProvier

import { createContext, useEffect, useRef, useState } from "react";
import { albumsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [currentAlbumId, setCurrentAlbumId] = useState(0);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [track, setTrack] = useState(albumsData[0].songs[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [loopStatus, setLoopStatus] = useState(false); // New state for loop status
    const [shuffleStatus, setShuffleStatus] = useState(false); // New state for shuffle status
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    });

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const toggleLoop = () => {
        setLoopStatus(prev => !prev);
    }

    const toggleShuffle = () => {
        setShuffleStatus(prev => !prev);
    }

    useEffect(() => {
        audioRef.current.loop = loopStatus;
    }, [loopStatus]);

    const playWithId = async (id) => {
        let song = null;
        let albumId = null;

        for (const album of albumsData) {
            song = album.songs.find(s => s.id === id);
            if (song) {
                albumId = album.id;
                break;
            }
        }

        if (song) {
            await setTrack(song);
            setCurrentAlbumId(albumId);
            setCurrentSongIndex(albumsData[albumId].songs.indexOf(song));
            audioRef.current.load();
            audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const previous = async () => {
        const currentAlbum = albumsData[currentAlbumId];
        if (currentSongIndex > 0) {
            const newSongIndex = currentSongIndex - 1;
            const newTrack = currentAlbum.songs[newSongIndex];
            await setTrack(newTrack);
            setCurrentSongIndex(newSongIndex);
            audioRef.current.load();
            audioRef.current.play();
            setPlayStatus(true);
        } else if (currentAlbumId > 0) {
            const newAlbumId = currentAlbumId - 1;
            const newAlbum = albumsData[newAlbumId];
            const newSongIndex = newAlbum.songs.length - 1;
            const newTrack = newAlbum.songs[newSongIndex];
            await setTrack(newTrack);
            setCurrentAlbumId(newAlbumId);
            setCurrentSongIndex(newSongIndex);
            audioRef.current.load();
            audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const getNextRandomSong = () => {
        const allSongs = albumsData.flatMap(album => album.songs);
        const randomIndex = Math.floor(Math.random() * allSongs.length);
        return allSongs[randomIndex];
    }

    const next = async () => {
        if (shuffleStatus) {
            const randomSong = getNextRandomSong();
            const albumId = albumsData.findIndex(album => album.songs.includes(randomSong));
            await setTrack(randomSong);
            setCurrentAlbumId(albumId);
            setCurrentSongIndex(albumsData[albumId].songs.indexOf(randomSong));
            audioRef.current.load();
            audioRef.current.play();
            setPlayStatus(true);
        } else {
            const currentAlbum = albumsData[currentAlbumId];
            if (currentSongIndex < currentAlbum.songs.length - 1) {
                // Play the next song in the current album
                const newSongIndex = currentSongIndex + 1;
                const newTrack = currentAlbum.songs[newSongIndex];
                await setTrack(newTrack);
                setCurrentSongIndex(newSongIndex);
                audioRef.current.load();
                audioRef.current.play();
                setPlayStatus(true);
            } else if (currentAlbumId < albumsData.length - 1) {
                // Move to the first song of the next album
                const newAlbumId = currentAlbumId + 1;
                const newAlbum = albumsData[newAlbumId];
                const newTrack = newAlbum.songs[0];
                await setTrack(newTrack);
                setCurrentAlbumId(newAlbumId);
                setCurrentSongIndex(0);
                audioRef.current.load();
                audioRef.current.play();
                setPlayStatus(true);
            } else {
                // Handle the case where the current song is the last song of the last album
                const newAlbumId = 0; // Loop back to the first album
                const newSongIndex = 0; // Loop back to the first song
                const newAlbum = albumsData[newAlbumId];
                const newTrack = newAlbum.songs[newSongIndex];
                await setTrack(newTrack);
                setCurrentAlbumId(newAlbumId);
                setCurrentSongIndex(newSongIndex);
                audioRef.current.load();
                audioRef.current.play();
                setPlayStatus(true);
            }
        }
    }

    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
    }

    useEffect(() => {
        const handleTimeUpdate = () => {
            seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
            setTime({
                currentTime: {
                    second: Math.floor(audioRef.current.currentTime % 60),
                    minute: Math.floor(audioRef.current.currentTime / 60)
                },
                totalTime: {
                    second: Math.floor(audioRef.current.duration % 60),
                    minute: Math.floor(audioRef.current.duration / 60)
                }
            });
        };

        const handleEnded = () => {
            if (!loopStatus) {
                next();
            }
        };

        audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.addEventListener('ended', handleEnded);

        return () => {
            audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            audioRef.current.removeEventListener('ended', handleEnded);
        };
    }, [next, loopStatus]);

    useEffect(() => {
        if (playStatus) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [track]);

    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                if (playStatus) {
                    pause();
                } else {
                    play();
                }
            } else if (e.code === 'ArrowLeft') {
                e.preventDefault();
                previous();
            } else if (e.code === 'ArrowRight') {
                e.preventDefault();
                next();
            }
        };

        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, [playStatus, previous, next]);

    const contextValue = { 
        audioRef, 
        seekBar, 
        seekBg, 
        track, 
        setTrack, 
        playStatus, 
        setPlayStatus, 
        time, 
        setTime, 
        play, 
        pause, 
        playWithId, 
        previous, 
        next, 
        seekSong, 
        loopStatus, 
        toggleLoop,
        shuffleStatus,
        toggleShuffle 
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
}

export default PlayerContextProvider;
