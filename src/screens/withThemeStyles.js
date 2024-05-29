import React from 'react';
import themeStyles from '../styles/theme'; // Adjust the path as necessary
import { useTheme,ThemeContext } from '../context/ThemeContext';

const withThemeStyles = (WrappedComponent) => {
    return function WithThemeStyles() {
        const styles = themeStyles(useTheme); // Use the hook here

        return <WrappedComponent {...ThemeContext} themeStyles={styles} />;
    };
};

export default withThemeStyles;