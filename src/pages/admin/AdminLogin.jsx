import React, { useState } from 'react';
import { LockKeyhole, Eye, EyeOff } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    // Temporary prototype login.
    // We'll replace this with proper authentication later.
    if (
      email === 'admin@noveltyworks.rw' &&
      password === 'admin123'
    ) {
      sessionStorage.setItem('noveltyAdminLoggedIn', 'true');
      window.location.href = '/admin';
    } else {
      alert('Incorrect email or password.');
    }
  }

  return (
    <main className="min-h-screen bg-[#F3F7F4] flex items-center justify-center px-6 py-16">

      <div className="w-full max-w-md bg-white p-8 md:p-10">

        <a
          href="/"
          className="text-xl font-bold tracking-tight text-[#16A34A]"
        >
          Novelty Works
        </a>

        <div className="mt-10">

          <div className="w-12 h-12 bg-[#F3F7F4] flex items-center justify-center">
            <LockKeyhole size={21} className="text-[#16A34A]" />
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
            Admin login
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            Sign in to manage content published on Novelty Works.
          </p>

        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#16A34A]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Password
            </label>

            <div className="flex items-center border border-slate-200 focus-within:border-[#16A34A]">

              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 text-sm outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="px-3 text-slate-500 hover:text-[#16A34A]"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#16A34A] hover:bg-green-700 text-white font-semibold text-sm py-3.5 transition-colors"
          >
            Sign in
          </button>

        </form>

        <p className="mt-8 text-xs text-slate-400 text-center">
          Novelty Works Ltd · Administration
        </p>

      </div>

    </main>
  );
}