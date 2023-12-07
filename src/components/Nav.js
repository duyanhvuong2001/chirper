import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">New Tweet</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
