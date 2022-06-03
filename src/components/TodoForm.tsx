import React from "react";

export const TodoForm: React.FunctionComponent = () => {
  const [title, setTitle] = React.useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const keyPressEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log(title)
      setTitle('')
    }
  }

  return (
    <div className="imput-field mt2">
      <input
      onChange={changeHandler}
        value={title}
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
