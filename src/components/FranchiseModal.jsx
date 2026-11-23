import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, MessageCircle, Phone, Sparkles } from 'lucide-react';

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

    // Format text for WhatsApp & mailto
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

    // Open WhatsApp in new tab
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative w-full max-w-2xl rounded-3xl bg-[#1d1617] border border-beige/20 shadow-2xl text-beige overflow-hidden my-auto max-h-[92vh] flex flex-col z-10"
          >
            {/* Header */}
            <div className="relative px-6 py-5 sm:px-8 sm:py-6 border-b border-beige/10 bg-[#251d1e] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-beige/10 border border-beige/15 text-amber-300">
                  <Sparkles className="size-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl text-beige font-semibold tracking-wide">
                    Franchise Enquiry Form
                  </h3>
                  <p className="text-xs sm:text-sm text-beige/60">
                    Apply to partner with <strong>दोghut</strong>
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full bg-beige/10 hover:bg-beige/20 text-beige/80 hover:text-beige transition-colors"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {isSubmitted ? (
                /* Success Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-5"
                >
                  <div className="inline-flex items-center justify-center size-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="size-10" />
                  </div>
                  <h4 className="font-heading text-2xl sm:text-3xl text-beige font-medium">
                    Application Sent Successfully!
                  </h4>
                  <p className="text-beige/70 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your franchise enquiry for{' '}
                    <strong>{formData.cityArea}</strong> has been forwarded directly to our expansion team.
                  </p>
                  <p className="text-xs text-beige/50">
                    We will review your profile and reach out via phone at <strong>{formData.phone}</strong>.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWaMessageUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-lg transition-all"
                    >
                      <MessageCircle className="size-4" />
                      Chat on WhatsApp Now
                    </a>
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-beige/10 hover:bg-beige/20 text-beige font-medium transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-200 text-sm font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* 1. Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-beige/80 mb-2">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl bg-beige/5 border border-beige/15 text-beige placeholder:text-beige/30 focus:outline-none focus:border-beige/50 transition-colors text-sm sm:text-base"
                    />
                  </div>

                  {/* 2 & 3. Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-beige/80 mb-2">
                        Contact Number <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="e.g. 9990603332"
                        className="w-full px-4 py-3 rounded-xl bg-beige/5 border border-beige/15 text-beige placeholder:text-beige/30 focus:outline-none focus:border-beige/50 transition-colors text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-beige/80 mb-2">
                        Email ID <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="e.g. name@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-beige/5 border border-beige/15 text-beige placeholder:text-beige/30 focus:outline-none focus:border-beige/50 transition-colors text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  {/* 4. Proposed city / area */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-beige/80 mb-2">
                      Proposed city / area for the outlet <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.cityArea}
                      onChange={(e) => handleChange('cityArea', e.target.value)}
                      placeholder="e.g. South Delhi, Noida Sector 18, Ahmedabad SG Highway"
                      className="w-full px-4 py-3 rounded-xl bg-beige/5 border border-beige/15 text-beige placeholder:text-beige/30 focus:outline-none focus:border-beige/50 transition-colors text-sm sm:text-base"
                    />
                  </div>

                  {/* 5. Location in mind? */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-beige/80 mb-2.5">
                      Do you already have a location in mind? <span className="text-rose-400">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Yes', 'No'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleChange('hasLocation', opt)}
                          className={`py-3 px-4 rounded-xl border text-sm sm:text-base font-medium transition-all ${
                            formData.hasLocation === opt
                              ? 'bg-beige text-brand border-beige shadow-md font-semibold'
                              : 'bg-beige/5 border-beige/15 text-beige/80 hover:bg-beige/10'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 6. Investment capacity */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-beige/80 mb-2.5">
                      Investment capacity for this venture <span className="text-rose-400">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['₹25 to ₹35 Lakhs', 'Above ₹40 Lakhs'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleChange('investmentCapacity', opt)}
                          className={`py-3 px-4 rounded-xl border text-sm sm:text-base font-medium transition-all ${
                            formData.investmentCapacity === opt
                              ? 'bg-beige text-brand border-beige shadow-md font-semibold'
                              : 'bg-beige/5 border-beige/15 text-beige/80 hover:bg-beige/10'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 7. Source of investment */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-beige/80 mb-2.5">
                      Source of investment <span className="text-rose-400">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Self-funded', 'Investor Backed'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleChange('sourceOfInvestment', opt)}
                          className={`py-3 px-4 rounded-xl border text-sm sm:text-base font-medium transition-all ${
                            formData.sourceOfInvestment === opt
                              ? 'bg-beige text-brand border-beige shadow-md font-semibold'
                              : 'bg-beige/5 border-beige/15 text-beige/80 hover:bg-beige/10'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 8. Prior business experience */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-beige/80 mb-2">
                      Have you invested in or operated a business before? (Yes / No – If yes, brief details){' '}
                      <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.businessExperience}
                      onChange={(e) => handleChange('businessExperience', e.target.value)}
                      placeholder="e.g. Yes, running a retail/F&B business since 3 years / No, this will be my first venture"
                      className="w-full px-4 py-3 rounded-xl bg-beige/5 border border-beige/15 text-beige placeholder:text-beige/30 focus:outline-none focus:border-beige/50 transition-colors text-sm sm:text-base resize-none"
                    />
                  </div>

                  {/* 9. Operational involvement */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-beige/80 mb-2.5">
                      How involved do you plan to be in day-to-day operations?{' '}
                      <span className="text-rose-400">*</span>
                    </label>
                    <div className="grid grid-cols-1 gap-2.5">
                      {[
                        'Fully hands-on',
                        'Managed by a professional team or family members',
                        'Not sure',
                      ].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleChange('operationalInvolvement', opt)}
                          className={`py-3 px-4 rounded-xl border text-sm sm:text-base text-left font-medium transition-all ${
                            formData.operationalInvolvement === opt
                              ? 'bg-beige text-brand border-beige shadow-md font-semibold'
                              : 'bg-beige/5 border-beige/15 text-beige/80 hover:bg-beige/10'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 10. Start timeline */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-beige/80 mb-2.5">
                      If approved, when can you start the setup process?{' '}
                      <span className="text-rose-400">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['Immediately', '1-2 months', '3-6 months'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleChange('setupTimeline', opt)}
                          className={`py-3 px-3 rounded-xl border text-xs sm:text-sm text-center font-medium transition-all ${
                            formData.setupTimeline === opt
                              ? 'bg-beige text-brand border-beige shadow-md font-semibold'
                              : 'bg-beige/5 border-beige/15 text-beige/80 hover:bg-beige/10'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-beige hover:bg-white text-brand font-semibold text-base sm:text-lg shadow-xl shadow-black/40 transition-all active:scale-[0.99]"
                    >
                      <span>Submit Franchise Application</span>
                      <Send className="size-4" />
                    </button>
                    <p className="text-center text-xs text-beige/40 mt-3">
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
