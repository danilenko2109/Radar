import { useEffect, useRef, useState } from 'react';
import './RadarPage.scss';

const RadarPage = () => {
  const iframeRef = useRef(null);
  const [userCount, setUserCount] = useState(685);
  const [camerasCount, setCamerasCount] = useState(34781);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    document.title = "RADAR24 | Премиум карта камер";
    if (iframeRef.current) iframeRef.current.style.opacity = 1;

    const userInterval = setInterval(() => {
      setUserCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 600000);

    const cameraInterval = setInterval(() => {
      setCamerasCount(prev => prev + Math.floor(Math.random() * 2) + 2);
    }, 1200000);

    return () => {
      clearInterval(userInterval);
      clearInterval(cameraInterval);
    };
  }, []);

  return (
    <div className="radar-premium">
      <div className="decorative-corner decorative-corner-tl"></div>
      <div className="decorative-corner decorative-corner-tr"></div>
      <div className="decorative-corner decorative-corner-bl"></div>
      <div className="decorative-corner decorative-corner-br"></div>

      <header className="radar-header fade-in-top">
        <div className="logo-brand">
          <div className="logo-text">
            <span className="logo-primary">RADAR24</span>
          </div>
          <div className="status-dot"></div>
        </div>

        <div className="russian-flag">
          <div className="flag-stripe white"></div>
          <div className="flag-stripe blue"></div>
          <div className="flag-stripe red"></div>
        </div>
      </header>

      <div className="map-container fade-in">
        <iframe
          ref={iframeRef}
          src="https://www.driver-helper.ru/kamery-gibdd/embed?ucodeid=682919"
          className="premium-iframe"
          allow="accelerometer; encrypted-media; gyroscope"
          title="Премиум карта радаров"
          style={{ opacity: 0, transition: 'opacity 0.8s ease-out' }}
        />
      </div>

      <div className="data-footer fade-in-bottom">
        <div className="data-item">
          <div className="data-label">ОБНОВЛЕНО</div>
          <div className="data-value">ТОЛЬКО ЧТО</div>
        </div>

        <div
          className="data-item"
          onMouseEnter={() => setHovered('cameras')}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="data-label">КАМЕР</div>
          <div className="data-value">{camerasCount.toLocaleString()}</div>
          {hovered === 'cameras' && (
            <div className="fake-chart">📈 рост камер</div>
          )}
        </div>

        <div
          className="data-item"
          onMouseEnter={() => setHovered('users')}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="data-label">ПОЛЬЗОВАТЕЛЕЙ</div>
          <div className="data-value">{userCount.toLocaleString()}</div>
          {hovered === 'users' && (
            <div className="fake-chart">📊 рост пользователей</div>
          )}
        </div>

        <div className="data-item">
          <div className="data-label">СТАТУС</div>
          <div className="data-value active">АКТИВЕН</div>
        </div>
      </div>
    </div>
  );
};

export default RadarPage;
