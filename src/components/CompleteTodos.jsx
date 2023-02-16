import React from "react";

const CompleteTodos = (props) => {
  // 分割代入で引数を全て使える状態にする
  const { todos, onClickback } = props;

  return (
    <div className="complete_area">
      <p className="title">完了のTO DO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            // key:再レンダリングする場所を指定する際の記述
            // 動的に変化する場所に予め記述することで、処理が重くなるのを防ぐ
            <li key="{todo}">
              <div className="list_row">
                <p>{todo}</p>
                <button onClick={() => onClickback(index)}>戻る</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompleteTodos;
