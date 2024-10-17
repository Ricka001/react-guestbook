import { useState } from "react";

export default function Form() {
  const [formValues, setFormValues] = useState({
    username: "",
    description: "",
    list: "",
  });

  function handleFormValuesChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

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
