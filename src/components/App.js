import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { useState } from "react";
import Addnewitem from "./Addnewitem";

function App() {
  const [content, setContent] = useState([
    {
      id: 1,
      checkbox: true,
      title: "learned react",
    },
    {
      id: 2,
      checkbox: false,
      title: "learned java",
    },
    {
      id: 3,
      checkbox: true,
      title: "learned html",
    },
  ]);
  const [addItem, setAddItem] = useState("");

  const newItem = (item) => {
    const id = content.length ? content[content.length - 1].id + 1 : 1;
    const newAddedItem = { id: id, checkbox: false, title: item };
    const newCreatedItem = [...content, newAddedItem];
    setContent(newCreatedItem);
  };

  const handleChange = (id) => {
    console.log(id);
    const list = content.map((item) =>
      item.id === id ? { ...item, checkbox: !item.checkbox } : item
    );
    setContent(list);
    localStorage.setItem("todolist", JSON.stringify(list));
    console.log(list);
  };

  const handleDelete = (id) => {
    console.log(id);
    const list = content.filter((item) => item.id !== id);
    setContent(list);
    localStorage.setItem("todolist", JSON.stringify(list));
    console.log(list);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addItem) return;
    console.log("arun");
    console.log(addItem);
    newItem(addItem);
    setAddItem("");
  };
  return (
    <div className="App">
      <Header title="header" />
      <Addnewitem
        addItem={addItem}
        setAddItem={setAddItem}
        handleSubmit={handleSubmit}
      />
      <Content
        content={content}
        handleDelete={handleDelete}
        handleChange={handleChange}
      />
      <Footer length={content.length} />
    </div>
  );
}

export default App;
