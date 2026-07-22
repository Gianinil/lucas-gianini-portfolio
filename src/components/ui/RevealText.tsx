import { motion } from 'framer-motion';
import { EASE_PREMIUM } from '@/constants';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'p' | 'span';
}

/** Splits text into words and reveals them with a staggered blur/slide-up — used once, for the Hero headline. */
export function RevealText({ text, className, delay = 0, as: Tag = 'span' }: RevealTextProps) {
  const words = text.split(' ');

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="inline-block overflow-hidden pb-1 align-bottom">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: '100%', filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: '0%', filter: 'blur(0px)' }}
              transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: delay + index * 0.07 }}
            >
              {word}
              {index < words.length - 1 ? ' ' : ''}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
