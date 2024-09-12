import * as React from 'react';
import { alpha, Box, hexToRgb, useTheme } from '@material-ui/core';
import bg_hkde from 'images/bg_hkde.png';

/**
 * Layout with background image
 */
function Layout({ children }) {
  return (
    <BackgroundImage>
      <Box
        sx={{
          minHeight: '100vh',
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {children}
      </Box>
    </BackgroundImage>
  );
}

/**
 * Clones child component and adds a background image styles.
 */
function BackgroundImage({ children }) {
  const { light, dark } = useTheme().palette.primary;

  const lightRgb = hexToRgb(light);
  const darkRgb = hexToRgb(dark);

  return (
    <Box
      clone
      sx={{
        background: `
          linear-gradient(
            to right bottom, 
            ${alpha(lightRgb, 0.15)}, 
            ${alpha(darkRgb, 0)}), 
          url(${bg_hkde})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </Box>
  );
}

export { Layout };
