import "../styles/BackButton.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

export default function BackButton({ children, ...props }) {
  const navigate = useNavigate();
  const { translation } = useContext(LanguageContext);

  return (
    <button {...props} onClick={() => navigate(-1)}>
      {translation.backBtn}
    </button>
  );
}
