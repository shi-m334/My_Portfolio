const Header = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-xl font-medium mb-4 md:mb-0">
          <a href="#" className="hover:underline">
            My Portfolio
          </a>
        </h1>
        <ul className="w-full md:w-auto flex flex-col md:flex-row items-center justify-center md:justify-between text-center">
          <li className="text-base md:mr-5 hover:underline">History</li>
          <li className="text-base md:mr-5 hover:underline">Skills</li>
          <li className="text-base md:mr-5 hover:underline">
            Hobbies & Talents
          </li>
          <li className="text-base hover:underline">PR</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
