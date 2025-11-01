import * as React from "react";
import Menu from "@mui/material/Menu";
import { Grid, IconButton } from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { setPrimaryColor } from "redux/settingsSlice";

export default function ColorMenu() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorChange = (color) => {
    setAnchorEl(null);
    dispatch(setPrimaryColor(color));
  };

  const colors = [
    { id: 1, color: "#EB5757" },
    { id: 2, color: "#FF772B" },
    { id: 3, color: "#9B51E0" },
    { id: 4, color: "#333333" },
    { id: 5, color: "#27AE60" },
    { id: 6, color: "#2723FE" },
  ];

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FiberManualRecord color="primary" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box maxWidth={120}>
          <Grid container>
            {colors.map(({ color, id }) => (
              <Grid key={id} item xl={4} lg={4} md={4} sm={4} xs={4}>
                <IconButton onClick={() => handleColorChange(color)}>
                  <FiberManualRecord sx={{ color }} />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Menu>
    </div>
  );
}
