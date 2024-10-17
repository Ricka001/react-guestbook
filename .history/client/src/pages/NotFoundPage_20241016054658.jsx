import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <h2>No User Found! 404</h2>
      <Link to="/">Go Home</Link>
    </>
  );
}
