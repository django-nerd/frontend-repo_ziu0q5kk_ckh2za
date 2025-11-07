import React from 'react';
import { Play, Activity, Trophy } from 'lucide-react';

const levels = [
  { label: 'Beginner', minutes: 5 },
  { label: 'Intermediate', minutes: 8 },
  { label: 'Advanced', minutes: 10 },
  { label: 'Very Advanced', minutes: 12 },
];

function KegelModulePreview() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl p-6 bg-white/80 backdrop-blur shadow-sm ring-1 ring-[#ede7ff]">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-medium text-[#4b3b77]">Exercise Levels</h4>
          <Activity className="h-5 w-5 text-[#7a6bcc]" />
        </div>
        <ul className="mt-4 space-y-3">
          {levels.map((l) => (
            <li key={l.label} className="flex items-center justify-between rounded-xl px-4 py-3 bg-[#f7f4ff]">
              <span className="text-[#4b3b77]">{l.label}</span>
              <span className="text-[#7a6bcc] font-medium">{l.minutes} min</span>
            </li>
          ))}
        </ul>
        <button className="mt-5 inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-[#7a6bcc] text-white hover:bg-[#6d5fbd]">
          <Play className="h-4 w-4" /> Start Exercise
        </button>
      </div>

      <div className="rounded-2xl p-6 bg-gradient-to-br from-[#f2ecff] to-white shadow-sm ring-1 ring-[#ede7ff]">
        <h4 className="text-lg font-medium text-[#4b3b77]">Motivation</h4>
        <div className="mt-4 rounded-xl p-4 bg-white ring-1 ring-[#ede7ff]">
          <p className="text-[#5f4d95] italic">“Small steps every day lead to strong, lasting change.”</p>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {['7-day streak', 'XP +40', '2 badges'].map((label) => (
            <div key={label} className="rounded-xl p-4 bg-[#f7f4ff] text-center">
              <Trophy className="mx-auto h-5 w-5 text-[#7a6bcc]" />
              <p className="mt-2 text-sm text-[#4b3b77]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KegelModulePreview;
