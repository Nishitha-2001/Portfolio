import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setIsOpen(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-20 right-0 w-80 md:w-96 glass-card border-gold-rich/20 overflow-hidden shadow-2xl p-8"
                    >
                        {submitted ? (
                            <div className="py-12 text-center">
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="w-20 h-20 bg-emerald-deep text-gold-rich rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
                                >
                                    <CheckCircle className="w-10 h-10" />
                                </motion.div>
                                <h4 className="text-emerald-deep font-serif font-black text-2xl mb-2 italic">Message Received</h4>
                                <p className="text-emerald-rich/60 text-sm font-light">I'll get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h4 className="text-emerald-deep font-serif font-black text-2xl italic">Direct Line</h4>
                                        <p className="text-[9px] tracking-[0.4em] text-gold-rich uppercase font-bold">Secure Gateway</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="text-emerald-deep/30 hover:text-gold-rich transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    {['name', 'email', 'message'].map((field) => (
                                        <div key={field}>
                                            {field === 'message' ? (
                                                <textarea
                                                    required
                                                    rows="4"
                                                    placeholder={field.toUpperCase()}
                                                    className="w-full bg-emerald-deep/5 border border-emerald-deep/10 p-5 text-[11px] font-bold tracking-widest text-emerald-deep placeholder:text-emerald-deep/20 focus:outline-none focus:border-gold-rich/40 transition-all resize-none rounded-2xl"
                                                    value={formData[field]}
                                                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                                                />
                                            ) : (
                                                <input
                                                    required
                                                    type={field === 'email' ? 'email' : 'text'}
                                                    placeholder={field.toUpperCase()}
                                                    className="w-full bg-emerald-deep/5 border border-emerald-deep/10 p-5 text-[11px] font-bold tracking-widest text-emerald-deep placeholder:text-emerald-deep/20 focus:outline-none focus:border-gold-rich/40 transition-all rounded-2xl"
                                                    value={formData[field]}
                                                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full py-5 bg-emerald-deep text-gold-champagne text-[11px] tracking-[0.5em] uppercase font-bold hover:bg-gold-rich hover:text-emerald-deep transition-all duration-500 flex items-center justify-center gap-4 rounded-2xl shadow-xl shadow-emerald-deep/10"
                                >
                                    Send Connection
                                    <Send className="w-4 h-4" />
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${isOpen ? 'bg-emerald-deep' : 'bg-gold-rich'}`}
            >
                {isOpen ? <X className="text-gold-champagne w-7 h-7" /> : <MessageSquare className="text-emerald-deep w-7 h-7" />}
            </motion.button>
        </div>
    );
};

export default ContactForm;
