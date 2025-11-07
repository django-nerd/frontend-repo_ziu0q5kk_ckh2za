import React from 'react';
import { PlayCircle, Bookmark } from 'lucide-react';

function Card({ title, body, actionLabel }){
  return (
    <div className="rounded-2xl p-5 bg-white shadow-sm ring-1 ring-[#ede7ff]">
      <h4 className="text-lg font-medium text-[#4b3b77]">{title}</h4>
      <p className="mt-2 text-sm text-[#5f4d95]">{body}</p>
      <button className="mt-4 rounded-xl px-4 py-2 bg-[#f7f4ff] text-[#4b3b77] hover:bg-[#efe8ff]">{actionLabel}</button>
    </div>
  );
}

export default function EducationScreen(){
  return (
    <div className="space-y-6">
      <div className="rounded-3xl overflow-hidden ring-1 ring-[#efe9ff] bg-white">
        <div className="p-6 border-b border-[#efe9ff] flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-[#4b3b77]">Education</h3>
            <p className="text-sm text-[#5f4d95]">Articles, videos, and quick tips to support your journey.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-[#f7f4ff] text-[#4b3b77]"><Bookmark className="h-4 w-4"/> Saved</button>
        </div>
        <div className="p-6 grid md:grid-cols-3 gap-6">
          <Card title="How to Find Your Pelvic Floor" body="A simple guide to correct muscle engagement with breath." actionLabel="Read Article" />
          <div className="rounded-2xl p-5 bg-gradient-to-br from-[#f2ecff] to-white ring-1 ring-[#ede7ff]">
            <h4 className="text-lg font-medium text-[#4b3b77]">Guided Breath & Kegels</h4>
            <p className="mt-2 text-sm text-[#5f4d95]">Follow along with calming visuals and pacing cues.</p>
            <button className="mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-[#7a6bcc] text-white"><PlayCircle className="h-4 w-4"/> Watch Video</button>
          </div>
          <Card title="Postpartum Recovery Tips" body="Gentle progressions for comfort and confidence." actionLabel="Read Article" />
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden ring-1 ring-[#efe9ff] bg-white p-6">
        <h4 className="text-[#4b3b77] font-medium">Quick Tips</h4>
        <div className="mt-3 grid md:grid-cols-3 gap-3">
          {[
            'Exhale as you lift; inhale as you release.',
            'Stay hydrated; track bladder patterns.',
            'Consistency beats intensity—short daily sets.',
          ].map((tip) => (
            <div key={tip} className="rounded-xl p-4 bg-[#f7f4ff] text-[#4b3b77]">{tip}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
