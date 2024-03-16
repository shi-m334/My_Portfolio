import BackgroundImage from "./BackgroundImage";

const Hero = () => {
  return (
    <BackgroundImage>
      <div className="flex items-center justify-center w-full h-full">
        <div className="text-center mb-40">
          <h2 className="text-center text-3xl lg:text-4xl font-bold mb-10">
            このサイトについて
          </h2>
          <p>
            ご訪問いただき、ありがとうございます。
            <br />
            こちらは、私の自己紹介用のポートフォリオサイトとなっております。
            <br />
            最後までご覧いただけましたら幸いです。
          </p>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Hero;
