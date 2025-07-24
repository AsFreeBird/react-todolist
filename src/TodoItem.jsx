import { Checkbox } from "./CheckBox";
import { useState } from "react";

export function TodoItem({ todo, onComfirm, onDelete ,onEditComplete}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState(todo.text);


  function handleCompleteChange(e) {
    console.log("handleCompleteChange", e.target.checked);
    onComfirm(todo.id);
  }

  function handleEditiingChange(e){
     console.log("handleEditiingChange", e.target.value);
     if(isEditing){
      setEditingText(e.target.value);
     }
  }

  function handleCancelOrEdit(){
    if(isEditing){
      setEditingText(todo.text);
    }else{
      setIsEditing(true);
    }
    console.log("handleCancelOrEdit", isEditing);
    // 如果是编辑状态，取消编辑则恢复原文本
    // 如果不是编辑状态，则进入编辑状态
    setIsEditing(!isEditing);
  }

  function handleDeleteAndSave(){
    if(isEditing){
      onEditComplete(todo.id, editingText);
    }else{
      onDelete(todo.id);
    }
    setIsEditing(false);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "10px 16px",
        background: "white",
        marginBottom: "10px",
        borderRadius: "10px",
        padding: "16px 20px",
        opacity: todo.completed ? 0.5 : 1,
      }}
    >
      <Checkbox checked={todo.completed} onChange={(e) => handleCompleteChange(e)} />
      <input
        type="text"
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          flex: "1",
          textDecoration: todo.completed ? "line-through" : "none",
          outline:"none",
          border:isEditing ?"1px solid #999":"none",
          borderRadius:"4PX",
          background:"transparent",
          color:"#333",
          fontSize:"14px",
          padding:"4px 8px"
        }}
        value={editingText}
        onChange={handleEditiingChange}
        disabled={!isEditing}
        />
  
      <button
        style={{
          width: "48px",
          marginRight: "10px",
          strokeWidth: "1px",
          borderRadius: "24px",
          border: "1px solid grey",
          color: "#333",
        }}
        onClick={()=>handleCancelOrEdit()}
      >
        {isEditing?"取消":"编辑" }
      </button>
      <button
        onClick={() => handleDeleteAndSave()}
        style={{
          width: "48px",
          marginRight: "10px",
          strokeWidth: "1px",
          borderRadius: "24px",
          border: "1px solid ",
          color: "#333",
        }}
      >
        {isEditing ? "保存" : "删除"}
      </button>
    </div>
  );
}
