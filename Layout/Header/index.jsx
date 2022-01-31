import {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Tab,
  Tabs,
  AppBar,
  Box,
  Container,
  Toolbar,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import {styled, useTheme} from '@mui/material/styles';
import {useTranslation} from 'react-i18next';
import {Menu} from '@mui/icons-material';

import LanguageMenu from 'components/LanguageMenu';
import ModeSwitch from 'components/ModeSwitch';
import ColorMenu from 'components/ColorMenu';
import Logo from 'components/Logo';

const CustomTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{children: <span className="MuiTabs-indicatorSpan" />}}
  />
))(({theme}) => ({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: theme.palette.text.primary,
  },
}));

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
    ({theme}) => ({
      'textTransform': 'none',
      'fontWeight': theme.typography.fontWeightRegular,
      'fontSize': theme.typography.pxToRem(15),
      'marginRight': theme.spacing(1),
      'opacity': 0.6,
      '&.Mui-selected': {
        opacity: 1,
        color: theme.palette.text.primary,
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },
    }),
);

const Header = ({scrollRefs}) => {
  const {t} = useTranslation();
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    scrollRefs.current[newValue].scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };
  return (
    <Fragment>
      <AppBar position="fixed" color="inherit" elevation={0}>
        <Container>
          <Toolbar disableGutters>
            <Grid container>
              {!isLg && (
                <Grid item xl lg md sm xs>
                  <IconButton>
                    <Menu />
                  </IconButton>
                </Grid>
              )}

              <Grid item xl={2} lg={2}>
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection={isLg ? 'row' : 'row-reverse'}
                  height="100%"
                >
                  <Box>
                    <LanguageMenu />
                  </Box>
                  <Box>
                    <ModeSwitch />
                  </Box>
                  <Box>
                    <ColorMenu />
                  </Box>
                </Box>
              </Grid>
              {isLg && (
                <Grid item xl={8} lg={8}>
                  <Box display="flex" justifyContent="center" width="100%">
                    <CustomTabs
                      textColor="primary"
                      indicatorColor="primary"
                      aria-label="basic tabs example"
                      variant="scrollable"
                      scrollButtons="auto"
                      value={value}
                      onChange={handleChange}
                    >
                      <CustomTab label={t('header.aboutMe')} />
                      <CustomTab label={t('header.experience')} />
                      <CustomTab label={t('header.projects')} />
                      <CustomTab label={t('header.skills')} />
                      <CustomTab label={t('header.blog')} />
                      <CustomTab label={t('header.contact')} />
                    </CustomTabs>
                  </Box>
                </Grid>
              )}
              {isLg && (
                <Grid item xl={2} lg={2}>
                  <Box
                    p={1}
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      height: '100%',
                      width: '100%',
                      cursor: 'pointer',
                    }}
                  >
                    <Logo />
                  </Box>
                </Grid>
              )}
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
};

Header.propTypes = {
  scrollRefs: PropTypes.object,
};

export default Header;
