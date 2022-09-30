import { Link } from "react-router-dom";

function About() {
  return (
    <div>
        <Link  className="button" to="/">home</Link>
      <h1>Hello, from about</h1>
    </div>
  );
}

export { About };
