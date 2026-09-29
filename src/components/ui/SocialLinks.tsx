import { Instagram, Facebook, Twitter } from 'lucide-react';
import { restaurantData } from '../../data/restaurant';

const iconMap: Record<string, React.ElementType> = {
  Instagram,
  Facebook,
  Twitter,
};

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {restaurantData.social.map((s) => {
        const Icon = iconMap[s.name];
        return (
          <a
            key={s.name}
            href={s.url}
            className="text-ivory-dim hover:text-sage transition-colors duration-400"
            aria-label={s.name}
          >
            {Icon && <Icon size={18} strokeWidth={1.5} />}
          </a>
        );
      })}
    </div>
  );
}
