import { Link } from 'react-router-dom';
import Container from './Container';
import Divider from '../ui/Divider';
import SocialLinks from '../ui/SocialLinks';
import { restaurantData } from '../../data/restaurant';
import { navigationLinks } from '../../data/navigation';

export default function Footer() {
  return (
    <footer className="bg-noir-950 pt-section pb-8 border-t border-noir-700">
      <Container>
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-md">
            <Link to="/" className="font-serif text-3xl tracking-[0.2em] uppercase text-ivory block mb-4">
              NOIR & SAGE
            </Link>
            <p className="text-ivory-dim font-sans text-base leading-relaxed">
              {restaurantData.description}
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h3 className="font-sans text-eyebrow uppercase tracking-[0.15em] text-ivory mb-6">Navigation</h3>
              <ul className="space-y-4">
                {navigationLinks.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="text-ivory-dim hover:text-sage transition-colors font-sans text-sm">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-eyebrow uppercase tracking-[0.15em] text-ivory mb-6">Contact</h3>
              <ul className="space-y-4 text-ivory-dim font-sans text-sm">
                <li>{restaurantData.address}</li>
                <li>{restaurantData.phone}</li>
                <li>{restaurantData.email}</li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-eyebrow uppercase tracking-[0.15em] text-ivory mb-6">Hours</h3>
              <ul className="space-y-4 text-ivory-dim font-sans text-sm">
                {restaurantData.hours.map((h, i) => (
                  <li key={i}>
                    <span className="block text-ivory">{h.days}</span>
                    <span className="text-ivory-dim text-xs">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <SocialLinks />
        </div>

        <Divider className="mb-8" />

        <div className="text-center text-ivory-muted text-xs font-sans tracking-widest uppercase">
          © {new Date().getFullYear()} NOIR & SAGE. All rights reserved. Portfolio Demo.
        </div>
      </Container>
    </footer>
  );
}
