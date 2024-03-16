interface BackgroundImageProps {
  children: React.ReactNode;
}

function BackgroundImage(props: BackgroundImageProps) {
  const backgroundImageUrl = "./img/bg.jpg";
  const containerStyle = {
    backgroundImage: `url('${backgroundImageUrl}')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    <div className="w-full" style={containerStyle}>
      {props.children}
    </div>
  );
}

export default BackgroundImage;
