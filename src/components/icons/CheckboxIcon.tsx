import { colors } from "@/styles/colors";
import Svg, { Path } from "react-native-svg";

interface CheckboxIconProps {
  checked: boolean;
  size?: number;
}

export const CheckboxIcon = ({ checked, size = 20 }: CheckboxIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {checked && (
        <Path
          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
          fill={colors.primary}
        />
    )}
    <Path
      d="M19 3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2z"
      stroke={checked ? colors.primary : colors.quaternary}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);