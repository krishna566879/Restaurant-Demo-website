import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Instagram, Mail, MapPin, Clock, ArrowUpRight, Sparkles } from 'lucide-react';
import { restaurantData } from '../../data/restaurant';
import { DEFAULT_VIEWPORT, staggerContainer, fadeUpItem, fadeUpSubtle } from '../../utils/motion';

export default function ContactDetails() {
  return (
    <motion.div
      variants={staggerContainer(0.07, 0.04)}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      className="space-y-6"
    >
      {/* Demo Website Notice Pill */}
      <motion.div
        variants={fadeUpSubtle}
        className="bg-noir-900/90 border border-sage/30 p-4 sm:p-5 flex items-start gap-3.5"
      >
        <Sparkles className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
        <div className="text-xs text-ivory-dim leading-relaxed">
          <strong className="text-ivory font-serif uppercase tracking-wider block mb-1">
            Demo Restaurant Portfolio Notice
          </strong>
          This website is a contemporary fine dining demo. All phone numbers, WhatsApp lines, Instagram handles, and addresses are simulated for demonstration purposes.
        </div>
      </motion.div>

      {/* Main 3 Fake Channels: WhatsApp, Calling, Instagram */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* WhatsApp Card */}
        <motion.div
          variants={fadeUpItem}
          className="bg-noir-900 border border-noir-700 hover:border-sage transition-all duration-200 ease-luxury p-5 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-full bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform duration-180">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-sans uppercase tracking-widest text-emerald-400/80 bg-emerald-950/40 px-2 py-0.5 border border-emerald-500/20">
                Fast Response
              </span>
            </div>
            <h3 className="font-serif text-lg text-ivory mb-1">WhatsApp Concierge</h3>
            <p className="text-xs text-ivory-muted mb-3">
              Instant inquiries for table reservations, special menus, and private dining arrangements.
            </p>
            <div className="font-mono text-sm text-ivory tracking-wide mb-4">
              {restaurantData.whatsapp}
            </div>
          </div>
          <a
            href={restaurantData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-sans uppercase tracking-wider bg-noir-800 text-ivory hover:bg-emerald-900/40 hover:text-emerald-300 border border-noir-600 hover:border-emerald-500/50 transition-colors duration-180 ease-luxury"
          >
            <span>Message on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Calling Card */}
        <motion.div
          variants={fadeUpItem}
          className="bg-noir-900 border border-noir-700 hover:border-sage transition-all duration-200 ease-luxury p-5 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-full bg-sage/20 border border-sage/40 flex items-center justify-center text-sage group-hover:scale-105 transition-transform duration-180">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-sans uppercase tracking-widest text-champagne bg-sage/10 px-2 py-0.5 border border-sage/20">
                Direct Line
              </span>
            </div>
            <h3 className="font-serif text-lg text-ivory mb-1">Telephone Reservations</h3>
            <p className="text-xs text-ivory-muted mb-3">
              Direct host desk for evening bookings, dietary inquiries, and concierge requests.
            </p>
            <div className="space-y-1 mb-4">
              <div className="font-mono text-sm text-ivory tracking-wide">{restaurantData.phone}</div>
              <div className="font-mono text-xs text-ivory-muted">Alt: {restaurantData.phoneSecondary}</div>
            </div>
          </div>
          <a
            href={`tel:${restaurantData.phone}`}
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-sans uppercase tracking-wider bg-noir-800 text-ivory hover:bg-sage/20 hover:text-champagne border border-noir-600 hover:border-sage transition-colors duration-180 ease-luxury"
          >
            <span>Call Concierge</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Instagram Card */}
        <motion.div
          variants={fadeUpItem}
          className="bg-noir-900 border border-noir-700 hover:border-sage transition-all duration-200 ease-luxury p-5 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-full bg-rose-950/40 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:scale-105 transition-transform duration-180">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-sans uppercase tracking-widest text-rose-300/80 bg-rose-950/30 px-2 py-0.5 border border-rose-500/20">
                Official Page
              </span>
            </div>
            <h3 className="font-serif text-lg text-ivory mb-1">Instagram Official</h3>
            <p className="text-xs text-ivory-muted mb-3">
              Visual diary of seasonal dishes, wine pairings, and atmospheric dinner moments in Indore.
            </p>
            <div className="font-sans text-sm text-champagne font-medium mb-4">
              {restaurantData.instagram}
            </div>
          </div>
          <a
            href={restaurantData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-sans uppercase tracking-wider bg-noir-800 text-ivory hover:bg-rose-950/40 hover:text-rose-200 border border-noir-600 hover:border-rose-500/40 transition-colors duration-180 ease-luxury"
          >
            <span>Visit @noirandsage.indore</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Email & Media Desk Card */}
        <motion.div
          variants={fadeUpItem}
          className="bg-noir-900 border border-noir-700 hover:border-sage transition-all duration-200 ease-luxury p-5 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-full bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne group-hover:scale-105 transition-transform duration-180">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-sans uppercase tracking-widest text-ivory-dim bg-noir-800 px-2 py-0.5 border border-noir-700">
                Written Inquiries
              </span>
            </div>
            <h3 className="font-serif text-lg text-ivory mb-1">Email Concierge</h3>
            <p className="text-xs text-ivory-muted mb-3">
              For private hall buyouts, corporate dining, press features, or sommelier consultations.
            </p>
            <div className="font-mono text-xs text-ivory break-all mb-4">
              {restaurantData.email}
            </div>
          </div>
          <a
            href={`mailto:${restaurantData.email}`}
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-sans uppercase tracking-wider bg-noir-800 text-ivory hover:bg-champagne/20 hover:text-champagne border border-noir-600 hover:border-champagne/50 transition-colors duration-180 ease-luxury"
          >
            <span>Send An Email</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>

      {/* Location & Visiting Schedule Panel */}
      <motion.div variants={fadeUpItem} className="bg-noir-900 border border-noir-700 p-5 sm:p-6 space-y-5">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-sage shrink-0 mt-0.5" />
          <div>
            <h4 className="font-serif text-base text-ivory mb-1">Physical Location (Demo)</h4>
            <p className="text-sm text-ivory-dim leading-relaxed">{restaurantData.address}</p>
            <p className="text-xs text-ivory-muted mt-1">Conveniently situated in Vijay Nagar, with complimentary valet parking.</p>
          </div>
        </div>

        <div className="border-t border-noir-800 pt-4 flex items-start gap-3">
          <Clock className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
          <div className="w-full">
            <h4 className="font-serif text-base text-ivory mb-2">Service Hours</h4>
            <div className="space-y-2">
              {restaurantData.hours.map((schedule, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-xs sm:text-sm py-1 border-b border-noir-800/60 last:border-0"
                >
                  <span className="text-ivory font-medium">{schedule.days}</span>
                  <span className="text-ivory-dim font-mono">{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
