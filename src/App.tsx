import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {
  const [circles, setCircles] = useState([]);
  const intervalRef = useRef(null); // استفاده از ref برای ذخیره interval

  // تابع ایجاد دایره
  const createCircle = (event) => {
    const newCircles = [];
    const circleCount = Math.floor(Math.random() * 15) + 5; // تعداد تصادفی دایره‌ها بین 5 تا 10
    const buttonRect = event.target.getBoundingClientRect(); // موقعیت دکمه در صفحه

    for (let i = 0; i < circleCount; i++) {
      const size = Math.random() * 20 + 10; // سایز تصادفی دایره
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`; // رنگ تصادفی دایره

      // موقعیت تصادفی دایره‌ها در اطراف دکمه
      const x = buttonRect.left + buttonRect.width / 2 + (Math.random() - 0.5) * 100; // تغییر مختصات X به صورت تصادفی
      const y = buttonRect.top + buttonRect.height / 2 + (Math.random() - 0.5) * 100; // تغییر مختصات Y به صورت تصادفی

      const angle = Math.random() * 360; // زاویه تصادفی (پرتاب به تمام جهات)
      const distance = Math.random() * 200 + 100; // فاصله تصادفی

      newCircles.push({
        id: `${Date.now()}-${i}`, // استفاده از زمان برای یکتا کردن id
        x,
        y,
        size,
        color,
        angle,
        distance,
      });
    }

    setCircles((prevCircles) => [...prevCircles, ...newCircles]); // اضافه کردن دایره‌ها به state قبلی
  };

  // وقتی دکمه فشرده می‌شود
  const handleMouseDown = (event) => {
    // ایجاد یک دایره بلافاصله
    createCircle(event);

    // شروع ایجاد دایره‌ها به صورت مداوم هر 300 میلی‌ثانیه
    intervalRef.current = setInterval(() => createCircle(event), 300);
  };

  // وقتی دکمه رها می‌شود
  const handleMouseUp = () => {
    clearInterval(intervalRef.current); // متوقف کردن ایجاد دایره‌ها
  };

  return (
    <div className="app">
      <button
        className="circle-button"
        onMouseDown={handleMouseDown} // وقتی دکمه فشرده می‌شود
        onMouseUp={handleMouseUp} // وقتی دکمه رها می‌شود
        onMouseLeave={handleMouseUp} // زمانی که موس از روی دکمه خارج می‌شود
      >
        Hold Me
      </button>

      {circles.map((circle) => (
        <div
          key={circle.id}
          className="circle"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            backgroundColor: circle.color,
            top: `${circle.y}px`,
            left: `${circle.x}px`,
            transform: `translate(${circle.distance * Math.cos(circle.angle * (Math.PI / 180))}px, ${circle.distance * Math.sin(circle.angle * (Math.PI / 180))}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default App;
