import React from 'react';
import HeaderNav from './components/HeaderNav';
import HeroCover from './components/HeroCover';
import OnboardingScreens from './components/OnboardingScreens';
import CalendarScreen from './components/CalendarScreen';
import ExerciseScreen from './components/ExerciseScreen';
import EducationScreen from './components/EducationScreen';

export default function App(){
  const [route, setRoute] = React.useState('home');

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#fbf9ff] via-white to-[#faf7ff]">
      <HeaderNav onNavigate={setRoute} current={route} />

      <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <HeroCover>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#4b3b77]">Pelvic health, guided with care.</h1>
          <p className="mt-4 text-[#5f4d95] max-w-prose">A calming, Material You–inspired experience to build Kegel strength, track bladder health, and learn with friendly guidance.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={() => setRoute('exercise')} className="rounded-2xl px-5 py-3 bg-[#7a6bcc] text-white hover:bg-[#6d5fbd]">Start Exercise</button>
            <button onClick={() => setRoute('calendar')} className="rounded-2xl px-5 py-3 bg-[#f2ecff] text-[#4b3b77] hover:bg-[#e9e1ff]">Open Calendar</button>
            <button onClick={() => setRoute('education')} className="rounded-2xl px-5 py-3 bg-white ring-1 ring-[#efe9ff] text-[#4b3b77] hover:bg-[#f8f5ff]">Explore Education</button>
          </div>
        </HeroCover>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-8">
        {route === 'home' && (
          <OnboardingScreens />
        )}
        {route === 'calendar' && (
          <CalendarScreen />
        )}
        {route === 'exercise' && (
          <ExerciseScreen />
        )}
        {route === 'education' && (
          <EducationScreen />
        )}
      </main>

      <footer className="mt-6 py-10 text-center text-sm text-[#5f4d95]">Made with care • © {new Date().getFullYear()} LilyCare</footer>
    </div>
  );
}
