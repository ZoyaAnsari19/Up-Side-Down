// components/Lobby.tsx
'use client';

import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import TopBar from './Lobby/TopBar';
import ModeSelector from './Lobby/ModeSelector';
import PlayArea from './Lobby/PlayArea';
import RightPanel from './Lobby/RightPanel';
import BottomBar from './Lobby/BottomBar';

export default function Lobby() {
  const { username, ucCoins, rpCoins, notifications } = useSelector((state: RootState) => state.user); // Assume user slice

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/lobby-bg.jpg"
        alt="Lobby Background"
        fill
        className="object-cover object-center opacity-80"
        priority
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

      <div className="relative z-10 h-screen flex flex-col">
        {/* Top Bar */}
        <TopBar 
          username={username} 
          ucCoins={ucCoins} 
          rpCoins={rpCoins} 
          notifications={notifications} 
        />

        <div className="flex-1 flex px-4 py-4">
          {/* Left: Mode Selector */}
          <ModeSelector />

          {/* Center: Play Area */}
          <div className="flex-1 flex items-center justify-center">
            <PlayArea />
          </div>

          {/* Right: Events Panel */}
          <RightPanel />
        </div>

        {/* Bottom Bar */}
        <BottomBar />
      </div>
    </div>
  );
}