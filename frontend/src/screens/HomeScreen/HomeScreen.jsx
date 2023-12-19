import "./HomeScreen.css"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthSection from "../../components/AuthSection/AuthSection";
import DivSeparator from "../../components/DivSeparator/DivSeparator";

const HomeScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navagate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navagate("/home");
    }
  }, [userInfo, navagate]);

  return (
    <div className="homescreen-container">
      <div className="primary-container">
        <AuthSection />
      </div>
      <DivSeparator color="#f8faff" />
    </div>
  );
};

export default HomeScreen;
