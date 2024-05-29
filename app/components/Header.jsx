import { GoDotFill } from "react-icons/go";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <ul className="flex items-center">
        <li>
          <GoDotFill />
        </li>
        <li>
          <GoDotFill />
        </li>
      </ul>

      <ul className="flex items-center gap-8">
        <li>En</li>
        <li>
          <CiMenuFries />
        </li>
      </ul>
    </header>
  );
};

export default Header;
