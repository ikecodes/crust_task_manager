import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import InputField from '../inputs/InputField';
import PrimaryButton from '../button/PrimaryButton';
import {v4 as uuidv4} from 'uuid';
import {useDispatch} from 'react-redux';
import {addTask} from '../../slices/tasksSlice';
import Toast from 'react-native-toast-message';
const AddTaskForm: React.FC<{
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({setShowModal}) => {
  const dispatch = useDispatch();
  const [showErr, setShowErr] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function createTask() {
    if (!title || !description) return setShowErr(true);
    const task = {
      id: uuidv4(),
      title,
      description,
      createdAt: `${Date.now()}`,
      isCompleted: false,
    };

    dispatch(addTask(task));
    Toast.show({
      type: 'success',
      text1: 'Task added',
    });
    setShowModal(false);
  }
  return (
    <ScrollView style={tw`py-2 px-5`}>
      <InputField
        label={'Title'}
        value={title}
        onChangeText={text => setTitle(text)}
        placeholder={'Enter task title'}
        error={showErr && !title ? 'Input title' : ''}
      />
      <InputField
        label={'Description'}
        value={description}
        isTextArea
        onChangeText={text => setDescription(text)}
        placeholder={'Enter task description'}
        error={showErr && !description ? 'Input description' : ''}
      />
      <View style={tw`mt-3`} />
      <PrimaryButton text="Add" onPress={createTask} />
    </ScrollView>
  );
};

export default AddTaskForm;
