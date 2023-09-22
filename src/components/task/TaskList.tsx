import {View, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import TaskCard from './TaskCard';
import {ITask} from '../../ts/interfaces';

const TaskList = () => {
  const {tasks} = useSelector((state: any) => state.tasks);
  return (
    <View>
      {/* <Text style={tw`text-lg font-semibold italic underline`}>TODO</Text> */}
      <ScrollView>
        {tasks.map((task: ITask) => (
          <TaskCard
            key={task.id}
            id={task.id}
            createdAt={task.createdAt}
            title={task.title}
            description={task.description}
            isCompleted={task.isCompleted}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TaskList;
