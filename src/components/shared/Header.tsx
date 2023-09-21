import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {monoChrome, grayColor, primaryColor} from '../../theme/colors';

interface Props {
  text: string;
  subText?: string;
  loader?: boolean;
  maxHeader?: boolean;
  loaderWidth?: string;
}
const Headers: React.FC<Props> = ({
  text,
  subText,
  loader,
  loaderWidth,
  maxHeader,
}) => {
  return (
    <View style={tw`flex`}>
      <Text
        style={tw`text-3xl mt-3 w-[${
          maxHeader ? '100%' : '70%'
        }]  font-semibold text-[${monoChrome.black}]`}>
        {text}
      </Text>
      <Text style={tw`mt-2 text-base text-[${grayColor.neutral800}]`}>
        {subText}
      </Text>
      {loader && (
        <View style={tw`mt-3 h-1.5 rounded-xl bg-[${primaryColor.primary10}]`}>
          <View
            style={tw`h-1.5 rounded-xl bg-[${primaryColor.primaryBase}] w-[${
              loaderWidth ? `${loaderWidth}%` : '40%'
            }]`}
          />
        </View>
      )}
    </View>
  );
};

export default Headers;
