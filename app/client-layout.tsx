'use client';

import { useState, useEffect } from 'react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {children}
      {/* Дебаг панель только в development после гидратации */}
      {mounted && process.env.NODE_ENV === 'development'}
    </>
  );
}