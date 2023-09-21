import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {grayColor, monoChrome} from '../../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
interface Props {
  onBackPress?: () => void;
  text?: string;
}
const BackButtonHeader: React.FC<Props> = ({onBackPress, text}) => {
  const navigate = useNavigation();

  return (
    <View style={[Styles.wrapper]}>
      <TouchableOpacity
        onPress={() => {
          onBackPress ? onBackPress() : navigate.goBack();
        }}>
        <Icon name="arrow-back" size={25} color={grayColor.neutral500} />
      </TouchableOpacity>
      {!!text && (
        <View>
          <Text numberOfLines={1} style={Styles.text}>
            {text}
          </Text>
        </View>
      )}
    </View>
  );
};

export default React.memo(BackButtonHeader);

const Styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: monoChrome.white,
  },
  trailingIcon: {
    width: 40,
  },
  text: {
    fontWeight: '700',
    color: grayColor.neutral500,
    fontSize: 16,
    flex: 1,
  },
});
