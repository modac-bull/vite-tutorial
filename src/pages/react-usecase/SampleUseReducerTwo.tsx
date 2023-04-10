import React, { useState, useReducer } from "react";

import AddTask from "@components/react-sample/sample-reducer/AddTask";
import TaskList from "@components/react-sample/sample-reducer/TaskList";
import { TaskType } from "@/components/react-sample/sample-reducer/sample";

// export default function SampleUseReducerTwo() {
//   const [tasks, setTasks] = useState(initialTasks);

//   function handleAddTask(text: string) {
//     setTasks([
//       ...tasks,
//       {
//         id: nextId++,
//         text: text,
//         done: false,
//       },
//     ]);
//   }

//   function handleChangeTask(task: TaskType) {
//     setTasks(
//       tasks.map((t) => {
//         if (t.id === task.id) {
//           return task;
//         } else {
//           return t;
//         }
//       })
//     );
//   }

//   function handleDeleteTask(taskId: number) {
//     setTasks(tasks.filter((t) => t.id !== taskId));
//   }

//   return (
//     <>
//       <h1>Prague itinerary</h1>
//       <AddTask onAddTask={handleAddTask} />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

export enum TaskActionType {
  ADD_TASK = ''
}
interface AddedAction {
  type: "added";
  id: number;
  text: string;
  done: boolean;
}
interface ChangedAction {
  type: "changed";
  id: number;
  text: string;
  task: { id: number };
}
interface DeletedAction {
  type: "deleted";
  id: number;
  text: string;
}

interface DefaultAction {
  type: null | undefined;
}

export type TasksAction =
  | AddedAction
  | ChangedAction
  | DeletedAction
  | DefaultAction;

function tasksReducer(tasks: TaskType[], action: TasksAction) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default function SampleUseReducerTwo() {
  // const [tasks, setTasks] = useState(initialTasks);
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask() {
    /* 
  dispatch({ // action 이라고 함})
  
  */
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task: TaskType) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
