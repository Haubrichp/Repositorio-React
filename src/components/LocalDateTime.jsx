import React, { useEffect, useState } from 'react';

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div style={{ fontFamily: 'Arial', fontSize: '24px', textAlign: 'center' }}>
    <p>{`${hours}:${minutes}:${seconds}`}</p>
  </div>
  );
}
