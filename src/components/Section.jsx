import React from 'react';

function Section({ title, subtitle, children }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#4b3b77] tracking-tight">{title}</h2>
        {subtitle && (
          <p className="mt-2 text-sm sm:text-base text-[#5f4d95] opacity-90">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
}

export default Section;
