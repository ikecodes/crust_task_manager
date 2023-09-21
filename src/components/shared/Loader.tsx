import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import {primaryColor} from '../../theme/colors';

const Loader: React.FC<{
  color?: string;
}> = ({color}) => {
  return (
    <View style={[styles.loading]}>
      <ActivityIndicator
        style={styles.loading}
        size="large"
        color={color || primaryColor.primaryBase}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
