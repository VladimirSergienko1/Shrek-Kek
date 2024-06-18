import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full px-5 backdrop-blur-xl bg-black/10">
      <nav className="max-w-screen-xl">
        <ul className="flex">
          <li className={"logo"}></li>
          <li className={"item(links)"}></li>
          <li className={"item(links)"}></li>
          <li className={"item(links)"}></li>
          <li className={"item(links)"}></li>
          <div>
            {/*<li><a type={'Button'}>Bla</a></li>*/}
            <button>Bla</button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
