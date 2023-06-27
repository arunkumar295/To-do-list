import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { useState } from "react";
import Addnewitem from "./Addnewitem";
import Searchbar from "./Searchbar";

function App() {
  const [content, setContent] = useState(
    JSON.parse(localStorage.getItem("todolist"))
  );
  const [addItem, setAddItem] = useState("");
  const [search, setSearch] = useState("");

  const newItem = (item) => {
    const id = content.length ? content[content.length - 1].id + 1 : 1;
    const newAddedItem = { id: id, checkbox: false, title: item };
    const newCreatedItem = [...content, newAddedItem];
    setContent(newCreatedItem);
    localStorage.setItem("todolist", JSON.stringify(newCreatedItem));
    console.log(newCreatedItem);
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
      <Searchbar search={search} setSearch={setSearch} />
      <Content
        content={content.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )}
        handleDelete={handleDelete}
        handleChange={handleChange}
      />
      <Footer length={content.length} />
    </div>
  );
}

export default App;
