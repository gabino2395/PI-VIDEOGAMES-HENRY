import React, { useEffect, useState } from "react";
import "./Pong.css"; // Estilos CSS para el juego

const Pong = () => {
  const [paddlePosition, setPaddlePosition] = useState(0);
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
  const [ballSpeed, setBallSpeed] = useState({ x: 1, y: 1 });

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      setPaddlePosition(paddlePosition - 20);
    } else if (e.key === "ArrowDown") {
      setPaddlePosition(paddlePosition + 20);
    }
  };

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setBallPosition({
        x: ballPosition.x + ballSpeed.x,
        y: ballPosition.y + ballSpeed.y,
      });
    }, 16);

    return () => {
      clearInterval(gameLoop);
    };
  }, [ballPosition, ballSpeed]);

  useEffect(() => {
    const handleCollision = () => {
      if (ballPosition.y <= 0 || ballPosition.y >= 380) {
        setBallSpeed({ ...ballSpeed, y: -ballSpeed.y });
      }

      if (
        ballPosition.x >= 780 &&
        ballPosition.y >= paddlePosition &&
        ballPosition.y <= paddlePosition + 100
      ) {
        setBallSpeed({ ...ballSpeed, x: -ballSpeed.x });
      }
    };

    handleCollision();
  }, [ballPosition, paddlePosition, ballSpeed]);

  return (
    <div className="pong-container" tabIndex="0" onKeyDown={handleKeyDown}>
      <div className="paddle" style={{ top: `${paddlePosition}px` }}></div>
      <div
        className="ball"
        style={{ top: `${ballPosition.y}px`, left: `${ballPosition.x}px` }}
      ></div>
    </div>
  );
};

export default Pong;
