import { useSelector, useDispatch } from "react-redux";
import { setColor } from "../store/color";
import { IoIosArrowForward } from "react-icons/io";

export const NavbarName = ({
  image,
  title,
  newBackground,
  newColor,
  currentBackground,
}) => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.color);

  const isSelected = currentBackground === image;

  const changeBackground = () => {
    if (!isSelected) {
      dispatch(setColor(newColor));

      const navbarElements = document.getElementsByClassName("navbar-name");
      for (let i = 0; i < navbarElements.length; i++) {
        navbarElements[i].classList.remove("selected");
      }

      newBackground(image);
    }
  };

  const selectedStyle = isSelected ? "icon selected" : "icon rotate";

  return (
    <span
      className={`navbar-name ${isSelected ? "selected" : ""}`}
      onClick={changeBackground}
      style={{
        color: color,
        textShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`,
      }}
    >
      <div className={`${selectedStyle}`}>
        <IoIosArrowForward />
      </div>
      {title}
    </span>
  );
};
