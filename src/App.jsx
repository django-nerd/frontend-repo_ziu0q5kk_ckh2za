import React from 'react';
import { Home, Calendar, Activity, BookOpen, Bell, User } from 'lucide-react';
import Section from './components/Section';
import OnboardingCarousel from './components/OnboardingCarousel';
import KegelModulePreview from './components/KegelModulePreview';
import BladderDiaryPreview from './components/BladderDiaryPreview';

function NavBar() {
  return (
    <nav className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-[#efe9ff]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-[#7a6bcc] grid place-items-center text-white font-bold">L</div>
          <span className="font-semibold text-[#4b3b77] tracking-tight">LilyCare</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[#5f4d95]">
          <a className="inline-flex items-center gap-2 hover:text-[#7a6bcc]" href="#home"><Home className="h-4 w-4"/> Home</a>
          <a className="inline-flex items-center gap-2 hover:text-[#7a6bcc]" href="#calendar"><Calendar className="h-4 w-4"/> Calendar</a>
          <a className="inline-flex items-center gap-2 hover:text-[#7a6bcc]" href="#exercises"><Activity className="h-4 w-4"/> Exercises</a>
          <a className="inline-flex items-center gap-2 hover:text-[#7a6bcc]" href="#education"><BookOpen className="h-4 w-4"/> Education</a>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-[#f7f4ff] text-[#4b3b77] hover:bg-[#efe8ff]">
          <Bell className="h-4 w-4"/> Reminders
        </button>
      </div>
    </nav>
  );
}

function FooterNav() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-20 bg-white/90 backdrop-blur border-t border-[#efe9ff]">
      <div className="max-w-6xl mx-auto px-4 h-14 grid grid-cols-4">
        {[{icon: Home, label:'Home', href:'#home'}, {icon: Activity, label:'Exercise', href:'#exercises'}, {icon: Calendar, label:'Calendar', href:'#calendar'}, {icon: User, label:'Profile', href:'#profile'}].map((item) => (
          <a key={item.label} href={item.href} className="flex flex-col items-center justify-center text-[#5f4d95] hover:text-[#7a6bcc]">
            <item.icon className="h-5 w-5" />
            <span className="text-xs mt-1">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#fbf9ff] via-white to-[#faf7ff]">
      <NavBar />

      <header id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="rounded-3xl overflow-hidden ring-1 ring-[#efe9ff] bg-gradient-to-br from-[#f4eeff] to-white p-6 sm:p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#4b3b77]">Pelvic health, guided with care.</h1>
              <p className="mt-4 text-[#5f4d95] max-w-prose">A gentle, Material You-inspired experience to build Kegel strength, track your bladder health, and stay motivated every day.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-2xl px-5 py-3 bg-[#7a6bcc] text-white hover:bg-[#6d5fbd]">Start Exercise</button>
                <button className="rounded-2xl px-5 py-3 bg-[#f2ecff] text-[#4b3b77] hover:bg-[#e9e1ff]">Log Bladder Entry</button>
                <button className="rounded-2xl px-5 py-3 bg-white ring-1 ring-[#efe9ff] text-[#4b3b77] hover:bg-[#f8f5ff]">View Insights</button>
              </div>
            </div>
            <div>
              <OnboardingCarousel />
            </div>
          </div>
        </div>
      </header>

      <main>
        <Section title="Kegel Workout Module" subtitle="Beginner to very advanced, with timers, video guidance, and streaks.">
          <KegelModulePreview />
        </Section>

        <Section title="Bladder Diary" subtitle="Quick logging, friendly charts, and easy export for your clinician.">
          <BladderDiaryPreview />
        </Section>

        <Section id="education" title="Education & Tips" subtitle="Articles, videos, and quick assessments to learn at your pace.">
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((n) => (
              <article key={n} className="rounded-2xl p-5 bg-white shadow-sm ring-1 ring-[#ede7ff]">
                <h4 className="text-lg font-medium text-[#4b3b77]">Understanding Kegels {n}</h4>
                <p className="mt-2 text-sm text-[#5f4d95]">Learn how to contract and relax properly with breath and posture.</p>
                <button className="mt-4 rounded-xl px-4 py-2 bg-[#f7f4ff] text-[#4b3b77] hover:bg-[#efe8ff]">Read Article</button>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Reminders & Motivation" subtitle="Set gentle nudges and celebrate your progress with badges and streaks.">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 bg-white shadow-sm ring-1 ring-[#ede7ff]">
              <h4 className="text-lg font-medium text-[#4b3b77]">Reminder Setup</h4>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {['Morning','Afternoon','Evening','Custom'].map((t) => (
                  <button key={t} className="rounded-xl px-4 py-3 bg-[#f7f4ff] text-[#4b3b77] hover:bg-[#efe8ff]">{t}</button>
                ))}
              </div>
              <button className="mt-5 w-full rounded-xl px-4 py-3 bg-[#7a6bcc] text-white hover:bg-[#6d5fbd]">Save Reminder</button>
            </div>
            <div className="rounded-2xl p-6 bg-gradient-to-br from-[#f2ecff] to-white shadow-sm ring-1 ring-[#ede7ff]">
              <p className="text-sm text-[#5f4d95]">Daily Motivation</p>
              <p className="mt-2 text-xl text-[#4b3b77]">“Consistency builds confidence—one mindful squeeze at a time.”</p>
              <div className="mt-6 rounded-xl p-4 bg-white ring-1 ring-[#ede7ff]">
                <p className="text-sm text-[#5f4d95]">Next reminder: Today, 6:00 PM</p>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="mt-10 py-10 text-center text-sm text-[#5f4d95]">Made with care • © {new Date().getFullYear()} LilyCare</footer>
      <FooterNav />
    </div>
  );
}
