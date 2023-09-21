import {View, Text} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {primaryColor} from '../../theme/colors';
import PrimaryButton from '../../components/button/PrimaryButton';
import InputField from '../../components/inputs/InputField';
import {useDispatch} from 'react-redux';
import Headers from '../../components/shared/Header';
import {setUser} from '../../slices/userSlice';
import GeneralLayout from '../../components/shared/GeneralLayout';
import Toast from 'react-native-toast-message';
import {Formik} from 'formik';
import {signInSchema} from '../../utils/validationSchemas';

const SignIn = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [showErr, setShowErr] = useState(false);

  return (
    <GeneralLayout style={tw`flex-1 bg-white px-5 pt-10`}>
      <View style={tw`mt-10`}>
        <Headers text={'Login to your account'} subText={'Personal details'} />
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={values => {
            setIsLoading(true);
            const authData = {
              username: values.username,
              isLoggedIn: true,
            };
            dispatch(setUser(authData));
            Toast.show({
              type: 'success',
              text1: 'Login successful',
            });
            setIsLoading(false);
            console.log(values);
          }}
          validationSchema={signInSchema}
          validateOnMount>
          {({errors, setFieldValue, handleSubmit, values}) => {
            return (
              <>
                <View style={tw`my-5`}>
                  <InputField
                    label={'Username'}
                    value={values.username}
                    onChangeText={text => setFieldValue('username', text)}
                    placeholder={'Enter your Username'}
                    error={showErr ? errors.username : ''}
                  />
                  <InputField
                    label={'Password'}
                    value={values.password}
                    onChangeText={text => setFieldValue('password', text)}
                    placeholder={'Enter your password'}
                    error={showErr ? errors.password : ''}
                  />
                  <View style={tw`items-end`}>
                    <Text
                      style={tw`underline font-semibold text-[${primaryColor.primaryBase}]`}
                      onPress={() => {}}>
                      Forgot Password
                    </Text>
                  </View>
                </View>
                <PrimaryButton
                  text={'Sign In'}
                  onPress={() => {
                    const hasError = errors.username || errors.password;
                    if (hasError) return setShowErr(true);
                    handleSubmit();
                  }}
                  loading={isLoading}
                />
              </>
            );
          }}
        </Formik>

        <Text style={tw`text-center mt-3 `}>
          Don&quot;t have an account?{' '}
          <Text
            style={tw`underline font-semibold text-[${primaryColor.primaryBase}]`}
            onPress={() => {}}>
            Sign Up
          </Text>
        </Text>
      </View>
    </GeneralLayout>
  );
};

export default SignIn;
