import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock saving logic
        console.log("Saving to Git (Mock):", formData);

        // In reality, this would trigger an API or download
        const blob = new Blob([JSON.stringify(formData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `contact_${Date.now()}.json`;
        // link.click(); // Optional auto-download

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
                        className="absolute bottom-20 right-0 w-80 md:w-96 glass-panel overflow-hidden border-mint/30 shadow-2xl"
                    >
                        {submitted ? (
                            <div className="p-12 text-center">
                                <div className="w-16 h-16 bg-mint/10 text-mint rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-8 h-8" />
                                </div>
                                <h4 className="text-forest font-display font-bold text-xl mb-2">Transmission Received</h4>
                                <p className="text-forest/60 text-sm">Data encrypted \u0026 logged successfully.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h4 className="text-forest font-display font-bold text-lg">Direct Channel</h4>
                                        <p className="text-[10px] tracking-widest text-moss uppercase font-bold">Secure Communication</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="text-forest/30 hover:text-forest transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <input
                                            required
                                            type="text"
                                            placeholder="IDENTIFIER (NAME)"
                                            className="w-full bg-forest/5 border border-forest/5 p-4 text-xs font-bold tracking-widest text-forest placeholder:text-forest/20 focus:outline-none focus:border-mint/30 transition-all"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            required
                                            type="email"
                                            placeholder="TERMINAL (EMAIL)"
                                            className="w-full bg-forest/5 border border-forest/5 p-4 text-xs font-bold tracking-widest text-forest placeholder:text-forest/20 focus:outline-none focus:border-mint/30 transition-all"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            required
                                            rows="4"
                                            placeholder="PAYLOAD (MESSAGE)"
                                            className="w-full bg-forest/5 border border-forest/5 p-4 text-xs font-bold tracking-widest text-forest placeholder:text-forest/20 focus:outline-none focus:border-mint/30 transition-all resize-none"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full mt-8 bg-forest text-sage-50 p-4 text-[10px] tracking-[0.4em] uppercase font-black hover:bg-mint hover:text-forest transition-all duration-500 flex items-center justify-center gap-4 group"
                                >
                                    Transmit Package
                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl ${isOpen ? 'bg-forest rotate-90' : 'bg-mint hover:scale-110'}`}
            >
                {isOpen ? <X className="text-sage-50 w-6 h-6" /> : <MessageSquare className="text-forest w-6 h-6" />}
            </button>
        </div>
    );
};

export default ContactForm;
