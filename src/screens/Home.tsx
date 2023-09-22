import React, {useState} from 'react';
import GeneralLayout from '../components/shared/GeneralLayout';
import tw from 'twrnc';
import {FAB} from 'react-native-paper';
import {monoChrome, primaryColor} from '../theme/colors';
import Headers from '../components/shared/Header';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import EmptyState from '../components/shared/EmptyState';
import OptionalBottomModal from '../components/modals/OptionalBottomModal';
import AddTaskForm from '../components/task/AddTaskForm';
import TaskList from '../components/task/TaskList';
import BackButtonHeader from '../components/shared/BackButtonHeader';
import {logOut} from '../slices/userSlice';
const Home = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const {tasks} = useSelector((state: any) => state.tasks);
  return (
    <GeneralLayout
      childrenNoPadding={
        <BackButtonHeader
          onBackPress={() => {
            dispatch(logOut());
          }}
        />
      }>
      <Headers text={`TODO ${moment(new Date()).format('MMMM Do YYYY')}`} />
      {tasks.length ? <TaskList /> : <EmptyState />}

      <OptionalBottomModal
        modalVisible={showModal}
        closeModal={setShowModal}
        height="60%">
        <AddTaskForm setShowModal={setShowModal} />
      </OptionalBottomModal>
      <FAB
        icon="plus"
        color={monoChrome.white}
        style={tw`absolute bottom-10 right-5 rounded-full bg-[${primaryColor.primaryBase}] `}
        onPress={() => setShowModal(true)}
      />
    </GeneralLayout>
  );
};

export default Home;
