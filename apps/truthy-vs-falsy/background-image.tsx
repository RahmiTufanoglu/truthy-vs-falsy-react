import styled from 'styled-components';
import Image, { ImageProps } from 'next/image';

interface BackgroundImageProps {
  src: string;
  alt: string;
  //layout: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
  objectFit: ImageProps['objectFit'];
  objectPosition: string;
}

const StyledBackground = styled(Image)`
  z-index: -1;
`;

export default function ({
  src,
  alt,
  objectFit,
  objectPosition,
}: BackgroundImageProps) {
  return (
    <StyledBackground
      src={src}
      alt={alt}
      layout="fill"
      objectFit={objectFit}
      objectPosition={objectPosition}
    />
  );
}
