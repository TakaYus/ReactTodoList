import React from "react";

const InputTodo = (props) => {
  // 分割代入で引数を全て使える状態にする
  const { TodoText, onchange, onClick } = props;

  // jsx上での、cssの記述方法
  const style = {
    backgroundColor: "aqua",
    width: "400px",
    height: "35px",
    padding: "8px",
    margin: "8px auto",
    borderRadius: "8px"
  };

  return (
    // <div className="input_area">
    <div style={style}>
      {/* onChange:変化（→今回は、テキストの入力）を検知すると起動するメソッド */}
      <input placeholder="TO DO を追加" value={TodoText} onChange={onchange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};

export default InputTodo;
