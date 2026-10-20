import { Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { restaurantData } from '../../data/restaurant';

const iconMap: Record<string, React.ElementType> = {
  Instagram,
  WhatsApp: MessageCircle,
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
            onClick={(e) => {
              if (s.url === '#') e.preventDefault();
            }}
            className="text-ivory-dim hover:text-sage hover:-translate-y-0.5 hover:scale-110 active:scale-95 transition-[color,transform] duration-180 ease-luxury"
            aria-label={s.name}
          >
            {Icon && <Icon size={18} strokeWidth={1.5} />}
          </a>
        );
      })}
    </div>
  );
}
