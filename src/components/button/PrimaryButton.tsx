import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import {monoChrome, primaryColor} from '../../theme/colors';
import tw from 'twrnc';

interface Props {
  bgColor?: string;
  color?: string;
  text: string;
  outlineColor?: string;
  style?: React.CSSProperties;
  isDisabled?: boolean;
  icon?: any;
  onPress: () => void;
  loading?: boolean;
  outline?: boolean;
  bottomSticky?: boolean;
}
const PrimaryButton: React.FC<Props> = ({
  bgColor = primaryColor.primaryBase,
  color = monoChrome.white,
  text,
  style,
  isDisabled,
  icon,
  onPress = () => {},
  loading,
  outline,
  outlineColor,
  bottomSticky,
}) => {
  return (
    <Pressable
      onPress={() => {
        if (loading) return;
        onPress();
      }}
      style={[
        Styles.wrapper,
        {
          backgroundColor: isDisabled
            ? primaryColor.primaryBase
            : outline
            ? color
            : bgColor,
          borderColor: outline && bgColor,
          borderWidth: outline && 1,
          marginTop: bottomSticky && 'auto',
          marginBottom: bottomSticky && 15,
        },
        style,
      ]}>
      {loading ? (
        <View>
          <ActivityIndicator
            size="small"
            style={[Styles.text, outline ? primaryColor.primaryBase : color]}
          />
        </View>
      ) : (
        <View style={tw`flex flex-row items-center justify-center`}>
          {icon}
          <Text
            style={[
              tw`text-base`,
              Styles.text,
              {
                color: outline
                  ? outlineColor ?? primaryColor.primaryBase
                  : color,
              },
            ]}>
            {text}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default PrimaryButton;

const Styles = StyleSheet.create({
  wrapper: {
    height: 50,
    justifyContent: 'center',
    borderRadius: 12,
  },
  text: {
    color: monoChrome.white,
    textAlign: 'center',
  },
});
