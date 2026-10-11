export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <h1 className="text-3xl font-black text-slate-900">Politique de confidentialité</h1>
      <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft text-sm leading-7 text-slate-600">
        <p>Souqi protège les données personnelles des utilisateurs et n’utilise pas les informations du client à des fins non nécessaires.</p>
        <p className="mt-4">Les données de paiement ne sont pas stockées localement. Les intégrations de paiement futur seront sécurisées et auditées.</p>
      </div>
    </div>
  );
}
