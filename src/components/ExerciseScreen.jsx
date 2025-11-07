import React from 'react';
import { Play, Pause, RotateCw, Settings, Activity } from 'lucide-react';

function LevelCard({ level, minutes, onStart }){
  return (
    <button onClick={onStart} className="text-left rounded-2xl p-4 bg-[#f7f4ff] hover:bg-[#efe8ff] ring-1 ring-[#ede7ff]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[#5f4d95]">{level}</p>
          <p className="text-lg font-medium text-[#4b3b77]">{minutes} min session</p>
        </div>
        <Activity className="h-5 w-5 text-[#7a6bcc]" />
      </div>
    </button>
  );
}

export default function ExerciseScreen(){
  const [running, setRunning] = React.useState(false);
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    if(!running) return;
    const t = setInterval(() => setSeconds((s) => s+1), 1000);
    return () => clearInterval(t);
  }, [running]);

  const mm = String(Math.floor(seconds/60)).padStart(2,'0');
  const ss = String(seconds % 60).padStart(2,'0');

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="rounded-3xl overflow-hidden ring-1 ring-[#efe9ff] bg-white">
        <div className="p-6 border-b border-[#efe9ff] flex items-center justify-between">
          <h3 className="text-lg font-medium text-[#4b3b77]">Guided Session</h3>
          <button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-[#f7f4ff] text-[#4b3b77]"><Settings className="h-4 w-4"/> Settings</button>
        </div>
        <div className="p-8 text-center">
          <div className="mx-auto w-48 h-48 rounded-full grid place-items-center bg-gradient-to-br from-[#f2ecff] to-white ring-1 ring-[#efe9ff]">
            <div className="text-4xl font-semibold text-[#4b3b77]">{mm}:{ss}</div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            {!running ? (
              <button onClick={() => setRunning(true)} className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-[#7a6bcc] text-white"><Play className="h-4 w-4"/> Start</button>
            ) : (
              <button onClick={() => setRunning(false)} className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-[#f2ecff] text-[#4b3b77]"><Pause className="h-4 w-4"/> Pause</button>
            )}
            <button onClick={() => { setSeconds(0); setRunning(false); }} className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-white ring-1 ring-[#efe9ff] text-[#4b3b77]"><RotateCw className="h-4 w-4"/> Reset</button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <LevelCard level="Beginner" minutes={5} onStart={() => { setSeconds(0); setRunning(true); }} />
        <LevelCard level="Intermediate" minutes={8} onStart={() => { setSeconds(0); setRunning(true); }} />
        <LevelCard level="Advanced" minutes={10} onStart={() => { setSeconds(0); setRunning(true); }} />
        <LevelCard level="Very Advanced" minutes={12} onStart={() => { setSeconds(0); setRunning(true); }} />
      </div>
    </div>
  );
}
