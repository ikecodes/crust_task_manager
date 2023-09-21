import {View, Text} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {primaryColor} from '../../theme/colors';
import PrimaryButton from '../../components/button/PrimaryButton';
import InputField from '../../components/inputs/InputField';
import {useResetPassword} from '../../hooks/auth.hook';
import {onboardingRouteStack} from '../../constants/routes';
import Headers from '../../components/shared/Header';
import GeneralLayout from '../../components/shared/GeneralLayout';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

const ForgotPassword = ({navigation}) => {
  const {mutate, isLoading} = useResetPassword();
  const [email, setEmail] = useState('');
  const [showErr, setShowErr] = useState(false);

  function login() {
    if (!email) return setShowErr(true);
    const formData = {
      email,
    };
    mutate(formData, {
      onSuccess: () => {
        navigation.navigate(onboardingRouteStack.ResetPassword, {email});
      },
      onError: e => {
        console.log(e);
        Toast.show({
          type: 'error',
          text1: e?.response?.data?.message ?? 'Something went wrong',
        });
      },
    });
  }

  return (
    <GeneralLayout style={tw`flex-1 bg-white px-5 pt-10`}>
      <View style={tw`mt-10`}>
        <Headers
          text={'Forgot Password'}
          subText={'Enter email address to reset your account'}
        />
        <View style={tw`my-5`}>
          <InputField
            label={'Email Address'}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder={'Valid email address'}
            keyboardType={'email-address'}
            error={showErr && !email ? 'error' : ''}
          />
        </View>
        <PrimaryButton
          text={'Verify Email'}
          onPress={login}
          loading={isLoading}
        />
        <Text style={tw`text-center mt-3 `}>
          already have an account?{' '}
          <Text
            style={tw`underline font-semibold text-[${primaryColor.primaryBase}]`}
            onPress={() => navigation.navigate(onboardingRouteStack.SignIn)}>
            Sign In
          </Text>
        </Text>
      </View>
    </GeneralLayout>
  );
};

export default ForgotPassword;
