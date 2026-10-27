import { useEffect, useState } from 'react';

// Descobre qual seção está visível no meio da tela,
// para destacar o link correspondente na navbar.
export default function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      // Faixa fina no meio da tela: só "vale" a seção que cruza essa faixa.
      { rootMargin: '-45% 0px -50% 0px' },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
