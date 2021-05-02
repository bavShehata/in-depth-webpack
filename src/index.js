import styles from "./style.css";
import buttonStyles from "./button.css";
import image from "./SE.jpg";
import { CreateImage } from "./CreateImage";
const addButton = () => {
  const button = document.createElement("button");
  button.textContent = "Click me please";
  document.body.appendChild(button);
};

addButton();
CreateImage(image);
