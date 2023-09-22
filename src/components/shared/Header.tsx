import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {grayColor, pendingColor, successColor} from '../../theme/colors';

interface Props {
  text: any;
  maxHeader?: boolean;
}
const Headers: React.FC<Props> = ({text}) => {
  return (
    <View style={tw`flex`}>
      <Text
        style={tw`text-lg mt-3 italic font-semibold text-[${grayColor.neutral300}]`}>
        {text}
      </Text>
      <View style={tw`flex-row items-center my-2`}>
        <View style={tw`flex-row items-center mr-2`}>
          <View
            style={tw`mr-2 h-3 w-3 bg-[${successColor.success0}] rounded`}
          />
          <Text>Completed</Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <View
            style={tw`mr-2 h-3 w-3 bg-[${pendingColor.pending0}] rounded`}
          />
          <Text>Pending</Text>
        </View>
      </View>
    </View>
  );
};

export default Headers;
