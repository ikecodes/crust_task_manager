import React from 'react';
import GeneralLayout from '../components/shared/GeneralLayout';
import {Text, View} from 'react-native';
import tw from 'twrnc';
import {FAB} from 'react-native-paper';
import {monoChrome, primaryColor} from '../theme/colors';
import Headers from '../components/shared/Header';
import moment from 'moment';
import {useSelector} from 'react-redux';
import EmptyState from '../components/shared/EmptyState';
const Home = () => {
  const {tasks} = useSelector((state: any) => state.tasks);
  return (
    <GeneralLayout>
      <Headers text={moment(new Date()).format('MMMM Do YYYY')} />
      {tasks.length ? <View></View> : <EmptyState />}

      <FAB
        icon="plus"
        color={monoChrome.white}
        style={tw`absolute bottom-10 right-5 rounded-full bg-[${primaryColor.primaryBase}] `}
        onPress={() => console.log('Pressed')}
      />
    </GeneralLayout>
  );
};

export default Home;
