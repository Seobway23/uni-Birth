import React from "react";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import Footer1 from "../../../common/blocks/Footer1";
import { BiSearch } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";

const RegisterMember = () => {
  const { navigateToBack, navigateToLoginMember } = useNavigation();
  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToBack,
      icon: <BiSearch />,
    },
  ];
  const buttonsFooter = [
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "회원가입",
      onClick: navigateToLoginMember,
    },
  ];
  return (
    <div>
      <Header1 buttons={buttonsHeader} />
      <h1>회원가입 화면입니다.</h1>
      <Footer1 buttons={buttonsFooter} />
    </div>
  );
};

export default RegisterMember;
