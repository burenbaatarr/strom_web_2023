const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-white border-r shadow">
            <div className="p-4">
                <h1 className="text-xl font-semibold text-gray-600">iblog</h1>
            </div>
            <nav>
                <ul className="space-y-4 text-gray-500">
                    <li>
                        <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-100">
                            <i className="fas fa-tachometer-alt"></i>
                            <span>lifestyle</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-100">
                            <i className="fas fa-chart-pie"></i>
                            <span>sport</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-100">
                            <i className="fas fa-users"></i>
                            <span>technology</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-100">
                            <i className="fas fa-comments"></i>
                            <span>entertaiment</span>
                        </a>
                    </li>
                    

                </ul>
            </nav>
        </div>
    );
};
export default Sidebar;