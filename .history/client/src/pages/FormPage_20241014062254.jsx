export default function Form() {
  //used StackOverflow for help

  return (
    <div>
      <h1>Form</h1>
      <form>
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
        <label htmlFor="category">Category</label>
        Category:
        <select>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </form>
    </div>
  );
}
