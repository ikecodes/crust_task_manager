import {
  View,
  TextInput,
  Text,
  KeyboardTypeOptions,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {grayColor, warningColor} from '../../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  label: string;
  secureTextEntry?: boolean;
  placeholder: string;
  value: any;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (
    text: string,
  ) => void | React.Dispatch<React.SetStateAction<string>>;
  error?: string;
  isTextArea?: boolean;
}
const InputField: React.FC<Props> = ({
  label,
  placeholder,
  value,
  keyboardType,
  onChangeText,
  error,
  isTextArea,
  ...rest
}) => {
  const [secureEntry, setSecureEntry] = useState(true);
  return (
    <View style={tw`my-1`}>
      <Text style={tw`text-[${grayColor.neutral800}] text-sm mb-1`}>
        {label}
      </Text>

      <View
        style={tw`flex flex-row items-center border-[1px] px-3 ${
          error
            ? `border-[${warningColor.warning5}]`
            : `border-[${grayColor.neutral100}]`
        } rounded-2xl text-[${grayColor.neutral300}]`}>
        <TextInput
          numberOfLines={isTextArea ? 5 : 1}
          textAlignVertical={isTextArea ? 'top' : 'center'}
          secureTextEntry={label === 'Password' && secureEntry}
          placeholder={placeholder}
          placeholderTextColor={grayColor.neutral300}
          autoCorrect={false}
          value={value}
          style={tw`flex-1 text-base text-black ${
            Platform.OS === 'ios' ? 'h-10' : ''
          }`}
          keyboardType={keyboardType ?? 'default'}
          onChangeText={onChangeText}
          {...rest}
        />

        {label === 'Password' && (
          <Icon
            name={secureEntry ? 'eye' : 'eye-off'}
            size={20}
            color={grayColor.neutral200}
            onPress={() => setSecureEntry(prev => !prev)}
          />
        )}
      </View>
      {error ? (
        <Text style={tw`text-[${warningColor.warning5}]`}>{error}</Text>
      ) : (
        <Text />
      )}
    </View>
  );
};

export default InputField;
