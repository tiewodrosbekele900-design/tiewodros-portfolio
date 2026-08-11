import { useState, useEffect, useCallback } from 'react';

export const useScrollSpy = (sectionIds: string[], offset: number = 100) => {
  const [activeId, setActiveId] = useState<string>('');

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollY >= offsetTop - offset && scrollY < offsetTop + offsetHeight - offset) {
          setActiveId(id);
          break;
        }
      }
    }
  }, [sectionIds, offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return activeId;
};