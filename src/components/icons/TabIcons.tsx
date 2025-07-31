import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

type TabIconProps = {
  color: string;
  size?: number;
  focused?: boolean;
};

const AnimatedTabIcon = ({ children, focused }: { children: React.ReactNode; focused?: boolean }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: focused ? 1.2 : 1,
      useNativeDriver: true,
      tension: 300,
      friction: 10,
    }).start();
  }, [focused, scaleAnim]);

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      {children}
    </Animated.View>
  );
};

export const HomeIcon = ({ color, size = 20, focused }: TabIconProps) => (
  <AnimatedTabIcon focused={focused}>
    <Svg width={size} height={size} viewBox="0 0 18 19" fill="none">
      <Path 
        d="M1 9.45271V14.8007C1 15.9208 1 16.4812 1.21799 16.909C1.40973 17.2854 1.71547 17.591 2.0918 17.7828C2.5192 18.0006 3.07899 18.0006 4.19691 18.0006H13.8031C14.921 18.0006 15.48 18.0006 15.9074 17.7828C16.2837 17.591 16.5905 17.2854 16.7822 16.909C17 16.4816 17 15.9221 17 14.8041V9.45271C17 8.91838 16.9995 8.65106 16.9346 8.40242C16.877 8.18208 16.7825 7.97356 16.6546 7.78513C16.5102 7.5725 16.3096 7.39618 15.9074 7.04431L11.1074 2.84431C10.3608 2.19103 9.98751 1.86455 9.56738 1.74031C9.19719 1.63083 8.80261 1.63083 8.43242 1.74031C8.01261 1.86446 7.63985 2.19063 6.89436 2.84292L2.09277 7.04432C1.69064 7.39618 1.49004 7.5725 1.3457 7.78513C1.21779 7.97356 1.12255 8.18208 1.06497 8.40242C1 8.65106 1 8.91837 1 9.45271Z" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  </AnimatedTabIcon>
);

export const MissionsIcon = ({ color, size = 20, focused }: TabIconProps) => (
  <AnimatedTabIcon focused={focused}>
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path 
        d="M14 1.93552C12.795 1.33671 11.4368 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10C19 9.66199 18.9814 9.32833 18.9451 9M19 3L10 12L7 9" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  </AnimatedTabIcon>
);

export const GoalsIcon = ({ color, size = 20, focused }: TabIconProps) => (
  <AnimatedTabIcon focused={focused}>
    <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
      <Circle cx="12.5" cy="12" r="9" stroke={color} strokeWidth="2"/>
      <Circle cx="12.5" cy="12" r="4.5" stroke={color} strokeWidth="2"/>
      <Circle cx="12.5" cy="12" r="1.5" fill={color}/>
    </Svg>
  </AnimatedTabIcon>
);

export const ExperiencesIcon = ({ color, size = 20, focused }: TabIconProps) => (
  <AnimatedTabIcon focused={focused}>
    <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
      <Path 
        d="M22.5 18H2.5C2.5 19.0609 2.92143 20.0783 3.67157 20.8284C4.42172 21.5786 5.43913 22 6.5 22H18.5C19.5609 22 20.5783 21.5786 21.3284 20.8284C22.0786 20.0783 22.5 19.0609 22.5 18Z" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M21.5 14L10.5 2L3.5 14H21.5Z" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M10.5 2V18" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  </AnimatedTabIcon>
);

export const MenuIcon = ({ color, size = 20, focused }: TabIconProps) => (
  <AnimatedTabIcon focused={focused}>
    <Svg width={size} height={size} viewBox="0 0 19 14" fill="none">
      <Path 
        d="M1.5 7H17.5M1.5 13H17.5M1.5 1H17.5" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  </AnimatedTabIcon>
);
