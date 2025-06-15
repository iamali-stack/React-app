import React from 'react';
import style from './NotFound.module.css';

export default function NotFound() {
  return (
    <>
      <div
        className={`${style.NotFound} d-flex justify-content-center align-items-center text-white flex-column`}
        style={{ backgroundColor: '#19BC9B', minHeight: '100vh' }}
      >
        <h1 className={style.aboutTitle}>Page is Not Found</h1>
      </div>
    </>
  );
}
