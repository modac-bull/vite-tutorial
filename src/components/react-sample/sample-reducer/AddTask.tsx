import { useState } from "react";

export type OnAddTask = (taskText: string) => void;
type AddTaskProps = {
  onAddTask: OnAddTask;
};

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [text, setText] = useState("");
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}
