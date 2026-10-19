import React from 'react';
import {
  LayoutDashboard,
  FileText,
  Plus,
  LogOut,
  ArrowUpRight,
} from 'lucide-react';

export default function AdminDashboard() {
  const isLoggedIn =
    sessionStorage.getItem('noveltyAdminLoggedIn') === 'true';

  if (!isLoggedIn) {
    window.location.replace('/admin/login');
    return null;
  }

  function handleLogout() {
    sessionStorage.removeItem('noveltyAdminLoggedIn');
    window.location.href = '/admin/login';
  }

  return (
    <main className="min-h-screen bg-[#F3F7F4]">

      <header className="bg-white border-b border-slate-200 px-6 md:px-12 py-5">

        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <a href="/" className="text-lg font-bold text-[#16A34A]">
            Novelty Works
          </a>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-red-600 transition-colors"
          >
            <LogOut size={17} />
            Sign out
          </button>

        </div>

      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16A34A] mb-3">
              Administration
            </p>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Dashboard
            </h1>

            <p className="mt-3 text-sm text-slate-600">
              Manage the content displayed on your Insights page.
            </p>

          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-green-700 text-white px-5 py-3 text-sm font-semibold transition-colors"
          >
            <Plus size={18} />
            Add Content
          </button>

        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          <div className="bg-white p-6 border border-slate-100">

            <div className="flex items-center justify-between">

              <p className="text-sm text-slate-500">
                Total articles
              </p>

              <FileText size={19} className="text-[#16A34A]" />

            </div>

            <p className="mt-4 text-3xl font-bold text-slate-900">
              0
            </p>

          </div>

          <div className="bg-white p-6 border border-slate-100">

            <div className="flex items-center justify-between">

              <p className="text-sm text-slate-500">
                Published
              </p>

              <ArrowUpRight size={19} className="text-[#16A34A]" />

            </div>

            <p className="mt-4 text-3xl font-bold text-slate-900">
              0
            </p>

          </div>

          <div className="bg-white p-6 border border-slate-100">

            <div className="flex items-center justify-between">

              <p className="text-sm text-slate-500">
                Drafts
              </p>

              <LayoutDashboard size={19} className="text-[#16A34A]" />

            </div>

            <p className="mt-4 text-3xl font-bold text-slate-900">
              0
            </p>

          </div>

        </div>

        <section className="mt-10 bg-white border border-slate-100 p-8 md:p-10">

          <div className="w-12 h-12 bg-[#F3F7F4] flex items-center justify-center">
            <FileText size={21} className="text-[#16A34A]" />
          </div>

          <h2 className="mt-6 text-xl font-bold text-slate-900">
            Your content library
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-500 max-w-xl">
            Your articles will appear here. You will be able to create,
            edit, save drafts, and publish content to the public Insights
            page.
          </p>

          <p className="mt-6 text-xs text-slate-400">
            Content management is the next step.
          </p>
        </section>
        <div className='text-xl font-bold'>Further Edits Comming Sooooooon!!!!!!!!!</div>
      </div>

    </main>
  );
}