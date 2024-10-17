import { useState } from "react";

export default function About() {
  const [formValues, setFormValues] = useState({
    username: "",
    description: "",
    list: "",
  });
  const [selectedFruit, setSelectedFruit] = useState("low");
  function handleFormValuesChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  fetch("DATABASE_URL", {
    method: "POST",
    body: formValues,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
return (
  <div>
    <h1>Form</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Name"
        required
        value={formValues.username}
        onChange={handleFormValuesChange}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="description"
        required
        value={formValues.description}
        onChange={handleFormValuesChange}
      />
      <label
        htmlFor="list"
        name="list"
        onChange={handleFormValuesChange}
        value={formValues.list}
        required
      >
        Category:
        <select
          value={selectedFruit}
          onChange={(e) => setSelectedFruit(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="substantial">Substantial</option>
          <option value="critical">Critical</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
    <p>Current user: {formValues.username}</p>
    <p>User description: {formValues.description}</p>
    <p>Category: {formValues.list}</p>
    <p>Level: {selectedFruit}</p>
  </div>
);
