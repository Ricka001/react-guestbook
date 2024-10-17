// export default function Form() {
//   //used StackOverflow for help

//   return (
//     <div>
//       <h1>Form</h1>
//       <form>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           placeholder="Name"
//           required
//         />
//         <label htmlFor="description">Description</label>
//         <input
//           type="text"
//           id="description"
//           name="description"
//           placeholder="description"
//           required
//         />
//         <label htmlFor="category">Category</label>
//         Category:
//         <select name="category" id="category"></select>
//       </form>
//     </div>
//   );
// }
<Form.Row className="mb-lg-3">
  <Form.Group as={Col} controlId="roomTypeSelection" lg="4" md="12">
    <Form.Label>
      Room Type:<span className="text-danger">*</span>
    </Form.Label>
    <Form.Control
      ref={manufacturerInputRef}
      onChange={handleChange}
      name="roomTypeSelection"
      value={values.roomTypeSelection}
      type="text"
      placeholder="Type your desired room..."
      isInvalid={!!errors.roomTypeSelection}
      isValid={touched.roomTypeSelection && !errors.roomTypeSelection}
    />
    <Form.Control.Feedback type="invalid">
      {errors.roomTypeSelection}
    </Form.Control.Feedback>
  </Form.Group>
</Form.Row>;

export default function Form() {
  return (
    <div>
      <Form.Select>
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </div>
  );
}
