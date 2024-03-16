import { Skill } from "./Skill";

export const skillsData: Skill[] = [
  {
    id: 1,
    title: "HTML/CSS",
    description:
      "自社サイト内のリンク先、画像、カラーなどの変更に伴うコーディングなどの実務経験があります。また、Tailwind CSSやBootstrapなどのCSSフレームワークを使い、模写コーディングを行っておりました。",
    experience: "実務経験あり(1年間)",
    iconPaths: ["/svg/html-5.svg", "/svg/css-3.svg"],
  },
  {
    id: 2,
    title: "JavaScript",
    description:
      "自社サイト内のjQueryを使用した、スライドショーやスクロールに伴うアニメーション作成などの実務経験があります。また、サードパーティAPIを使って外部サイトとの連携を行い、機能の拡張が出来ます。",
    experience: "実務経験あり(1年間)",
    iconPaths: ["/svg/javascript.svg"],
  },
  {
    id: 3,
    title: "React/TypeScript",
    description:
      "React/TypeScriptを使用し、本ポートフォリオサイトを構築しました。自主学習を積み重ねることによってフロントエンドの深い理解を得て、より複雑なアプリケーション開発に挑戦したいと思っています。",
    experience: "実務経験なし",
    iconPaths: ["/svg/react.svg", "/svg/typescript.svg"],
  },
  {
    id: 4,
    title: "GitHub",
    description:
      "ローカルコンピューター上で作成したプログラムのコミットを行い、リモートリポジトリにプッシュすることが出来ます。また、リモートリポジトリのクローンを作成し、ローカルコンピューター上にコピーを作成して作業が出来ます。",
    experience: "実務経験なし",
    iconPaths: ["/svg/github.svg"],
  },
  {
    id: 5,
    title: "Figma",
    description:
      "Figmaで本ポートフォリオサイトのデザインカンプを作成しました。頭の中で自分の思ったレイアウトをアウトプットすることや、1からデザインすることの難しさに直面しましたが.完成させることができて嬉しく思います。",
    experience: "実務経験なし",
    iconPaths: ["/svg/figma.svg"],
  },
  {
    id: 6,
    title: "Terminal",
    description:
      "本ポートフォリオサイトの開発環境は、Terminalでコマンドを使用して構築しました。npmなどを使い、Viteを導入し、プロジェクトを立ち上げることにより、1から作成するよりも効率的に作業を進めることが出来ました。",
    experience: "実務経験なし",
    iconPaths: ["/svg/terminal.svg"],
  },
];
