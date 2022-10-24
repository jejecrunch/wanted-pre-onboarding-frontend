import React from 'react';
import './Button.scss';

type ButtonParam = {
  children: React.ReactNode;
  type: string;
  onClick: React.MouseEventHandler<HTMLElement> | undefined;
};

export default function Button({ children, type, onClick }: ButtonParam) {
  if (type === 'todo') {
    return (
      <button
        type="submit"
        className="btn btn-primary ms-2 mb-3"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  if (type === 'todo delete') {
    return (
      <button type="submit" className="btn btn-danger ms-2" onClick={onClick}>
        {children}
      </button>
    );
  }

  if (type === 'todo modify') {
    return (
      <button type="submit" className="btn btn-success ms-2" onClick={onClick}>
        {children}
      </button>
    );
  }

  if (type === 'todo cancel') {
    return (
      <button type="submit" className="btn btn-light ms-2" onClick={onClick}>
        {children}
      </button>
    );
  }

  if (type === 'logout') {
    return (
      <div className="d-grid gap-2 mt-3 mb-3 justify-content-end">
        <button type="submit" className="btn btn-link" onClick={onClick}>
          {children}
        </button>
      </div>
    );
  }

  return (
    <div className="d-grid gap-2 mt-3">
      <button type="submit" className="btn btn-primary">
        {children}
      </button>
    </div>
  );
}
