import React from 'react';
import './Button.scss';

type ButtonParam = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonParam) {
  return (
    <div className="d-grid gap-2 mt-3">
      <button type="submit" className="btn btn-primary">
        {children}
      </button>
    </div>
  );
}
