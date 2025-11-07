import React from 'react';
import { Home, Calendar, Activity, BookOpen, Bell } from 'lucide-react';

export default function HeaderNav({ onNavigate, current }) {
  const items = [
    { key: 'home', label: 'Home', icon: Home },
    { key: 'calendar', label: 'Calendar', icon: Calendar },
    { key: 'exercise', label: 'Exercise', icon: Activity },
    { key: 'education', label: 'Education', icon: BookOpen },
  ];

  return (
    <nav className="sticky top-0 z-20 backdrop-blur bg-white/80 border-b border-[#efe9ff]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-[#7a6bcc] grid place-items-center text-white font-bold">L</div>
          <span className="font-semibold text-[#4b3b77] tracking-tight">LilyCare</span>
        </button>
        <div className="hidden sm:flex items-center gap-4 text-[#5f4d95]">
          {items.map((item) => (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`inline-flex items-center gap-2 hover:text-[#7a6bcc] ${current===item.key ? 'text-[#7a6bcc]' : ''}`}
            >
              <item.icon className="h-4 w-4"/> {item.label}
            </button>
          ))}
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-[#f7f4ff] text-[#4b3b77] hover:bg-[#efe8ff]">
          <Bell className="h-4 w-4"/> Reminders
        </button>
      </div>
    </nav>
  );
}
