import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setDirection, setLanguage } from "redux/settingsSlice";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),

    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255)" +
      " 0px 0px 0px 0px, rgba(0, 0, 0, 0.05)" +
      " 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) " +
      "0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function LanguageMenu() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const langNameGenerator = () => {
    switch (selectedLanguage) {
      case "en":
        return "English";
      case "fa":
        return "Persian";
      default:
        return "English";
    }
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setAnchorEl(null);
    i18n.changeLanguage(language);
    dispatch(setLanguage(language));
    if (language === "fa") {
      dispatch(setDirection("rtl"));
    } else {
      dispatch(setDirection("ltr"));
    }
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        sx={{ textTransform: "none" }}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {langNameGenerator()}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleLanguageChange("en")} disableRipple>
          <EditIcon />
          English
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange("fa")} disableRipple>
          <EditIcon />
          Persian
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
