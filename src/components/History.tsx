const History = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="container px-5 py-10">
        <h2 className="text-center text-3xl lg:text-4xl font-bold lg:mb-15 md:mb-10 mb-5">
          History
        </h2>
        <div className="flex flex-col lg:flex-row lg:pt-20">
          <div className="flex flex-col lg:flex-row w-full lg:w-1/2 items-center justify-center lg:justify-start text-center lg:text-left">
            <span className="text-lg lg:text-4xl leading-relaxed">
              技術力の向上に常に努め、
              <br />
              より一層の成長を目指して。
            </span>
          </div>
          <div className="w-full lg:w-1/2 px-4 lg:px-8 mt-8 lg:mt-0 flex items-center justify-center lg:justify-end text-left">
            <p className="text-base lg:text-lg leading-relaxed">
              私は、自主学習として主に参考書を読んだり、
              また、YouTubeやインターネットを通じて模写サイトの制作に取り組んできました。
              そして、この度、1ヶ月程前から本ポートフォリオサイトの制作に着手しました。
              これは、デザインからデプロイまで一からの取り組みであり、初めての試みでした。
              制作プロセスの全てにおいて自ら手を動かし、完成させる過程で多くの困難に直面しましたが、
              拙いながらも最終的にサイトを完成させることができ、大変嬉しく思います。
              この経験から、自己の成長を実感し、新たな自信を得ることが出来ました。
              制作に携わる中で、デザインの構築からコーディング、デプロイまでの一連のプロセスを通じて、
              多くのことを学び、また、問題解決能力などのスキルも磨くことができました。
              今後も、新たな挑戦に取り組んでいく覚悟でございます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
