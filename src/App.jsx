import React, { useState } from "react";
import InputTodo from "./components/InputTodo";
import IncompleteTodos from "./components/IncompleteTodos";
import CompleteTodos from "./components/CompleteTodos";
import "./styles.css";

const App = () => {
  const [TodoText, setTodoText] = useState("");

  // リストを配列として扱いたい→map/filter
  // 未完了のリストの配列
  const [inCompleteTodos, setinCompleteTodos] = useState([
    // "default_1",
    // "default_2"
  ]);

  // 完了のリストの配列
  const [CompleteList, setCompleteList] = useState([
    // "default_3"
  ]);

  // イベントが発生した要素を指定したい場合の引数(e.target)の記述の仕方
  // （定型文として、コピペして使う。）
  // 今回は、ToDoのvalueに変更があった場合に検知しその要素を指定する
  const onchangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    // 追加欄を空白にして追加ボタンを押した場合に、処理を行わない記述
    // if文の処理が一行のみの場合、{}を省略できる。
    if (TodoText === "") return;

    const newTodos = [...inCompleteTodos, TodoText];
    setinCompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos];

    // .splice(引数1,引数2) : 配列を消去するメソッド
    // 引数1は、配列の順番(0,1,2・・・)で新しいものから消去される
    // → 今回は、indexで消去したい配列に番号を充てて指定している
    // 引数2は、1回のイベントで消去する配列の数
    newTodos.splice(index, 1);
    setinCompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...inCompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...CompleteList, inCompleteTodos[index]];
    setinCompleteTodos(newIncompleteTodos);
    setCompleteList(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...CompleteList];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...inCompleteTodos, CompleteList[index]];
    setinCompleteTodos(newIncompleteTodos);
    setCompleteList(newCompleteTodos);
  };

  return (
    <>
      {/* 最上部に記述の、import inputTodo from "./components/InputTodo";で呼び出した */}
      {/* input関数をコンポーネントから呼び出す記述 */}
      <InputTodo
        TodoText={TodoText}
        onchange={onchangeTodoText}
        onClick={onClickAdd}
      />

      <IncompleteTodos
        Todos={inCompleteTodos}
        onClickcomplete={onClickComplete}
        onClickdelete={onClickDelete}
      />

      <CompleteTodos todos={CompleteList} onClickback={onClickBack} />
    </>
  );
};

export default App;
