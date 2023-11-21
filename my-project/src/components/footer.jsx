const Footer = () => {
    return (
        // <footer className="bg-white shadow">
        //     {/* <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        //         <p className="text-center text-gray-500">&copy; 2022 - Your company name</p>
        //     </div> */}
        // </footer>
        <section className="bg-f9f7f7 py-10">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">iblog</h3>
            <p className="mb-3">write, read, enjoy</p>
          </div>
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">tuslamj</h3>
            <p className="mb-3">heregleh zaavar</p>
            <p className="mb-3">sanal huselt</p>
          </div>
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">bidentei holbogdoh</h3>
            <p className="mb-3">icode@icompany.com</p>
            <p className="mb-3">info@icompany.com</p>
          </div>
        </div>
      </div>
    </section>
    );
};
export default Footer;