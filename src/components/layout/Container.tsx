import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Container({ children, className = '', narrow = false }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-5 sm:px-6 md:px-12 ${narrow ? 'max-w-narrow' : 'max-w-site'} ${className}`}>
      {children}
    </div>
  );
}
