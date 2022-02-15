export const SmallButtonType = {
  width: "150px",
  height: "50px",
  borderColor: "#000000",
  backGroundColor: "#ffffff",
};

export const MediumButtonType = {
  width: "200px",
  height: "100px",
  borderColor: "#000000",
  backGroundColor: "#ffffff",
};

export const LargeButtonType = {
  width: "300px",
  height: "150px",
  borderColor: "#000000",
  backGroundColor: "#ffffff",
};

export const LoginButtonType = {
  width: "320px",
  height: "48px",
  borderColor: "#0c218b",
  backGroundColor: "#0c218b",
  color: "#fff",
  fontSize: "18px",
  radius: "0px",
};

export const SmallLoginButtonType = {
  width: "150px",
  height: "50px",
  borderColor: "#ffffff",
  backGroundColor: "#8ECBF8",
  fontSize: "18px",
  radius: "0px",
};

export const MainPageLastButtonType = {
  width: "320px",
  height: "70px",
  borderColor: "#ffffff",
  backGroundColor: "#8ECBF8",
};

export interface ButtonProps {
  width?: string;
  height?: string;
  borderColor?: string;
  backGroundColor?: string;
  color?: string;
  fontSize?: string;
  radius?: string;
}
