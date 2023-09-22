import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import tw from 'twrnc';
import {ITask} from '../../ts/interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {errorColor, pendingColor, successColor} from '../../theme/colors';
import {useDispatch} from 'react-redux';
import {checkTask, deleteTask} from '../../slices/tasksSlice';
import Toast from 'react-native-toast-message';
const TaskCard: React.FC<ITask> = ({id, isCompleted, title, description}) => {
  const dispatch = useDispatch();
  function handlePress() {}

  function handleDeletTask() {
    dispatch(deleteTask(id));
    Toast.show({
      type: 'success',
      text1: 'Task deleted',
    });
  }
  function handleCheckTask() {
    dispatch(checkTask(id));
    Toast.show({
      type: 'success',
      text1: 'Task updated',
    });
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <Card
        style={[
          tw`rounded-xl my-2 mx-1 p-3 bg-white`,
          {
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.05,
            shadowRadius: 10,
            elevation: 5,
          },
        ]}>
        <View style={tw`flex-row items-start`}>
          <Pressable
            onPress={handleCheckTask}
            style={tw`mr-2 h-6 w-6 border-2 border-[${
              isCompleted ? successColor.success0 : pendingColor.pending0
            }] rounded`}>
            {isCompleted ? (
              <Icon
                name="checkmark-done"
                size={20}
                color={successColor.success0}
              />
            ) : null}
          </Pressable>

          <View style={tw`flex-1`}>
            <View>
              <Text style={tw`font-semibold text-base`}>{title}</Text>
              <Text style={tw`text-base`}>{description}</Text>
            </View>

            <Pressable onPress={handleDeletTask} style={tw`items-end`}>
              <Icon name="trash" size={22} color={errorColor.error0} />
            </Pressable>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default TaskCard;
