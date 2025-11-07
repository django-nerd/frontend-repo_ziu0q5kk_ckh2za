import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, ArrowRight, ArrowLeft, User, ShieldCheck } from 'lucide-react';

function Input({ label, type='text', icon:Icon, ...props }) {
  return (
    <label className="block">
      <span className="text-sm text-[#4b3b77]">{label}</span>
      <div className="mt-1.5 flex items-center gap-2 rounded-2xl ring-1 ring-[#e9e1ff] bg-white px-3 py-2.5 focus-within:ring-[#7a6bcc]">
        {Icon && <Icon className="h-4 w-4 text-[#7a6bcc]" />}
        <input type={type} className="w-full outline-none text-[#4b3b77] placeholder-[#8b7ccf] bg-transparent" {...props} />
      </div>
    </label>
  );
}

function Checkbox({ children, ...props }){
  return (
    <label className="flex items-start gap-3 select-none">
      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-[#d9d2f2] text-[#7a6bcc] focus:ring-[#7a6bcc]" {...props} />
      <span className="text-sm text-[#5f4d95]">{children}</span>
    </label>
  )
}

export default function OnboardingScreens(){
  const [step, setStep] = React.useState('splash');
  const [authMode, setAuthMode] = React.useState('login');

  React.useEffect(() => {
    const t = setTimeout(() => setStep('welcome'), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="rounded-3xl overflow-hidden bg-white ring-1 ring-[#efe9ff]">
      <AnimatePresence mode="wait">
        {step === 'splash' && (
          <motion.div key="splash" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="p-10 grid place-items-center h-80 sm:h-96 bg-gradient-to-br from-[#f2ecff] to-white">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-[#7a6bcc] grid place-items-center text-white text-2xl font-bold">L</div>
              <p className="mt-4 text-[#4b3b77] font-medium">LilyCare</p>
              <p className="mt-2 text-sm text-[#5f4d95]">Pelvic health, guided with care.</p>
            </div>
          </motion.div>
        )}

        {step === 'welcome' && (
          <motion.div key="welcome" initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-12}} className="p-6 sm:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#4b3b77]">Welcome to LilyCare</h3>
                <p className="mt-2 text-[#5f4d95]">Gentle onboarding to get you started. Choose to create an account or log in.</p>
                <div className="mt-5 flex gap-3">
                  <button onClick={() => { setAuthMode('signup'); setStep('auth'); }} className="rounded-2xl px-5 py-3 bg-[#7a6bcc] text-white">Sign Up</button>
                  <button onClick={() => { setAuthMode('login'); setStep('auth'); }} className="rounded-2xl px-5 py-3 bg-[#f2ecff] text-[#4b3b77]">Log In</button>
                </div>
              </div>
              <div className="rounded-2xl p-6 bg-[#f7f4ff] text-[#4b3b77]">
                <ul className="space-y-2 text-sm">
                  <li>• Guided Kegel sessions with timers</li>
                  <li>• Bladder diary and calendar sync</li>
                  <li>• Education, streaks, and badges</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {step === 'auth' && (
          <motion.div key="auth" initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-12}} className="p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-6 text-[#5f4d95]">
              <button onClick={() => setStep('welcome')} className="inline-flex items-center gap-1 hover:text-[#7a6bcc]">
                <ArrowLeft className="h-4 w-4"/> Back
              </button>
              <span className="text-sm">{authMode === 'signup' ? 'Create your account' : 'Log in to continue'}</span>
            </div>

            {authMode === 'signup' ? (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Input label="Name" icon={User} placeholder="Your name" />
                  <Input label="Email" type="email" icon={Mail} placeholder="you@lily.care" />
                  <Input label="Password" type="password" icon={Lock} placeholder="••••••••" />
                  <Checkbox> I agree to the Terms and Privacy Policy</Checkbox>
                  <button onClick={() => setStep('verify')} className="w-full rounded-2xl px-5 py-3 bg-[#7a6bcc] text-white">Create Account</button>
                </div>
                <div className="rounded-2xl p-6 bg-[#f7f4ff]">
                  <p className="text-sm text-[#4b3b77]">Why we ask for your email</p>
                  <p className="mt-2 text-sm text-[#5f4d95]">We’ll send a one-time verification to keep your account secure.</p>
                </div>
              </div>
            ) : (
              <div className="max-w-md space-y-4">
                <Input label="Email" type="email" icon={Mail} placeholder="you@lily.care" />
                <Input label="Password" type="password" icon={Lock} placeholder="••••••••" />
                <div className="flex items-center justify-between">
                  <button className="text-sm text-[#7a6bcc]">Forgot password?</button>
                  <button onClick={() => setStep('bmi')} className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-[#7a6bcc] text-white">Log In <ArrowRight className="h-4 w-4"/></button>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {step === 'verify' && (
          <motion.div key="verify" initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-12}} className="p-6 sm:p-10">
            <h3 className="text-2xl font-semibold text-[#4b3b77]">Verify your email</h3>
            <p className="mt-2 text-[#5f4d95]">We sent a 6-digit code to your inbox.</p>
            <div className="mt-4 grid grid-cols-6 gap-2 max-w-sm">
              {Array.from({length:6}).map((_,i)=> (
                <input key={i} className="h-12 rounded-xl text-center text-lg ring-1 ring-[#e9e1ff] focus:ring-[#7a6bcc]" />
              ))}
            </div>
            <button onClick={() => setStep('bmi')} className="mt-5 rounded-2xl px-5 py-3 bg-[#7a6bcc] text-white">Continue</button>
          </motion.div>
        )}

        {step === 'bmi' && (
          <motion.div key="bmi" initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-12}} className="p-6 sm:p-10">
            <div className="flex items-center gap-2 text-[#5f4d95] mb-4">
              <ShieldCheck className="h-4 w-4"/>
              <p className="text-sm">Your health profile helps personalize your plan.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl">
              <Input label="Height (cm)" type="number" placeholder="165" />
              <Input label="Weight (kg)" type="number" placeholder="62" />
              <Input label="Age" type="number" placeholder="30" />
            </div>
            <button onClick={() => setStep('done')} className="mt-5 rounded-2xl px-5 py-3 bg-[#7a6bcc] text-white">Save and Continue</button>
          </motion.div>
        )}

        {step === 'done' && (
          <motion.div key="done" initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-12}} className="p-10 text-center">
            <div className="mx-auto h-16 w-16 rounded-2xl bg-[#7a6bcc] grid place-items-center text-white">✓</div>
            <h3 className="mt-4 text-2xl font-semibold text-[#4b3b77]">You’re all set</h3>
            <p className="mt-2 text-[#5f4d95]">Let’s begin your first session or explore the app.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
