export default function Card({imgUrl, title, likes}) {
  return (
    <section className="bg-gray-100 py-8">
      <div className=" container mx-auto px-2">
        <h2 className="text-xl font-semibold text-gray-800">LIFESTYLE</h2>

        <div className="flex flex-wrap justify-start py-2 m-20">
          <div className="w-64 h-64 p-4 m-4 bg-white rounded-lg shadow-lg m-5">
            <img
              className="w-full h-full rounded-full"
              src={imgUrl}
              alt="pic-1"
              width={100}
              height={100}
            />
            <div className="pt-2">
              <h3 className="text-xl font-bold text-base">
                <strong>{title}</strong>
              </h3>

              <div className="flex space-x-4 py-2">
                <a href="facebook.com" className="flex">
                  <img src={imgUrl} width="30" height="30" alt="" />
                  {likes}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
