import React from "react";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import Footer1 from "../../../common/blocks/Footer1";
import { BiSearch } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";
import InputDropdown from "../atoms/InputDropdown";
import InputStella from "../atoms/InputStella";
import InputDescription from "../atoms/InputDescription";
import { useRecoilState } from "recoil";
import {
  planetIdState,
  constellationNameState,
  constellationDescpState,
} from "../../../recoil/atoms";

import planet1 from "../../../assets/images/planet1.png";
const RegistConstellation = () => {
  const [planetId, setPlanetId] = useRecoilState(planetIdState);
  const [constellationName, setConstellationName] = useRecoilState(
    constellationNameState,
  );
  const [constellationDescp, setConstellationDescp] = useRecoilState(
    constellationDescpState,
  );

  const handleSubmit = () => {
    // 여기에 중복이 있는 지 확인하는 로직 필요함

    // 여기서 오류가 없다면
    if (planetId && constellationName && constellationDescp) {
      console.log("행성명: ", planetId);
      console.log("별자리명: ", constellationName);
      console.log("별자리설명: ", constellationDescp);
      navigateToDrawingConstellation();
    } else if (constellationName) {
      console.log("행성명: ", planetId);
      console.log("별자리명: ", constellationName);
      console.log("별자리설명: ", constellationDescp);
      alert("별자리를 설명해주세요 ! ");
    } else {
      console.log("행성명: ", planetId);
      console.log("별자리명: ", constellationName);
      console.log("별자리설명: ", constellationDescp);
      alert("별자리를 입력해주세요 ! ");
    }
  };
  // navigateToDrawingConstellation
  const { navigateToBack, navigateToDrawingConstellation } = useNavigation();
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
      value: "별자리 그리기",
      onClick: handleSubmit,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-10 py-10">
      <Header1 buttons={buttonsHeader} />
      <div className="flex flex-col items-center justify-center space-y-5">
        <img
          src={planet1}
          alt="행성1 이미지 예시"
          className="flex items-center justify-center"
        />
        <p className="font-TAEBAEKmilkyway">행성 명</p>
        <InputDropdown planetId={planetId} setPlanetId={setPlanetId} />
        <p className="font-TAEBAEKmilkyway">별자리 명</p>
        <InputStella
          constellationName={constellationName}
          setConstellationName={setConstellationName}
        />
        <p className="font-TAEBAEKmilkyway">별자리 설명</p>
        <InputDescription
          constellationDescp={constellationDescp}
          setConstellationDescp={setConstellationDescp}
        />
      </div>
      <Footer1
        buttons={buttonsFooter}
        planetId={planetId}
        constellationDescp={constellationDescp}
        constellationName={constellationName}
      />
    </div>
  );
};

export default RegistConstellation;