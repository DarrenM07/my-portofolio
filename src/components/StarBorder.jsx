"use client";

import './StarBorder.css';
import React, { useEffect, useState } from 'react';

const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const read = () => setIsDark(document.documentElement.classList.contains('dark'));
    read();
    const mo = new MutationObserver(read);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => mo.disconnect();
  }, []);

  // theme-aware background + text color
  const themeBg = isDark ? '#000' : '#fff';
  const themeText = isDark ? '#fff' : '#000';

  const mergedStyle = {
    padding: `${thickness}px 0`,
    backgroundColor: rest.style?.backgroundColor ?? themeBg,
    color: rest.style?.color ?? themeText,
    ...rest.style,
  };

  return (
    <Component
      className={`star-border-container ${className}`}
      style={mergedStyle}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="inner-content"
        style={{
          background: themeBg,
          color: themeText,
          border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
        }}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
