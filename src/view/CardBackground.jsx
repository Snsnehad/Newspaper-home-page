import React from 'react';

const CardBackground = () => {
    const confettiCount = 50;
    const colors = ['#f472b6', '#34d399', '#60a5fa', '#facc15', '#a78bfa'];

    return (
        <div className="card-bg-wrapper">
            {Array.from({ length: confettiCount }).map((_, i) => {
                const size = 5 + Math.random() * 10;
                const duration = 3 + Math.random() * 4;
                const delay = Math.random() * 3;
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                const color = colors[Math.floor(Math.random() * colors.length)];
                const style = {
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundColor: color,
                    top: `${top}%`,
                    left: `${left}%`,
                    animationDuration: `${duration}s`,
                    animationDelay: `${delay}s`,
                };
                return <div className="card-confetti" style={style} key={i}></div>;
            })}
        </div>
    );
};

export default CardBackground;
