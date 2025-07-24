import styled from "styled-components";
import { RadioButtonGroup } from "./RadioGroup";
import { TodoItem } from "./TodoItem";
import { useMemo, useState, useEffect } from "react";

const Title = styled.h1`
  color: #6200ea;
  font-size: 24px;
  margin-bottom: 20px;
`;
const Input = styled.input`
  width: 300px;
  height: 40px;
  stroke-width: 1px;
  border-width: 1px;
  stroke: #6200ea;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box; // 保证 padding 不影响整体高度
`;
const AddButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 20px;
  border-width: 1px;
  background-color: #6200ea;
  color: white;
  font-size: 16px;
  margin-left: 10px;
`;

// const Todo = {
//   id: "",
//   text: "",
//   completed: false,
// };

export const groupData = [
  { label: "全部", value: "all" },
  { label: "进行中", value: "in-progress" },
  { label: "已完成", value: "completed" },
];

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(() => {
    const localTodo = localStorage.getItem("todos");
    try {
      if (localTodo) {
        const todoArray = JSON.parse(localTodo);
        console.log("useEffect Todos init:", todoArray);
        return todoArray;
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
      return []; // 清除错误数据
    }
  });
  const [selectType, setSelectType] = useState(groupData[0].value);

  // useEffect(() => {
  //   const localTodo = localStorage.getItem("todos");
  //   try {
  //     if (localTodo) {
  //       const todoArray = JSON.parse(localTodo);
  //       console.log("useEffect Todos init:", todoArray);
  //       setTodos(todoArray);
  //     }
  //   } catch (error) {
  //     console.error("Error parsing todos from localStorage:", error);
  //     localStorage.removeItem("todos"); // 清除错误数据
  //   }
  // }, []);

  useEffect(() => {
    console.log("Todos updated:", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filterTodoList = useMemo(() => {
    console.log("Todos filterTodoList:", todos);
    if (selectType === "all") {
      return todos;
    } else if (selectType === "in-progress") {
      return todos.filter((todo) => !todo.completed);
    } else if (selectType === "completed") {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  }, [todos, selectType]);

  function handleAddTodo() {
    if (!inputValue.trim()) return;
    const newTodo = {
      id: String(todos.length + 1),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    console.log("Todos add:", todos);
    setInputValue("");
    setSelectType("all"); // 添加任务后重置为全部类型
  }

  function onComfirm(id) {
    console.log("onComfirm", id);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function onDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function onEditComplete(id, newText) {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "500px",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
        marginBottom: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "20px",
      }}
    >
      <Title> My TodoList</Title>
      <div
        style={{
          height: "40px",
          display: "flex",
          flexDirection: "row",
          padding: "10px",
        }}
      >
        <Input
          type="text"
          placeholder="添加一个任务"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <AddButton onClick={handleAddTodo}>添加</AddButton>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "60px",
          paddingLeft: "16px",
        }}
      >
        <h3 style={{ color: "black", textSize: "20", display: "inline" }}>
          任务类型
        </h3>
        <RadioButtonGroup
          selectType={selectType}
          onSelectChange={(selectType) => setSelectType(selectType)}
        />
      </div>
      <div
        style={{
          flexDirection: "column",
          width: "100%",
          height: "100%",
          overflowY: "auto",
        }}
      >
        {filterTodoList.length === 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "60px",
            }}
          >
            {todos.length === 0 ? "暂无任务，请添加任务" : "没有该类型的任务"}
          </div>
        ) : (
          filterTodoList.map((item, index) => (
            <TodoItem
              key={item.id}
              todo={item}
              onComfirm={onComfirm}
              onDelete={onDelete}
              onEditComplete={onEditComplete}
            />
          ))
        )}
      </div>
    </div>
  );
}
