import SpaydaImage from './SpaydaImage';
import SpeechBubble from './SpeechBubble';
import { DEFAULT_IMAGE_URL } from '@/utils/constants';

interface SpaydaPageProps {
  imageAlt?: string;
  imageTitle?: string;
  imageSrc?: string;
  speechText?: string;
  speechPosition?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  speechAnimated?: boolean;
  className?: string;
}

/**
 * SpaydaPage Component
 * Combines SpaydaImage and SpeechBubble in a responsive, centered layout
 * 
 * Features:
 * - Responsive centering on all screen sizes
 * - Default props for easy use
 * - Flexible positioning of speech bubble
 * - Proper semantic structure
 */
const SpaydaPage = ({
  imageAlt = 'Spayda Man - The Friendly Neighborhood Web Hero spinning webs of awesome content',
  imageTitle = 'Spayda Man Hero Image',
  imageSrc = DEFAULT_IMAGE_URL,
  speechText = "Hey there! I'm Spayda Man, ready to spin some awesome web content!",
  speechPosition = 'top',
  speechAnimated = true,
  className = '',
}: SpaydaPageProps) => {
  return (
    <div className={`spayda-page-container ${className}`}>
      <div className="spayda-page-content">
        {/* Speech Bubble positioned above image */}
        {speechPosition === 'top' && (
          <SpeechBubble
            text={speechText}
            position={speechPosition}
            animated={speechAnimated}
          />
        )}

        {/* Spayda Image centered */}
        <SpaydaImage
          src={imageSrc}
          alt={imageAlt}
          title={imageTitle}
        />

        {/* Speech Bubble positioned below image */}
        {speechPosition === 'bottom' && (
          <SpeechBubble
            text={speechText}
            position={speechPosition}
            animated={speechAnimated}
          />
        )}

        {/* Speech Bubble positioned to the left */}
        {speechPosition === 'left' && (
          <div className="spayda-page-horizontal-layout">
            <SpeechBubble
              text={speechText}
              position={speechPosition}
              animated={speechAnimated}
            />
            <SpaydaImage
              src={imageSrc}
              alt={imageAlt}
              title={imageTitle}
            />
          </div>
        )}

        {/* Speech Bubble positioned to the right */}
        {speechPosition === 'right' && (
          <div className="spayda-page-horizontal-layout">
            <SpaydaImage
              src={imageSrc}
              alt={imageAlt}
              title={imageTitle}
            />
            <SpeechBubble
              text={speechText}
              position={speechPosition}
              animated={speechAnimated}
            />
          </div>
        )}

        {/* Speech Bubble centered with image below */}
        {speechPosition === 'center' && (
          <>
            <SpeechBubble
              text={speechText}
              position={speechPosition}
              animated={speechAnimated}
            />
            <SpaydaImage
              src={imageSrc}
              alt={imageAlt}
              title={imageTitle}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SpaydaPage;
