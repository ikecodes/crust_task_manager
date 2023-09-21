import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import {primaryColor} from '../../theme/colors';

const EmptyState = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <View style={tw`items-center`}>
        <FA5Icon name="tasks" size={80} color={primaryColor.primary20} />
        <Text style={tw`text-base text-center mt-3`}>
          You currenty have no tasks, click on the add button to add new
        </Text>
      </View>
    </View>
  );
};

export default EmptyState;
