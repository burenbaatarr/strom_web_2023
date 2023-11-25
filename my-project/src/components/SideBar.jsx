import { useState } from "react";
import { cats } from "../data/data";
import Category from "./Category";

const Sidebar = () => {
  const [categories, setCategories] = useState(cats);
  const categoryList = categories.map((c) => (
    <Category title={c.title} children={c.children} />
  ));

  return (
    <div className="w-64 h-screen bg-white border-r shadow">
      <div className="p-4">
        <h1 className="text-xl font-semibold text-gray-600">iblog</h1>
      </div>
      <nav>
        <ul className="space-y-4 text-gray-500">{categoryList}</ul>
      </nav>
    </div>
  );
};
export default Sidebar;
