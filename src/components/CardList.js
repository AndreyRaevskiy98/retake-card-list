import React, { useState } from "react";

import ListItem from "./ListItem.js";

export default function CardList() {
  const [text, setText] = useState("");
  const [cards, setCards] = useState([]);

  function handleInput(e) {
    setText(e.target.value);
  }

  function handleAdd(e) {
    e.preventDefault();

    if (text) {
      const newCard = {
        id: "_" + Math.random().toString(36).substring(2, 9),
        text: text,
      };

      setCards([...cards, newCard]);
      setText("");
    } else {
      alert("Введите текст");
    }
  }

  function removeHandle(id) {
    setCards(cards.filter((card) => card.id !== id));
  }

  return (
    <div className="app">
      <form className="add-card" onSubmit={handleAdd}>
        <label class="">
          <p>Текст карточки</p>

          <textarea value={text} onInput={handleInput} rows="5" />
        </label>

        <button type="submit">Добавить</button>
      </form>

      <div className="card-list">
        {cards.map((card) => (
          <ListItem key={card.id} card={card} onRemove={removeHandle} />
        ))}
      </div>
    </div>
  );
}
