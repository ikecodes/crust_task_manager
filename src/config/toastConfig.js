import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {primaryColor, warningColor} from '../theme/colors';

export const toastConfig = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
  success: ({text1}) => (
    <View
      style={{
        width: '90%',
        backgroundColor: primaryColor.primaryBase,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 10,
      }}>
      <View style={{}}>
        <Icon
          name={'checkmark-circle'}
          style={{marginRight: 10}}
          size={30}
          color={'white'}
        />
      </View>
      <View style={{margin: 10, width: '80%'}}>
        <Text style={{fontSize: 15}}>{text1}</Text>
      </View>
    </View>
  ),
  /*
      Overwrite 'error' type,
      by modifying the existing `BaseToast` component #EB2B4A
    */
  error: ({text1}) => (
    <View
      style={{
        width: '90%',
        backgroundColor: warningColor.warning0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 10,
      }}>
      <View style={{}}>
        <Icon
          name={'close-circle'}
          style={{marginRight: 10}}
          size={30}
          color={'white'}
        />
      </View>
      <View style={{margin: 10, width: '80%'}}>
        <Text style={{fontSize: 15, color: 'white'}}>{text1}</Text>
      </View>
    </View>
  ),
};
