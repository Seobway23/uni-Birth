import React from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../../common/atoms/Button/BigButton";

const Home = () => {
  const navigate = useNavigate();

  const profileButtonClick = () => {
    navigate("/profiles");
  };

  return (
    <div>
      <h1>홈 화면입니다. </h1>
      <BigButton value="Profile" onClick={profileButtonClick} />
    </div>
  );
};

export default Home;
