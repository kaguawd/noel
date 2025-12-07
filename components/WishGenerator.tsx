import React from 'react';
import { Clover, Star, Snowflake, Sparkles } from 'lucide-react';

const WishGenerator: React.FC = () => {
  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_50px_rgba(220,38,38,0.4)] max-w-lg w-full mx-auto border-4 border-red-700 relative overflow-hidden group transform hover:scale-[1.02] transition-all duration-500">
      
      {/* Decorative Corners */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 rotate-45 transform translate-x-16 -translate-y-16 shadow-lg z-0"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-600 to-green-800 rotate-45 transform -translate-x-16 translate-y-16 shadow-lg z-0"></div>
      
      {/* Floating Sparkles Animation */}
      <div className="absolute top-10 left-10 text-yellow-400 animate-twinkle opacity-60">
        <Sparkles size={20} />
      </div>
      <div className="absolute bottom-20 right-10 text-yellow-400 animate-twinkle opacity-60" style={{ animationDelay: '1s' }}>
        <Sparkles size={16} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon Header - Đã đổi thành Clover (Hoa 3 lá) */}
        <div className="bg-green-50 p-4 rounded-full mb-4 shadow-inner border border-green-100 animate-bounce">
          <Clover className="text-green-600 fill-green-600 drop-shadow-sm" size={40} />
        </div>

        {/* Recipient Name */}
        <h2 className="text-2xl font-bold text-gray-500 uppercase tracking-widest text-xs mb-1">Gửi tặng bạn</h2>
        <h1 className="text-4xl font-bold text-red-700 festive-font mb-6 drop-shadow-sm">
          Phương Thảo
        </h1>

        {/* The Wish Message */}
        <div className="bg-red-50/50 p-6 rounded-xl border border-red-100 mb-6 backdrop-blur-sm">
          <p className="text-gray-800 text-lg leading-relaxed font-medium font-serif italic relative">
            <span className="absolute -top-2 -left-2 text-4xl text-red-200">"</span>
            Chúc Phương Thảo một mùa Giáng Sinh thật ấm áp, xinh đẹp và rạng rỡ như những bông tuyết trắng. Mong rằng mọi điều ước của Thảo sẽ thành hiện thực và năm mới sắp tới sẽ mang đến thật nhiều niềm vui, may mắn và hạnh phúc!
            <span className="absolute -bottom-6 -right-2 text-4xl text-red-200">"</span>
          </p>
        </div>

        {/* Festive Footer */}
        <div className="flex flex-col items-center gap-2">
           <div className="flex gap-2 text-yellow-500 mb-2">
             <Star fill="currentColor" size={20} className="animate-pulse" />
             <Star fill="currentColor" size={24} className="animate-pulse" style={{ animationDelay: '0.2s' }}/>
             <Star fill="currentColor" size={20} className="animate-pulse" style={{ animationDelay: '0.4s' }}/>
           </div>
           <h3 className="text-3xl font-bold text-green-700 festive-font">Merry Christmas!</h3>
           <div className="w-16 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent mt-2"></div>
           <p className="text-sm text-gray-400 font-semibold mt-2">From: Tống Kheng</p>
        </div>
      </div>

      {/* CSS for specific card animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WishGenerator;