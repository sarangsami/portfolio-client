import {Fragment, useState} from 'react';
import {
  Grid,
  Tab,
  Tabs,
  AppBar,
  Box,
  Container,
  Toolbar,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import {useTranslation} from 'react-i18next';

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

const Header = () => {
  const {t} = useTranslation();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <AppBar position="static" color="transparent" elevation={6}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xl={2} lg={2} md={6} sm={6} xs={6}>
              <Box display="flex" alignItems="center" height="100%">
                <LanguageMenu />
                <ModeSwitch />
                <ColorMenu />
              </Box>
            </Grid>
            <Grid
              sx={{
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'none',
                  lg: 'flex',
                  xl: 'flex',
                },
              }}
              item
              xl={8}
              lg={8}
            >
              <Box display="flex" justifyContent="center" width="100%">
                <CustomTabs
                  textColor="primary"
                  indicatorColor="primary"
                  aria-label="basic tabs example"
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
            <Grid item xl={2} lg={2} md={6} sm={6} xs={6}>
              <Box p={1}>
                <Logo />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
};
export default Header;
