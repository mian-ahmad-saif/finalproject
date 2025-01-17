import { StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const themeStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    bgColor: {
      backgroundColor: theme === 'light' ? '#FFFFFF' : 'darkgray',
    },
    textColor: {
      color: theme === 'light' ? '#1E1E1E' : '#FFFFFF',
    },
    button: {
      textColor: {
        color: theme === 'light' ? '#FFFFFF' : '#000000',
      },
      bgColor: {
        backgroundColor: theme === 'light' ? '#0000FF' : '#6161FF',
      }
    }
  });
};

export default themeStyles;
