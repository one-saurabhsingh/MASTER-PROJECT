import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="mlg"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      // marginLeft="2"
      zIndex={'overlay'}
      position={"fixed"}
      top={"25px"}
      right={"20px"}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
