import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import {monoChrome} from '../../theme/colors';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const BottomModal = ({children, isVisible, style, onToggle}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onToggle}
      onSwipeComplete={onToggle}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      animationOutTiming={200}
      swipeDirection={['down']}
      useNativeDriver={true}
      style={[Styles.modal]}>
      <View style={[Styles.innerWrapper, style]}>{children}</View>
    </Modal>
  );
};

export default BottomModal;

const Styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  innerWrapper: {
    backgroundColor: monoChrome.white,
  },
});
