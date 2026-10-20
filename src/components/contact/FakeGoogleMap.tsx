import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Bookmark, Share2, Star, ExternalLink, Compass, Layers, Check, Copy } from 'lucide-react';
import { restaurantData } from '../../data/restaurant';

export default function FakeGoogleMap() {
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mapType, setMapType] = useState<'roadmap' | 'satellite'>('roadmap');
  const [showDirectionsModal, setShowDirectionsModal] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.origin + '/contact');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="relative w-full rounded-none border border-noir-700 bg-noir-900 overflow-hidden shadow-2xl flex flex-col">
      {/* Top Google Maps bar */}
      <div className="bg-noir-900/95 backdrop-blur border-b border-noir-700 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-sage/20 border border-sage/40 flex items-center justify-center shrink-0 mt-0.5">
            <MapPin className="w-5 h-5 text-sage" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-serif text-lg text-ivory tracking-wide">{restaurantData.name}</span>
              <span className="px-2 py-0.5 text-[10px] font-sans uppercase tracking-widest bg-sage/20 text-champagne border border-sage/30">
                Demo Location
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1 text-xs text-ivory-dim flex-wrap">
              <div className="flex items-center text-champagne">
                <Star className="w-3.5 h-3.5 fill-champagne text-champagne" />
                <span className="ml-1 font-medium text-ivory">4.9</span>
              </div>
              <span>(418 reviews)</span>
              <span>•</span>
              <span>Fine Dining • Indore</span>
            </div>
          </div>
        </div>

        {/* Action pills */}
        <div className="flex items-center gap-2 shrink-0 flex-wrap">
          <button
            type="button"
            onClick={() => setShowDirectionsModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans uppercase tracking-wider text-noir-950 bg-champagne hover:bg-ivory transition-colors duration-180 ease-luxury font-medium"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Directions</span>
          </button>
          
          <button
            type="button"
            onClick={() => setIsSaved(!isSaved)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans uppercase tracking-wider border transition-colors duration-180 ease-luxury ${
              isSaved 
                ? 'bg-sage/20 border-sage text-sage' 
                : 'border-noir-700 text-ivory-dim hover:text-ivory hover:border-noir-600'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-sage' : ''}`} />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans uppercase tracking-wider border border-noir-700 text-ivory-dim hover:text-ivory hover:border-noir-600 transition-colors duration-180 ease-luxury"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-sage" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Share'}</span>
          </button>
        </div>
      </div>

      {/* Map display container */}
      <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] bg-noir-950 overflow-hidden">
        {/* Interactive Google Map embed with dark styling */}
        <iframe
          title="Google Maps Location - NOIR & SAGE Indore"
          src={`https://maps.google.com/maps?q=Vijay+Nagar,+Indore,+Madhya+Pradesh&t=${mapType === 'satellite' ? 'k' : 'm'}&z=15&ie=UTF8&iwloc=&output=embed`}
          className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-125 brightness-90 grayscale-[25%]"
          loading="lazy"
          allowFullScreen
          aria-hidden="false"
        />

        {/* Map UI Overlay floating card */}
        <div className="absolute top-4 left-4 z-10 max-w-[280px] bg-noir-950/90 backdrop-blur-md border border-noir-700 p-3 shadow-lg pointer-events-auto hidden sm:block">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[11px] font-sans uppercase tracking-widest text-sage font-medium">Google Maps</span>
            <span className="text-[10px] text-ivory-muted">Indore, MP</span>
          </div>
          <p className="text-xs text-ivory font-serif mb-1">{restaurantData.address}</p>
          <p className="text-[11px] text-ivory-muted">Coord: 22.7533° N, 75.8937° E</p>
          <div className="mt-2 pt-2 border-t border-noir-800 flex items-center justify-between text-[11px] text-champagne">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
              Open from 6:00 PM
            </span>
            <span className="text-ivory-dim text-[10px]">Valet Available</span>
          </div>
        </div>

        {/* Floating Map Layer Switcher & Compass */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => setMapType(mapType === 'roadmap' ? 'satellite' : 'roadmap')}
            className="p-2 bg-noir-950/90 hover:bg-noir-900 border border-noir-700 text-ivory hover:text-champagne transition-colors shadow-md"
            title="Toggle Satellite / Default View"
            aria-label="Toggle Satellite / Default View"
          >
            <Layers className="w-4 h-4" />
          </button>
          <div className="p-2 bg-noir-950/90 border border-noir-700 text-sage shadow-md flex items-center justify-center">
            <Compass className="w-4 h-4 animate-spin-slow" />
          </div>
        </div>

        {/* Watermark badge */}
        <div className="absolute bottom-3 left-3 z-10 bg-noir-950/85 backdrop-blur border border-noir-800 px-2.5 py-1 text-[10px] text-ivory-muted tracking-wider">
          Demo Map View • Conceptual Venue Location
        </div>
      </div>

      {/* Map Footer Bar with landmark indicators */}
      <div className="bg-noir-900 border-t border-noir-700 px-4 py-3 text-xs text-ivory-dim flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-ivory font-medium">Nearby Reference (Demo):</span>
          <span className="text-ivory-muted">Radisson Blu (450m)</span>
          <span>•</span>
          <span className="text-ivory-muted">C21 Mall (800m)</span>
          <span>•</span>
          <span className="text-ivory-muted">Sayaji Indore (1.2km)</span>
        </div>
        <div className="text-[11px] text-ivory-muted">
          Map Data ©2026 Google Simulation
        </div>
      </div>

      {/* Directions Modal */}
      <AnimatePresence>
        {showDirectionsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="bg-noir-900 border border-noir-700 max-w-md w-full p-6 text-ivory shadow-2xl space-y-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-champagne">Simulated Navigation</span>
                  <h3 className="font-serif text-xl mt-1">Directions to NOIR & SAGE</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowDirectionsModal(false)}
                  className="text-ivory-dim hover:text-ivory text-xl p-1"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-ivory-dim leading-relaxed">
                Destination: <strong className="text-ivory">42 Willow Street, Scheme 54, Vijay Nagar, Indore</strong>.
              </p>

              <div className="bg-noir-800 border border-noir-700 p-3 space-y-2 text-xs text-ivory-dim">
                <div className="flex items-center justify-between text-ivory">
                  <span>Fastest route via AB Road / MR-10</span>
                  <span className="text-sage font-medium">12 mins (Demo)</span>
                </div>
                <p>Private guest valet stands at the front courtyard entrance.</p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(restaurantData.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-4 bg-champagne text-noir-950 font-sans text-xs uppercase tracking-wider font-semibold hover:bg-ivory transition-colors"
                >
                  Open in Google Maps
                </a>
                <button
                  type="button"
                  onClick={() => setShowDirectionsModal(false)}
                  className="py-2.5 px-4 border border-noir-700 text-xs font-sans uppercase tracking-wider hover:border-noir-500 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
