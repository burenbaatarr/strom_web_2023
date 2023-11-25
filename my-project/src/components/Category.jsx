import { useState } from "react";

const Category = ({ title, children }) => {
  const [active, setActive] = useState(false);

  const showChildren = () => {
    setActive(!active);
  }

  return (
    <li className="dropdown" onClick={showChildren}>
      <a
        href="#"
        className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-100"
      >
        <i className="fas fa-tachometer-alt"></i>
        <span>{title}</span>
        {active && (
          <div className="flex flex-col">
            {children.map(c => <a href="#">{c.title}</a>)}
          </div>
        )}
      </a>
    </li>
  );
};

export default Category;
