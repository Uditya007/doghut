import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';

const initialFormData = {
  fullName: '',
  phone: '',
  email: '',
  cityArea: '',
  hasLocation: '',
  investmentCapacity: '',
  sourceOfInvestment: '',
  businessExperience: '',
  operationalInvolvement: '',
  setupTimeline: '',
};

export default function FranchiseModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
      setIsSubmitted(false);
      setErrorMsg('');
    }
  }, [isOpen, onClose]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.fullName.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.cityArea.trim() ||
      !formData.hasLocation ||
      !formData.investmentCapacity ||
      !formData.sourceOfInvestment ||
      !formData.businessExperience.trim() ||
      !formData.operationalInvolvement ||
      !formData.setupTimeline
    ) {
      setErrorMsg('Please answer all required questions marked with *');
      return;
    }

    setIsSubmitted(true);

    // Format text for WhatsApp
    const textMessage = `*New Franchise Enquiry - दोghut*%0A%0A` +
      `*Full Name:* ${encodeURIComponent(formData.fullName.trim())}%0A` +
      `*Contact Number:* ${encodeURIComponent(formData.phone.trim())}%0A` +
      `*Email ID:* ${encodeURIComponent(formData.email.trim())}%0A` +
      `*Proposed City / Area:* ${encodeURIComponent(formData.cityArea.trim())}%0A` +
      `*Location in Mind:* ${encodeURIComponent(formData.hasLocation)}%0A` +
      `*Investment Capacity:* ${encodeURIComponent(formData.investmentCapacity)}%0A` +
      `*Source of Investment:* ${encodeURIComponent(formData.sourceOfInvestment)}%0A` +
      `*Prior Business Experience:* ${encodeURIComponent(formData.businessExperience.trim())}%0A` +
      `*Operational Involvement:* ${encodeURIComponent(formData.operationalInvolvement)}%0A` +
      `*Setup Timeline:* ${encodeURIComponent(formData.setupTimeline)}`;

    // Open WhatsApp directly
    const waUrl = `https://wa.me/919990603332?text=${textMessage}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const getWaMessageUrl = () => {
    const textMessage = `*New Franchise Enquiry - दोghut*%0A%0A` +
      `*Full Name:* ${encodeURIComponent(formData.fullName.trim())}%0A` +
      `*Contact Number:* ${encodeURIComponent(formData.phone.trim())}%0A` +
      `*Email ID:* ${encodeURIComponent(formData.email.trim())}%0A` +
      `*Proposed City / Area:* ${encodeURIComponent(formData.cityArea.trim())}%0A` +
      `*Location in Mind:* ${encodeURIComponent(formData.hasLocation)}%0A` +
      `*Investment Capacity:* ${encodeURIComponent(formData.investmentCapacity)}%0A` +
      `*Source of Investment:* ${encodeURIComponent(formData.sourceOfInvestment)}%0A` +
      `*Prior Business Experience:* ${encodeURIComponent(formData.businessExperience.trim())}%0A` +
      `*Operational Involvement:* ${encodeURIComponent(formData.operationalInvolvement)}%0A` +
      `*Setup Timeline:* ${encodeURIComponent(formData.setupTimeline)}`;
    return `https://wa.me/919990603332?text=${textMessage}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col sm:items-center sm:justify-center sm:p-4 overflow-hidden">
          {/* Backdrop for desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container: Fullscreen on mobile, rounded card on tablet/desktop */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative w-full h-[100dvh] sm:h-auto sm:max-h-[90vh] sm:max-w-2xl sm:rounded-3xl rounded-none bg-gradient-to-b from-[#4a030b] via-[#3a0208] to-[#250105] sm:border sm:border-beige/25 shadow-2xl text-beige flex flex-col overflow-hidden z-10"
          >
            {/* Sticky Header */}
            <div className="sticky top-0 z-20 px-4 py-3.5 sm:px-8 sm:py-5 border-b border-brand-dark/80 bg-[#42030a]/95 backdrop-blur-md flex items-center justify-between shrink-0 shadow-lg">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="p-1.5 sm:p-2 rounded-xl bg-beige/10 border border-beige/15 text-amber-300">
                  <Sparkles className="size-4 sm:size-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-2xl text-beige font-semibold tracking-wide leading-tight">
                    Franchise Enquiry Form
                  </h3>
                  <p className="text-[11px] sm:text-xs text-beige/70">
                    Apply to partner with <strong>दोghut</strong>
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full bg-beige/10 hover:bg-beige/20 active:bg-beige/30 text-beige transition-colors touch-manipulation"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-4 pb-12 sm:p-8 sm:pb-8 space-y-5 sm:space-y-6">
              {isSubmitted ? (
                /* Success Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4 sm:space-y-5"
                >
                  <div className="inline-flex items-center justify-center size-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="size-10" />
                  </div>
                  <h4 className="font-heading text-2xl sm:text-3xl text-beige font-medium">
                    Application Sent!
                  </h4>
                  <p className="text-beige/80 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your franchise enquiry for{' '}
                    <strong>{formData.cityArea}</strong> has been forwarded directly to our team.
                  </p>
                  <p className="text-xs text-beige/60">
                    We will review your details and contact you at <strong>{formData.phone}</strong>.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWaMessageUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-lg transition-all active:scale-[0.98]"
                    >
                      <MessageCircle className="size-4" />
                      Chat on WhatsApp Now
                    </a>
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-beige/10 hover:bg-beige/20 text-beige font-medium transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Form Fields in Brand Red Scheme */
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 text-left">
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-200 text-xs sm:text-sm font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* 1. Full Name */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-beige/85 mb-1.5">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl bg-[#200104]/80 border border-brand/50 text-beige placeholder:text-beige/35 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40 transition-colors text-base"
                    />
                  </div>

                  {/* 2 & 3. Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-beige/85 mb-1.5">
                        Contact Number <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="e.g. 9990603332"
                        className="w-full px-4 py-3 rounded-xl bg-[#200104]/80 border border-brand/50 text-beige placeholder:text-beige/35 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40 transition-colors text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-beige/85 mb-1.5">
                        Email ID <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="e.g. name@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#200104]/80 border border-brand/50 text-beige placeholder:text-beige/35 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40 transition-colors text-base"
                      />
                    </div>
                  </div>

                  {/* 4. Proposed city / area */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-beige/85 mb-1.5">
                      Proposed city / area for the outlet <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.cityArea}
                      onChange={(e) => handleChange('cityArea', e.target.value)}
                      placeholder="e.g. South Delhi, Noida Sector 18, Ahmedabad"
                      className="w-full px-4 py-3 rounded-xl bg-[#200104]/80 border border-brand/50 text-beige placeholder:text-beige/35 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40 transition-colors text-base"
                    />
                  </div>

                  {/* 5. Location in mind? */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-beige/85 mb-2">
                      Do you already have a location in mind? <span className="text-amber-400">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                      {['Yes', 'No'].map((opt) => {
                        const active = formData.hasLocation === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleChange('hasLocation', opt)}
                            className={`py-3 px-4 rounded-xl text-sm sm:text-base font-medium transition-all active:scale-[0.98] cursor-pointer ${
                              active
                                ? 'bg-beige text-brand border-2 border-beige font-bold shadow-lg shadow-black/40'
                                : 'bg-[#200104]/80 border border-brand/50 text-beige/85 hover:bg-brand/40'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 6. Investment capacity */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-beige/85 mb-2">
                      Investment capacity for this venture <span className="text-amber-400">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      {['₹25 to ₹35 Lakhs', 'Above ₹40 Lakhs'].map((opt) => {
                        const active = formData.investmentCapacity === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleChange('investmentCapacity', opt)}
                            className={`py-3 px-4 rounded-xl text-sm sm:text-base font-medium transition-all active:scale-[0.98] cursor-pointer ${
                              active
                                ? 'bg-beige text-brand border-2 border-beige font-bold shadow-lg shadow-black/40'
                                : 'bg-[#200104]/80 border border-brand/50 text-beige/85 hover:bg-brand/40'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 7. Source of investment */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-beige/85 mb-2">
                      Source of investment <span className="text-amber-400">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                      {['Self-funded', 'Investor Backed'].map((opt) => {
                        const active = formData.sourceOfInvestment === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleChange('sourceOfInvestment', opt)}
                            className={`py-3 px-4 rounded-xl text-sm sm:text-base font-medium transition-all active:scale-[0.98] cursor-pointer ${
                              active
                                ? 'bg-beige text-brand border-2 border-beige font-bold shadow-lg shadow-black/40'
                                : 'bg-[#200104]/80 border border-brand/50 text-beige/85 hover:bg-brand/40'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 8. Prior business experience */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-beige/85 mb-1.5 leading-snug">
                      Have you invested in or operated a business before? (Yes / No – If yes, brief details){' '}
                      <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.businessExperience}
                      onChange={(e) => handleChange('businessExperience', e.target.value)}
                      placeholder="e.g. Yes, running a retail/F&B business since 3 years / No, this will be my first venture"
                      className="w-full px-4 py-3 rounded-xl bg-[#200104]/80 border border-brand/50 text-beige placeholder:text-beige/35 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40 transition-colors text-base resize-none"
                    />
                  </div>

                  {/* 9. Operational involvement */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-beige/85 mb-2">
                      How involved do you plan to be in day-to-day operations?{' '}
                      <span className="text-amber-400">*</span>
                    </label>
                    <div className="grid grid-cols-1 gap-2.5">
                      {[
                        'Fully hands-on',
                        'Managed by a professional team or family members',
                        'Not sure',
                      ].map((opt) => {
                        const active = formData.operationalInvolvement === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleChange('operationalInvolvement', opt)}
                            className={`py-3 px-4 rounded-xl text-left text-sm sm:text-base font-medium transition-all active:scale-[0.98] cursor-pointer ${
                              active
                                ? 'bg-beige text-brand border-2 border-beige font-bold shadow-lg shadow-black/40'
                                : 'bg-[#200104]/80 border border-brand/50 text-beige/85 hover:bg-brand/40'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 10. Setup timeline */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-beige/85 mb-2">
                      If approved, when can you start the setup process?{' '}
                      <span className="text-amber-400">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {['Immediately', '1-2 months', '3-6 months'].map((opt) => {
                        const active = formData.setupTimeline === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleChange('setupTimeline', opt)}
                            className={`py-3 px-2 sm:px-3 rounded-xl text-xs sm:text-sm text-center font-medium transition-all active:scale-[0.98] cursor-pointer ${
                              active
                                ? 'bg-beige text-brand border-2 border-beige font-bold shadow-lg shadow-black/40'
                                : 'bg-[#200104]/80 border border-brand/50 text-beige/85 hover:bg-brand/40'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 sm:pt-4">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-beige hover:bg-white text-brand font-bold text-base sm:text-lg shadow-xl shadow-black/50 transition-all active:scale-[0.98] cursor-pointer"
                    >
                      <span>Submit Franchise Application</span>
                      <Send className="size-4" />
                    </button>
                    <p className="text-center text-xs text-beige/50 mt-2.5">
                      Direct WhatsApp enquiry to +91 99906 03332
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
