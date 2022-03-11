import React from "react";

export default function ListItem({ card, onRemove }) {
  return (
    <div className="card-item">
      <p>{card.text}</p>
      <button
        className="card-item-delete"
        type="button"
        onClick={() => {
          onRemove(card.id);
        }}
      >
        Удалить
      </button>
    </div>
  );
}
