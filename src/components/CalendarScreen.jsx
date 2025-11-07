import React from 'react';
import { ChevronLeft, ChevronRight, Droplet, Activity } from 'lucide-react';

function DayCell({ day, logs }){
  const hasExercise = logs?.exercise;
  const hasBladder = logs?.bladder;
  return (
    <div className={`aspect-square rounded-xl p-2 border ${day ? 'bg-white border-[#efe9ff]' : 'bg-transparent border-transparent'} `}>
      {day && (
        <div className="flex flex-col h-full">
          <div className="text-xs text-[#4b3b77]">{day}</div>
          <div className="mt-auto flex gap-1">
            {hasExercise && <Activity className="h-3.5 w-3.5 text-[#7a6bcc]"/>}
            {hasBladder && <Droplet className="h-3.5 w-3.5 text-[#8b7ccf]"/>}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CalendarScreen(){
  const [month, setMonth] = React.useState(() => new Date());

  const start = new Date(month.getFullYear(), month.getMonth(), 1);
  const end = new Date(month.getFullYear(), month.getMonth()+1, 0);
  const daysInMonth = end.getDate();
  const startWeekday = start.getDay();

  const grid = [];
  for(let i=0;i<startWeekday;i++) grid.push(null);
  for(let d=1; d<=daysInMonth; d++) grid.push(d);
  while(grid.length % 7 !== 0) grid.push(null);

  const sampleLogs = {
    2: { exercise: true },
    5: { bladder: true },
    7: { exercise: true, bladder: true },
    12: { exercise: true },
    18: { bladder: true },
    22: { exercise: true },
  };

  const monthLabel = month.toLocaleDateString(undefined, { month:'long', year:'numeric' });

  return (
    <div className="rounded-3xl overflow-hidden ring-1 ring-[#efe9ff] bg-white">
      <div className="flex items-center justify-between p-4 border-b border-[#efe9ff]">
        <button onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth()-1, 1))} className="rounded-xl px-3 py-2 bg-[#f7f4ff] text-[#4b3b77]">
          <ChevronLeft className="h-4 w-4"/>
        </button>
        <h3 className="text-lg font-medium text-[#4b3b77]">{monthLabel}</h3>
        <button onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth()+1, 1))} className="rounded-xl px-3 py-2 bg-[#f7f4ff] text-[#4b3b77]">
          <ChevronRight className="h-4 w-4"/>
        </button>
      </div>
      <div className="p-4 grid grid-cols-7 gap-2">
        {['S','M','T','W','T','F','S'].map((d) => (
          <div key={d} className="text-xs text-center text-[#5f4d95]">{d}</div>
        ))}
        {grid.map((d, i) => (
          <DayCell key={i} day={d} logs={d ? sampleLogs[d] : undefined} />
        ))}
      </div>
      <div className="p-4 border-t border-[#efe9ff] flex items-center gap-4 text-sm text-[#5f4d95]">
        <div className="inline-flex items-center gap-2"><Activity className="h-4 w-4 text-[#7a6bcc]"/> Exercise</div>
        <div className="inline-flex items-center gap-2"><Droplet className="h-4 w-4 text-[#8b7ccf]"/> Bladder</div>
      </div>
    </div>
  );
}
