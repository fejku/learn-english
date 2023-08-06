import gearIcon from "../assets/gear.svg";
import plIcon from "../assets/pl.svg";
import speakerIcon from "../assets/speaker.svg";
import usIcon from "../assets/us.svg";
import { IItem } from "../interfaces/IItem";

import classes from "./Header.module.css";

type Props = {
  item: IItem;
};

const Header: React.FC<Props> = ({ item }) => {
  return (
    <header className="h-20 mx-4 flex justify-between items-center text-white">
      <div className="flex flex-1 justify-start items-center sm:justify-center">
        <p className="pr-4">
          Find the <b>{item?.filename}</b>
        </p>
        <div className="relative pr-4 flex">
          <button className="hover:scale-105">
            <img
              src={speakerIcon}
              alt="Speaker"
              className={`w-8 h-8 ${classes.icon}`}
              draggable={false}
            />
          </button>
          <img
            src={usIcon}
            alt="Speaker english"
            className="absolute w-5 h-5 -top-2 right-2"
            draggable={false}
          />
        </div>
        <div className="relative pr-4 flex">
          <button className="hover:scale-105">
            <img
              src={speakerIcon}
              alt="Speaker"
              className={`w-8 h-8 ${classes.icon}`}
              draggable={false}
            />
          </button>
          <img
            src={plIcon}
            alt="Speaker polish"
            className="absolute w-5 h-5 -top-2 right-2"
            draggable={false}
          />
        </div>
      </div>
      <button className="hover:scale-105">
        <img
          src={gearIcon}
          alt=""
          className={`w-8 h-8 ${classes.icon}`}
          draggable={false}
        />
      </button>
    </header>
  );
};

export default Header;
