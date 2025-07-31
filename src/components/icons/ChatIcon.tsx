import React from 'react';
import Svg, { Path } from 'react-native-svg';

type ChatIconProps = {
  size?: number;
};

export const ChatIcon = ({ size = 32 }: ChatIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <Path 
      d="M11.9 24C13.8086 24.9791 16.0041 25.2443 18.0909 24.7478C20.1777 24.2514 22.0186 23.0259 23.2818 21.2922C24.545 19.5586 25.1474 17.4308 24.9806 15.2922C24.8137 13.1537 23.8886 11.145 22.3718 9.62824C20.855 8.11146 18.8464 7.1863 16.7078 7.01946C14.5693 6.85263 12.4415 7.45509 10.7078 8.71829C8.97417 9.98149 7.74869 11.8224 7.25222 13.9092C6.75575 15.996 7.02094 18.1915 8 20.1L6 26L11.9 24Z" 
      stroke="#707070" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <Path 
      d="M12 16H12.01" 
      stroke="#707070" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <Path 
      d="M16 16H16.01" 
      stroke="#707070" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <Path 
      d="M20 16H20.01" 
      stroke="#707070" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </Svg>
);
