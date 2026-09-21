import { useState } from 'react';
import SectionTitle from './SectionTitle';
import { socials } from './data';

const FORMSPREE_URL = 'https://formspree.io/f/mqpapova';

const inputClass =
    'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700/20';

const Contact = ({ id = 'contact' }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch(FORMSPREE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }

        setTimeout(() => setStatus('idle'), 4000);
    };

    return (
        <section id={id} className="bg-white px-5 py-20">
            <div className="mx-auto max-w-6xl">
                <SectionTitle title="Let's work together" subtitle="Have a project in mind? Send a message and I'll reply within 24 hours." />

                <div className="grid gap-14 md:grid-cols-2">
                    {/* Contact info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Phone</p>
                                <a href="tel:+8801768712230" className="font-semibold text-slate-900 hover:text-teal-700">
                                    +880 1768712230
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Email</p>
                                <a href="mailto:hasantalukdercou@gmail.com" className="font-semibold text-slate-900 hover:text-teal-700">
                                    hasantalukdercou@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="pt-4">
                            <p className="mb-3 text-sm text-slate-500">Find me online</p>
                            <div className="flex gap-3">
                                {socials.map((s) => (
                                    <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.name} className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-teal-700 hover:bg-teal-700 hover:text-white">
                                        <i className={s.icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 md:p-8">
                        {status === 'success' && (
                            <div role="status" className="mb-5 rounded-xl bg-teal-100 p-3 text-center font-medium text-teal-800">
                                Message sent. Thank you!
                            </div>
                        )}
                        {status === 'error' && (
                            <div role="alert" className="mb-5 rounded-xl bg-red-100 p-3 text-center font-medium text-red-800">
                                Something went wrong. Please try again.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">Your name</label>
                                <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className={inputClass} />
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">Email address</label>
                                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="hello@example.com" required className={inputClass} />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">Message</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project" rows="4" required className={`${inputClass} resize-none`}></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full rounded-full bg-teal-700 py-3 font-semibold text-white transition-colors hover:bg-teal-800 disabled:opacity-60"
                            >
                                {status === 'sending' ? 'Sending...' : 'Send message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;