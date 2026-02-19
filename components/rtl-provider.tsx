'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Direction = 'ltr' | 'rtl';

interface RTLContextType {
  direction: Direction;
  setDirection: (direction: Direction) => void;
  toggleDirection: () => void;
}

const RTLContext = createContext<RTLContextType | undefined>(undefined);

export function RTLProvider({ children }: { children: React.ReactNode }) {
  const [direction, setDirection] = useState<Direction>('ltr');

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.setAttribute('data-direction', direction);
  }, [direction]);

  const toggleDirection = () => {
    setDirection((prev) => (prev === 'ltr' ? 'rtl' : 'ltr'));
  };

  return (
    <RTLContext.Provider value={{ direction, setDirection, toggleDirection }}>
      {children}
    </RTLContext.Provider>
  );
}

export function useRTL() {
  const context = useContext(RTLContext);
  if (context === undefined) {
    throw new Error('useRTL must be used within RTLProvider');
  }
  return context;
}
