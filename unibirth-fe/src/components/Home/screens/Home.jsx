import React from "react";
import Footer1 from "../../../common/blocks/Footer1";
import Button1 from "../../../common/atoms/Button1";
import useMemberApi from "../../../api/useMemberApi";
import useConstellationApi from "../../../api/useConstellationApi";

import { useNavigation } from "../../../hooks/useNavigation";

const Home = () => {
  const { navigateToMainPlanet } = useNavigation();

  const handleGo1 = async () => {
    const response = await useMemberApi.membersGetDetail(2);
    console.log(response);
  };

  const handleGo2 = async () => {
    const response = await useConstellationApi.constellationsGetStars(1);
    console.log(response);
  };

  // const handleGo3 = async () => {
  //   const response = await useMemberApi.membersPostRegister({
  //     name: "ㅇㅇ네임",
  //     nickname: "ㅇㅅㅇ닉네임",
  //     password: "일단테스트입니다",
  //     email: "이메일작성아무거나제출",
  //   });
  //   console.log(response);
  // };

  // const handleGo4 = async () => {
  //   const response = await useMemberApi.membersDeleteDelete(3);
  //   console.log(response);
  // };

  const buttons = [
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "시작하기",
      onClick: navigateToMainPlanet,
    },
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "값 가져오기",
      onClick: handleGo1,
    },
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "별자리 가져오기",
      onClick: handleGo2,
    },
    // {
    //   component: Button1,
    //   className: "font-TAEBAEKmilkyway",
    //   value: "별자리 가져오기",
    //   onClick: handleGo3,
    // },
    // {
    //   component: Button1,
    //   className: "font-TAEBAEKmilkyway",
    //   value: "회원삭제",
    //   onClick: handleGo4,
    // },
  ];

  return (
    <div>
      <h1>홈 화면입니다. </h1>
      <Footer1 buttons={buttons} />
    </div>
  );
};

export default Home;
