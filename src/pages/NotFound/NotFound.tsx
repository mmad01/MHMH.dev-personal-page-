import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Link to="/" className="w-full h-screen flex justify-center items-center">
      <img src="/icons/404.gif" alt="404 page not found" />
    </Link>
  );
}

export default NotFound;
