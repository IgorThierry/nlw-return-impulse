import React from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  isLoading: boolean;
}

export function Button({ isLoading, disabled, ...rest }: Props) {
  disabled = isLoading;
  return (
    <TouchableOpacity style={styles.container} {...rest} disabled={disabled}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.text_on_brand_color} />
      ) : (
        <Text style={styles.title}>Enviar Feedback</Text>
      )}
    </TouchableOpacity>
  );
}
