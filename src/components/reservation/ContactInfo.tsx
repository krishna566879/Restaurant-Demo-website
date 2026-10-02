import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { restaurantData } from '../../data/restaurant';
import ImageReveal from '../ui/ImageReveal';
import { DEFAULT_VIEWPORT, staggerContainer, fadeUpItem, fadeUpSubtle } from '../../utils/motion';

export default function ContactInfo() {
  return (
    <motion.div
      variants={staggerContainer(0.07, 0.04)}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
    >
      <div className="aspect-[4/3] mb-8">
        <ImageReveal
          src="https://images.unsplash.com/photo-1592861956120-e524fc739696?w=1200&q=80"
          width={1200}
          height={900}
          alt="NOIR & SAGE Table Setting"
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div variants={fadeUpItem} className="space-y-6 mb-12">
        <div className="group flex flex-row gap-3 items-start transition-transform duration-180 ease-luxury hover:translate-x-0.5">
          <MapPin className="text-sage group-hover:text-champagne transition-colors duration-180 ease-luxury w-5 h-5 mt-1 shrink-0" />
          <span className="text-ivory-dim group-hover:text-ivory transition-colors duration-180 ease-luxury">{restaurantData.address}</span>
        </div>
        <div className="group flex flex-row gap-3 items-center transition-transform duration-180 ease-luxury hover:translate-x-0.5">
          <Phone className="text-sage group-hover:text-champagne transition-colors duration-180 ease-luxury w-5 h-5 shrink-0" />
          <span className="text-ivory-dim group-hover:text-ivory transition-colors duration-180 ease-luxury">{restaurantData.phone}</span>
        </div>
        <div className="group flex flex-row gap-3 items-center transition-transform duration-180 ease-luxury hover:translate-x-0.5">
          <Mail className="text-sage group-hover:text-champagne transition-colors duration-180 ease-luxury w-5 h-5 shrink-0" />
          <span className="text-ivory-dim group-hover:text-ivory transition-colors duration-180 ease-luxury break-all sm:break-normal">{restaurantData.email}</span>
        </div>
      </motion.div>

      <motion.div variants={fadeUpSubtle}>
        <h2 className="font-serif text-lg mb-4 text-ivory">Opening Hours</h2>
        <ul className="space-y-3">
          {restaurantData.hours.map((schedule, idx) => (
            <li
              key={idx}
              className="group flex flex-wrap justify-between items-center gap-2 border-b border-noir-700/50 hover:border-sage/35 transition-colors duration-180 ease-luxury pb-2 text-sm sm:text-base"
            >
              <span className="text-ivory group-hover:text-champagne transition-colors duration-180 ease-luxury">{schedule.days}</span>
              <span className="text-ivory-dim">{schedule.time}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
