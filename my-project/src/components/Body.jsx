const Body = () => {
  return (
    <section className="bg-gray-100 py-8">
<div className=" container mx-auto px-2">

  <h2 className="text-xl font-semibold text-gray-800">LIFESTYLE</h2>

  <div className="flex flex-wrap justify-start py-2 m-20">
    <div className="w-64 h-64 p-4 m-4 bg-white rounded-lg shadow-lg m-5">
      <img className="w-full h-full rounded-full" src="./img/pic-1.jpg" alt="pic-1" 
      width={100}
      height={100}/>
      <div className="pt-2">
        <h3 className="text-xl font-bold">Micheal Jorden</h3>
        <p className="text-gray-700">CEO</p>
        <div className="flex space-x-4 py-2">
          <a href="facebook.com">
           <img src="img/service-1.png" width="30" height="30" alt=""/>
          </a>
        </div>
      </div>
    </div>
</div>
   



</div>
</section>
    
  );
};
export default Body;

