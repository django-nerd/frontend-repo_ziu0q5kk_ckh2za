import React from 'react';
import { Droplet, Download } from 'lucide-react';

const stats = [
  { label: 'Visits/day', value: 7 },
  { label: 'Leaks/week', value: 1 },
  { label: 'Avg. urgency', value: 'Moderate' },
];

function BladderDiaryPreview() {
  return (
    <div className="rounded-2xl p-6 bg-white shadow-sm ring-1 ring-[#ede7ff]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-[#f2ecff] grid place-items-center">
            <Droplet className="h-5 w-5 text-[#7a6bcc]" />
          </div>
          <div>
            <h4 className="text-lg font-medium text-[#4b3b77]">Bladder Diary</h4>
            <p className="text-sm text-[#5f4d95]">Quick overview and export</p>
          </div>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-[#f7f4ff] text-[#4b3b77] hover:bg-[#efe8ff]">
          <Download className="h-4 w-4" /> Export PDF
        </button>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl p-4 bg-[#f7f4ff] text-center">
            <p className="text-2xl font-semibold text-[#4b3b77]">{s.value}</p>
            <p className="text-xs text-[#5f4d95] mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button className="w-full rounded-xl px-4 py-3 bg-[#7a6bcc] text-white hover:bg-[#6d5fbd]">Log Bladder Entry</button>
      </div>
    </div>
  );
}

export default BladderDiaryPreview;
