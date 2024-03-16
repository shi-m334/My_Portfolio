const HobbiesTalents = () => {
  return (
    <div className="container mx-auto py-12 px-5">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 py-12">
          <img
            src="/img/hobbies.jpg"
            alt="hobbiesの写真です"
            className="w-full md:w-1/2 object-cover rounded-lg shadow-lg h-60"
          />
          <div className="w-full md:w-1/2">
            <h2 className="text-center text-3xl lg:text-4xl font-bold mb-10">
              Hobbies
            </h2>
            <p className="mt-4 text-gray-600">
              読書や動画視聴などの趣味を通じて、幅広い知識や情報を吸収することによって、
              語彙力を養ったり、業界のトレンドなどを把握し新しい視点を得ることで、
              それらをクリエイティブな業務に活かすことが出来ます。
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 py-12">
          <img
            src="/img/talents.jpg"
            alt="Talentsの写真です"
            className="w-full md:w-1/2 object-cover rounded-lg shadow-lg lg:order-last h-60"
          />
          <div className="w-full md:w-1/2 lg:order-first">
            <h2 className="text-center text-3xl lg:text-4xl font-bold mb-10">
              Talents
            </h2>
            <p className="mt-4 text-gray-600">
              特技の運動では、健康な体と精神を保つことを意識して行うことにより、
              プレッシャーやストレスの多い状況を緩和して、効率的な業務遂行に貢献できます。
              なお、過去に行っていたバスケットボールや野球などの競技を通じて、
              チームワークの大切さを学び、自身の糧にすることが出来ました。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HobbiesTalents;
