import React from 'react';

const ChristmasScene: React.FC = () => {
  return (
    <div className="w-full relative group perspective-1000">
       {/* CSS for custom animations */}
      <style>{`
        @keyframes sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes wave {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(20deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); filter: brightness(1.2); }
          50% { opacity: 0.4; transform: scale(0.8); filter: brightness(0.8); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 0.9; fill: #fbbf24; }
          25% { opacity: 0.6; fill: #f59e0b; }
          50% { opacity: 1; fill: #fbbf24; }
          75% { opacity: 0.7; fill: #d97706; }
        }
        @keyframes float-santa {
          0% { transform: translateX(800px) translateY(0) scale(0.6) rotate(5deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(-800px) translateY(-80px) scale(0.6) rotate(-5deg); opacity: 0; }
        }
        @keyframes smoke-rise {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          100% { transform: translateY(-60px) scale(3); opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes moon-pulse {
          0%, 100% { filter: drop-shadow(0 0 15px rgba(254, 240, 138, 0.6)); }
          50% { filter: drop-shadow(0 0 25px rgba(254, 240, 138, 0.9)); }
        }
        .animate-sway { animation: sway 6s ease-in-out infinite; transform-origin: bottom center; }
        .animate-wave-left { animation: wave 3s ease-in-out infinite; transform-origin: 100% 100%; } 
        .animate-wave-right { animation: wave 4s ease-in-out infinite reverse; transform-origin: 0% 100%; }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
        .animate-flicker { animation: flicker 4s infinite alternate; }
        .animate-santa { animation: float-santa 25s linear infinite; }
        .animate-smoke-1 { animation: smoke-rise 5s infinite 0s; transform-origin: center; }
        .animate-smoke-2 { animation: smoke-rise 5s infinite 2.5s; transform-origin: center; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; transform-origin: center; }
        .animate-moon { animation: moon-pulse 4s infinite; }
      `}</style>

      {/* Container with Aspect Ratio to prevent cropping */}
      <div className="w-full aspect-[5/3] relative rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border-4 border-white/10 bg-[#0f172a]">
        <svg
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMax meet"
          className="w-full h-full block"
        >
          <defs>
            {/* Added missing Snow Gradient definition */}
            <linearGradient id="snowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="50%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>

            <linearGradient id="moonGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="50%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#312e81" />
            </linearGradient>

            <filter id="softGlow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Sky Background */}
          <rect x="0" y="0" width="1000" height="600" fill="url(#skyGradient)" />

          {/* Moon and Glow */}
          <g className="animate-moon">
             <circle cx="800" cy="100" r="45" fill="#fef08a" />
             <circle cx="800" cy="100" r="100" fill="url(#moonGlow)" opacity="0.4" />
          </g>

          {/* Santa Flying */}
          <g className="animate-santa" transform="translate(0, 50)">
               {/* Reindeer and Sleigh silhouette */}
               <path d="M0,20 Q10,10 20,20 T40,20 T60,20 M70,25 L100,25 L100,15 L70,15 Z" stroke="#cbd5e1" strokeWidth="2" fill="none" opacity="0.6"/>
               <path d="M80,10 L110,10 L110,30 L80,30 Z" fill="#991b1b" /> 
               <circle cx="100" cy="15" r="5" fill="#f8fafc" /> {/* Santa Head */}
               <text x="120" y="25" fill="white" fontSize="12" fontFamily="serif" opacity="0.5">Merry Christmas</text>
          </g>

          {/* Background Hills - Scaled to width 1000 */}
          <path d="M0,400 Q250,350 500,400 T1000,400 L1000,600 L0,600 Z" fill="#334155" />
          <path d="M0,450 Q300,420 600,450 T1200,450 L1200,600 L0,600 Z" fill="#cbd5e1" />
          <path d="M0,500 Q400,480 800,500 T1600,500 L1600,600 L0,600 Z" fill="#e2e8f0" />

          {/* Tree Group - Left Side */}
          <g transform="translate(180, 220)">
            {/* Shadow */}
            <ellipse cx="100" cy="330" rx="90" ry="25" fill="#0f172a" opacity="0.3" />
            
            <g className="animate-sway">
              {/* Trunk */}
              <path d="M90,280 L110,280 L115,330 L85,330 Z" fill="#451a03" />
              
              {/* Tree Layers */}
              <path d="M20,280 L180,280 L100,160 Z" fill="#15803d" stroke="#14532d" strokeWidth="1" />
              <path d="M35,190 L165,190 L100,90 Z" fill="#16a34a" stroke="#15803d" strokeWidth="1" />
              <path d="M50,110 L150,110 L100,30 Z" fill="#22c55e" stroke="#16a34a" strokeWidth="1" />
              
              {/* Star */}
              <g transform="translate(100, 30)" filter="url(#softGlow)">
                 <path d="M0,-18 L4,-6 L16,-6 L6,2 L10,14 L0,8 L-10,14 L-6,2 L-16,-6 L-4,-6 Z" fill="#fbbf24" className="animate-spin-slow" />
              </g>

              {/* Lights/Ornaments */}
              <circle cx="60" cy="250" r="6" fill="#ef4444" className="animate-twinkle" style={{ animationDelay: '0s' }} />
              <circle cx="140" cy="250" r="6" fill="#3b82f6" className="animate-twinkle" style={{ animationDelay: '0.5s' }} />
              <circle cx="100" cy="220" r="6" fill="#eab308" className="animate-twinkle" style={{ animationDelay: '1s' }} />
              <circle cx="70" cy="170" r="6" fill="#a855f7" className="animate-twinkle" style={{ animationDelay: '1.5s' }} />
              <circle cx="130" cy="150" r="6" fill="#ec4899" className="animate-twinkle" style={{ animationDelay: '0.2s' }} />
              <circle cx="100" cy="90" r="6" fill="#ef4444" className="animate-twinkle" style={{ animationDelay: '0.7s' }} />
              
              {/* Tinsel */}
              <path d="M40,240 Q100,265 160,240" fill="none" stroke="#fef08a" strokeWidth="3" strokeDasharray="5,5" opacity="0.5" />
              <path d="M55,150 Q100,175 145,150" fill="none" stroke="#fef08a" strokeWidth="3" strokeDasharray="5,5" opacity="0.5" />
            </g>
          </g>

          {/* House Group - Right Side */}
          <g transform="translate(580, 250)">
            <ellipse cx="150" cy="250" rx="140" ry="35" fill="#0f172a" opacity="0.3" />
            
            {/* Main Body */}
            <rect x="50" y="100" width="200" height="150" fill="#78350f" stroke="#451a03" strokeWidth="2"/>
            {/* Wooden Planks Pattern */}
            <line x1="50" y1="130" x2="250" y2="130" stroke="#451a03" strokeWidth="1" opacity="0.3"/>
            <line x1="50" y1="160" x2="250" y2="160" stroke="#451a03" strokeWidth="1" opacity="0.3"/>
            <line x1="50" y1="190" x2="250" y2="190" stroke="#451a03" strokeWidth="1" opacity="0.3"/>
            <line x1="50" y1="220" x2="250" y2="220" stroke="#451a03" strokeWidth="1" opacity="0.3"/>

            {/* Roof */}
            <path d="M30,100 L150,10 L270,100 Z" fill="#991b1b" stroke="#7f1d1d" strokeWidth="2" />
            <path d="M30,100 L150,10 L270,100" fill="none" stroke="#f1f5f9" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Chimney */}
            <rect x="180" y="40" width="30" height="40" fill="#57534e" />
            <rect x="175" y="35" width="40" height="12" fill="#f1f5f9" />
            
            {/* Animated Smoke */}
            <g opacity="0.8">
              <circle cx="195" cy="30" r="8" fill="#e2e8f0" className="animate-smoke-1" />
              <circle cx="195" cy="30" r="10" fill="#f1f5f9" className="animate-smoke-2" />
            </g>

            {/* Windows */}
            <g transform="translate(70, 130)">
               <rect width="40" height="50" fill="#451a03" />
               <rect x="2" y="2" width="36" height="46" fill="#fbbf24" className="animate-flicker" />
               <line x1="20" y1="0" x2="20" y2="50" stroke="#451a03" strokeWidth="2" />
               <line x1="0" y1="25" x2="40" y2="25" stroke="#451a03" strokeWidth="2" />
            </g>

            <g transform="translate(190, 130)">
               <rect width="40" height="50" fill="#451a03" />
               <rect x="2" y="2" width="36" height="46" fill="#fbbf24" className="animate-flicker" style={{ animationDelay: '1.2s' }} />
               <line x1="20" y1="0" x2="20" y2="50" stroke="#451a03" strokeWidth="2" />
               <line x1="0" y1="25" x2="40" y2="25" stroke="#451a03" strokeWidth="2" />
            </g>

             {/* Door */}
             <rect x="130" y="140" width="40" height="110" fill="#7f1d1d" stroke="#451a03" />
             <circle cx="162" cy="195" r="3" fill="#fbbf24" />
             {/* Wreath */}
             <g transform="translate(150, 175)">
                <circle r="12" fill="none" stroke="#15803d" strokeWidth="5" />
                <circle r="12" fill="none" stroke="#16a34a" strokeWidth="2" strokeDasharray="2,3" />
                <circle cy="-12" r="3" fill="#ef4444" />
             </g>
          </g>

          {/* Snowman - Center */}
          <g transform="translate(430, 380)">
             <ellipse cx="50" cy="160" rx="45" ry="12" fill="#0f172a" opacity="0.3" />
             
             {/* Body with Gradient Fix */}
             <circle cx="50" cy="140" r="45" fill="url(#snowGradient)" />
             <circle cx="50" cy="75" r="35" fill="url(#snowGradient)" />
             <circle cx="50" cy="25" r="25" fill="url(#snowGradient)" />
             
             {/* Buttons */}
             <circle cx="50" cy="75" r="3" fill="#1e293b" />
             <circle cx="50" cy="95" r="3" fill="#1e293b" />
             <circle cx="50" cy="130" r="3" fill="#1e293b" />

             {/* Face */}
             <circle cx="42" cy="20" r="3" fill="#1e293b" />
             <circle cx="58" cy="20" r="3" fill="#1e293b" />
             <path d="M50,25 L75,32 L50,39 Z" fill="#f97316" /> {/* Nose */}
             <path d="M40,40 Q50,48 60,40" stroke="#1e293b" strokeWidth="2" fill="none" />

             {/* Arms */}
             <g transform="translate(15, 75)">
                <line x1="0" y1="0" x2="-35" y2="-25" stroke="#78350f" strokeWidth="4" strokeLinecap="round" className="animate-wave-right" />
             </g>
             <g transform="translate(85, 75)">
                <line x1="0" y1="0" x2="35" y2="-35" stroke="#78350f" strokeWidth="4" strokeLinecap="round" className="animate-wave-left" />
             </g>

             {/* Scarf */}
             <path d="M30,55 Q50,75 70,55" stroke="#ef4444" strokeWidth="10" fill="none" strokeLinecap="round" />
             <path d="M60,60 L75,90" stroke="#ef4444" strokeWidth="10" strokeLinecap="round" />

             {/* Top Hat */}
             <rect x="25" y="-5" width="50" height="6" fill="#1e293b" rx="1" />
             <rect x="35" y="-45" width="30" height="40" fill="#1e293b" rx="1" />
             <rect x="35" y="-15" width="30" height="6" fill="#ef4444" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ChristmasScene;