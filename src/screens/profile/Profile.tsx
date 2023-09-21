import {Text, View} from 'react-native';
import React from 'react';
import GeneralLayout from '../../components/shared/GeneralLayout';
import tw from 'twrnc';
import {grayColor, monoChrome, primaryColor} from '../../theme/colors';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import {logOut} from '../../slices/userSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const {username} = useSelector((state: any) => state.user);
  const sections: {name: string; screen?: never | string; icon: any}[] = [
    {
      icon: (
        <Icon
          name="exit"
          size={20}
          color={monoChrome.black}
          style={tw`font-bold`}
        />
      ),
      name: 'Logout',
    },
  ];
  return (
    <View style={tw`flex-1`}>
      <View
        style={tw`h-[30%] flex items-center justify-center bg-[${primaryColor.primaryBase}]`}>
        <View
          style={tw`mb-2 h-20 w-20 bg-[${monoChrome.white}] flex items-center justify-center rounded-full`}>
          <Text
            style={tw`text-2xl font-semibold text-[${primaryColor.primaryBase}]`}>
            {username?.charAt(0)}
          </Text>
        </View>
        <Text style={tw`text-2xl font-semibold text-white`}>{username}</Text>
      </View>
      <GeneralLayout>
        <View style={tw`mt-5`}>
          {sections.map((section, i) => (
            <TouchableOpacity
              style={tw`flex-row items-center my-3`}
              key={i}
              onPress={() => dispatch(logOut())}>
              {section.icon}
              <Text
                style={tw`ml-3 text-base text-[${grayColor.neutral600}] font-semibold`}>
                {section.name}
              </Text>
              <MIcon
                name="arrow-forward-ios"
                size={12}
                color={monoChrome.black}
                style={tw`font-bold ml-auto`}
              />
            </TouchableOpacity>
          ))}
        </View>
      </GeneralLayout>
    </View>
  );
};

export default Profile;
