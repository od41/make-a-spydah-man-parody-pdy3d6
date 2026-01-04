import { SPAYDA_MAN_THEME } from '@/utils/constants';

interface SpeechBubbleProps {
  text?: string;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  animated?: boolean;
  className?: string;
}

const SpeechBubble = ({
  text = "Hey there! I'm Spayda Man, your friendly neighborhood web hero!",
  position = 'top',
  animated = true,
  className = '',
}: SpeechBubbleProps) => {
  const positionClasses = {
    top: 'speech-bubble-top',
    bottom: 'speech-bubble-bottom',
    left: 'speech-bubble-left',
    right: 'speech-bubble-right',
    center: 'speech-bubble-center',
  };

  return (
    <div
      className={`speech-bubble ${positionClasses[position]} ${animated ? 'speech-bubble-animated' : ''} ${className}`}
      style={{
        backgroundColor: SPAYDA_MAN_THEME.colors.primary,
        borderColor: SPAYDA_MAN_THEME.colors.accent,
      }}
    >
      <p className="speech-bubble-text">{text}</p>
      <div className="speech-bubble-tail" />
    </div>
  );
};

export default SpeechBubble;
