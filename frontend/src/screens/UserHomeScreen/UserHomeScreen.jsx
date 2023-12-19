import "./UserHomeScreen.css";
import AppSection from "../../components/AppSection/AppSection";
import DivSeparator from "../../components/DivSeparator/DivSeparator";

const UserHomeScreen = () => {
  return (
    <div className="userhomescreen-container">
      <div className="primary-container">
       <AppSection />
      </div>
      <DivSeparator color="#f8faff" />
    </div>
  );
};

export default UserHomeScreen;
