import React, { useState, useRef } from 'react';
import Snowfall from './components/Snowfall';
import ChristmasScene from './components/ChristmasScene';
import WishGenerator from './components/WishGenerator';
import { Volume2, VolumeX, Star } from 'lucide-react';

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Lỗi phát nhạc:", error);
          // Tự động tắt trạng thái playing nếu trình duyệt chặn autoplay
          setIsPlaying(false);
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen relative w-full overflow-x-hidden text-white bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#312e81]">
      {/* Snow Effect Layer */}
      <Snowfall />

      {/* Audio Element with Multiple Sources for Compatibility */}
      <audio ref={audioRef} loop preload="auto">
        <source src="https://ia800302.us.archive.org/16/items/JingleBells_773/Jingle%20Bells.mp3" type="audio/mpeg" />
        <source src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Jingle_Bells_-_Kevin_MacLeod.ogg" type="audio/ogg" />
      </audio>

      {/* Header/Nav */}
      <nav className="fixed top-0 w-full z-40 p-4 md:p-6 flex justify-between items-center backdrop-blur-[2px]">
        <div className="flex items-center gap-2">
           <div className="bg-white/10 p-2 rounded-full border border-white/20">
             <Star className="text-yellow-400 fill-yellow-400 animate-spin-slow" size={24} />
           </div>
           <span className="text-2xl md:text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 festive-font">
             Noel An Lành
           </span>
        </div>
        
        <button
          onClick={toggleMusic}
          className="bg-white/10 hover:bg-white/20 p-3 rounded-full border border-white/20 transition-all active:scale-95 group"
          title={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
        >
          {isPlaying ? (
            <Volume2 size={20} className="text-green-300 animate-pulse" />
          ) : (
            <VolumeX size={20} className="text-gray-300 group-hover:text-white" />
          )}
        </button>
      </nav>

      {/* Main Content */}
      <main className="relative z-30 pt-24 md:pt-32 pb-20 px-4 min-h-screen flex flex-col justify-between">
        
        {/* Hero Text */}
        <div className="text-center space-y-4 mb-8 md:mb-12 animate-fade-in-down">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] festive-font leading-tight">
            Giáng Sinh <br className="md:hidden" />
            <span className="text-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">Diệu Kỳ</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-light opacity-90">
            Chào mừng bạn đến với không gian mùa đông ấm áp. Hãy bật nhạc và tận hưởng không khí Giáng sinh tuyệt vời này.
          </p>
        </div>

        {/* Interactive Centerpiece */}
        <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: The Scene */}
          <div className="order-2 lg:order-1 w-full relative group">
             {/* Glow effect behind the scene */}
             <div className="absolute inset-0 bg-yellow-500/10 blur-[100px] rounded-full"></div>
             <ChristmasScene />
             <div className="text-center mt-[-40px] relative z-20">
                <p className="text-base text-blue-200/80 font-mono tracking-widest uppercase drop-shadow-md font-bold">
                  Tạo Bởi Tống Kheng
                </p>
             </div>
          </div>

          {/* Right: The Generator */}
          <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end">
            <div className="transform transition-all duration-500 hover:-translate-y-2 w-full max-w-lg">
               <WishGenerator />
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full p-6 text-center text-blue-200/40 text-sm z-30">
        <p>© 2024 Tống Kheng. Created with React & Tailwind.</p>
      </footer>
      
      {/* CSS Animation Extras */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;