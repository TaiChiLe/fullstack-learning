import { Link, Outlet } from 'react-router-dom';
import './Root.css';

function Root(props) {
  return (
    <div className="root">
      <div className="root-item-list">
        <Link to="/item-1">Item 1</Link>
        <Link to="/item-2">Item 2</Link>
      </div>
      <div className="root-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
