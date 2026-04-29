import { useEffect } from 'react';

const FacebookPixel = () => {
  const pixelId = import.meta.env.VITE_META_PIXEL_ID;   // берем из .env

  useEffect(() => {
    if (!pixelId) {
      console.warn('Meta Pixel ID не найден');
      return;
    }

    // Загружаем базовый код пикселя
    if (!window.fbq) {
      window.fbq = function() {
        window.fbq.callMethod 
          ? window.fbq.callMethod.apply(window.fbq, arguments) 
          : window.fbq.queue.push(arguments);
      };
      
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = '2.0';
      window.fbq.queue = [];
    }

    // Инициализация пикселя
    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');

  }, [pixelId]);

  // Noscript часть (для пользователей без JS)
  return (
    <noscript>
      <img 
        height="1" 
        width="1" 
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
};

export default FacebookPixel;