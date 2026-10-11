'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto max-w-lg py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">Erreur</p>
      <h2 className="mt-3 text-3xl font-black text-slate-900">Une erreur s’est produite.</h2>
      <button onClick={() => reset()} className="mt-6 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">
        Réessayer
      </button>
    </div>
  );
}
