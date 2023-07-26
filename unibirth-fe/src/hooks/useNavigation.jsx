import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateToBack = () => {
    navigate(-1);
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToLoginMember = () => {
    navigate("/members/login");
  };

  const navigateToDetailConstellation = () => {
    navigate(`/constellations/detail/${1}`);
  };

  const navigateToRegisterConstellation = () => {
    navigate(`/constellations/register/${1}`);
  };

  const navigateToDrawingConstellation = () => {
    navigate(`/constellations/drawing`);
  };

  const navigateToRegisterMember = () => {
    navigate("/members/register");
  };

  const navigateToModifyProfile = () => {
    navigate(`/profiles/modify/${1}`);
  };

  const navigateToDetailPlanet = () => {
    navigate(`/planets/${1}`);
  };

  const navigateToMainPlanet = () => {
    navigate("/planets");
  };

  const navigateToMemberProfile = () => {
    navigate(`/profiles/${1}`);
  };

  const navigateToRegisterStar = () => {
    navigate(`/stars/register/${1}`);
  };

  const refreshPage = () => {
    navigate(".", { replace: true });
  };

  const navigateToFollowings = () => {
    navigate("/profiles/followings");
  };

  const navigateToFollowers = () => {
    navigate("/profiles/followers");
  };

  return {
    navigateToLoginMember,
    navigateToDetailConstellation,
    navigateToMainPlanet,
    navigateToBack,
    navigateToHome,
    navigateToRegisterConstellation,
    navigateToDrawingConstellation,
    navigateToRegisterStar,
    navigateToDetailPlanet,
    navigateToModifyProfile,
    navigateToRegisterMember,
    navigateToMemberProfile,
    refreshPage,
    navigateToFollowings,
    navigateToFollowers,
  };
};
