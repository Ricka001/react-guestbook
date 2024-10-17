import { useState } from "react";

export default function Form() {
  const [formValues, setFormValues] = useState({
    username: "",
    description: "",
  });

  //used StackOverflow for help
  function handleSubmit(event) {
    event.preventDefault();
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
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="description"
          required
        />
        <label htmlFor="list" name="list" required>
          Room type:
          <select>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="substantial">Substantial</option>
            <option value="critical">Critical</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
