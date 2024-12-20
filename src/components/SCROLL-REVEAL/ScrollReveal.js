import ScrollReveal from 'scrollreveal';
import { useEffect, useRef } from 'react';

const useScrollReveal = (elements = []) => {
  const initializedSelectors = useRef(new Set()); // Отслеживаем обработанные селекторы

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '30px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: false, // Отключаем повторную анимацию
    });

    const revealElements = () => {
      if (elements.length === 0) return;

      elements.forEach(({ selector, delay = 0, options = {} }) => {
        if (initializedSelectors.current.has(selector)) {
          // Пропускаем обработанные селекторы
          return;
        }

        const nodes = document.querySelectorAll(selector);
        if (nodes.length > 0) {
          nodes.forEach((node) => {
            if (!node.dataset.srInitialized) {
              // Проверяем, если элемент уже анимирован
              sr.reveal(node, {
                delay,
                reset: false,
                viewFactor: 0.2,
                interval: 200,
                ...options,
              });
              node.dataset.srInitialized = true; // Помечаем элемент как обработанный
            }
          });
          initializedSelectors.current.add(selector); // Помечаем селектор как обработанный
        } else {
          console.error(`No elements found for selector: "${selector}"`);
        }
      });
    };

    // Таймаут для динамических элементов
    setTimeout(() => {
      revealElements();
    }, 100);

    return () => {
      sr.destroy();
      initializedSelectors.current.clear(); // Очищаем список обработанных селекторов при размонтировании
    };
  }, [elements]);
};

export default useScrollReveal;



