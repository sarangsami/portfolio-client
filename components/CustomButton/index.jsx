import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const CustomizedButton = styled(Button)(({ theme }) => ({
  borderRadius: 15,
  textTransform: "none",
  padding: 12,
}));

const CustomButton = (props) => {
  return <CustomizedButton {...props}>{props.children}</CustomizedButton>;
};

CustomButton.propTypes = {
  children: PropTypes.any,
};

export default CustomButton;
