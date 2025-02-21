import React, { useState } from 'react';

function TodoList(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.item);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (editedText.trim() !== '') {
      props.editItem(props.index, editedText);
      setIsEditing(false);
    }
  };

  return (
    <li className="list-item">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span>{props.item}</span>
      )}
      <span className="icons">
        <i
          className="fa-solid fa-trash-can icon-delete"
          onClick={() => props.deleteItem(props.index)}
        ></i>
        {isEditing ? (
          <i className="fa-solid fa-check icon-save" onClick={handleSaveClick}></i>
        ) : (
          <i className="fa-solid fa-pen icon-edit" onClick={handleEditClick}></i>
        )}
      </span>
    </li>
  );
}

export default TodoList