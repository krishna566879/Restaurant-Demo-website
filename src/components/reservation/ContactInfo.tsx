import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { restaurantData } from '../../data/restaurant';
import ImageReveal from '../ui/ImageReveal';

export default function ContactInfo() {
  return (
    <div>
      <div className="aspect-[4/3] mb-8">
        <ImageReveal
          src="https://images.unsplash.com/photo-1592861956120-e524fc739696?w=1200&q=80"
          alt="NOIR & SAGE Table Setting"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-6 mb-12">
        <div className="flex flex-row gap-3 items-start">
          <MapPin className="text-sage w-5 h-5 mt-1 shrink-0" />
          <span className="text-ivory-dim">{restaurantData.address}</span>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <Phone className="text-sage w-5 h-5 shrink-0" />
          <span className="text-ivory-dim">{restaurantData.phone}</span>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <Mail className="text-sage w-5 h-5 shrink-0" />
          <span className="text-ivory-dim">{restaurantData.email}</span>
        </div>
      </div>

      <div>
        <h3 className="font-serif text-lg mb-4 text-ivory">Opening Hours</h3>
        <ul className="space-y-3">
          {restaurantData.hours.map((schedule, idx) => (
            <li key={idx} className="flex justify-between items-center border-b border-noir-700/50 pb-2">
              <span className="text-ivory">{schedule.days}</span>
              <span className="text-ivory-dim">{schedule.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
