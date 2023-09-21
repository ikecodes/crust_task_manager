import React from 'react';
import {View, StyleSheet} from 'react-native';
import {monoChrome} from '../../theme/colors';

const GeneralLayout: React.FC<{
  childrenNoPadding?: JSX.Element;
  children?: JSX.Element | JSX.Element[];
}> = ({childrenNoPadding, children}) => {
  return (
    <View style={[Styles.safeArea]}>
      <View>{childrenNoPadding}</View>
      <View style={[Styles.withPadding]}>{children}</View>
    </View>
  );
};

export default GeneralLayout;

const Styles = StyleSheet.create({
  withPadding: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: monoChrome.white,
  },
  safeArea: {
    height: '100%',
    flex: 1,
    position: 'relative',
  },
});
