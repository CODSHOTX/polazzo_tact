import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  size?: number | string;
}

export const Icon: React.FC<IconProps> = ({ name, className = '', size }) => {
  const style = size
    ? {
        fontSize: typeof size === 'number' ? `${size}px` : size,
      }
    : undefined;

  return (
    <span
      className={`icon-symbol select-none ${className}`}
      style={style}
      aria-hidden="true"
    >
      {name}
    </span>
  );
};
