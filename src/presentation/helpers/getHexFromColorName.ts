import colorMapping from '@/presentation/assets/colors/colors.json';
import Colors from './colors';

type ColorMapping = {
  [key: string]: string;
};

const getHexFromColorName = (colorName: string, alpha = 1): string => {
  const colors: ColorMapping = colorMapping;
  const color = colors.hasOwnProperty(colorName)
    ? colors[colorName]
    : Colors.WHITE;
  return `${color}${getHexadecimalAlpha(alpha)}`;
};

const getHexadecimalAlpha = (alpha: number): string => {
  return Math.round(alpha * 255).toString(16);
};

export default getHexFromColorName;
