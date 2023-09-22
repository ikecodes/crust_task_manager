import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import BottomModal from './BottomModal';
import {monoChrome} from '../../theme/colors';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/Ionicons';

const OptionalBottomModal: React.FC<{
  modalVisible: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
  height?: string;
}> = ({modalVisible, closeModal, children, height}) => {
  return (
    <BottomModal
      isVisible={modalVisible}
      onToggle={() => {
        closeModal(!modalVisible);
      }}
      style={[
        styles.modalView,
        {
          height: height ?? '50%',
        },
      ]}>
      <TouchableOpacity
        onPress={() => {
          closeModal(!modalVisible);
        }}
        style={tw`items-end pr-5 pt-5`}>
        <Icon name="close" size={30} />
      </TouchableOpacity>
      {children}
    </BottomModal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    width: '100%',
    backgroundColor: monoChrome.white,
    overflow: 'hidden',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default OptionalBottomModal;
