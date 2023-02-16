import React from "react";

const IncompleteTodos = (props) => {
  // 分割代入で引数を全て使える状態にする
  const { Todos, onClickcomplete, onClickdelete } = props;

  return (
    <div className="incomplete_area">
      <p className="title">未完了のTO DO</p>
      <ul>
        {/* <li>に対して、配列のキーを持たせる */}
        {Todos.map((todo, index) => {
          return (
            <li key="{todo}">
              <div className="list_row">
                <p>{todo}</p>

                {/* アロー関数のような記述 */}
                {/* { ()=>関数(引数) }・・・関数が引数を持つ場合の記述 */}
                <button onClick={() => onClickcomplete(index)}>完了</button>
                <button onClick={() => onClickdelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IncompleteTodos;
