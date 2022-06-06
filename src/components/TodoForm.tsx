import React from "react";

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {
  const ref = React.useRef<HTMLInputElement>(null)


  const keyPressEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value)
      ref.current!.value = ""
    }
  }

  return (
    <div className="imput-field mt2">
      <input
        ref={ref}
        type="text"
        id="title"
        placeholder="Запиши дело сюда"
        onKeyPress={keyPressEnter}
      />
      <label htmlFor="title" className="active">
        Запиши дело сюда
      </label>
    </div>
  );
};
