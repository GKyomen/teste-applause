import React from 'react';
import Svg, { Path } from 'react-native-svg';

type ChevronRightIconProps = {
  size?: number;
  color?: string;
};

export const ChevronRightIcon = ({ size = 24, color = '#1E2543' }: ChevronRightIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path 
      d="M9 18L15 12L9 6" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </Svg>
);
