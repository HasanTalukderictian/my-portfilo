const SectionTitle = ({ title, subtitle }) => (
    <div className="mb-12 max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
        {subtitle && <p className="mt-3 text-lg text-slate-600">{subtitle}</p>}
    </div>
);

export default SectionTitle;