import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover({ children }) {
  return (
    <div className="relative rounded-3xl overflow-hidden ring-1 ring-[#efe9ff] bg-gradient-to-br from-[#f4eeff] to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative p-6 sm:p-12 lg:p-16">
        <div className="max-w-2xl">
          {children}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/70 via-white/30 to-transparent" />
    </div>
  );
}
