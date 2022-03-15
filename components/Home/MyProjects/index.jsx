import {useRef} from 'react';
import {Box, Button} from '@mui/material';
import {styled, alpha} from '@mui/material/styles';
import {ArrowBack, ArrowForward} from '@mui/icons-material';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Scrollbar} from 'swiper';

import SectionTitle from 'components/SectionTitle';
import ProjectItem from './ProjectItem';

const MyProjects = () => {
  const swiperRef = useRef();

  const ArrowButton = styled(Button)(({theme}) => ({
    'minWidth': 48,
    'minHeight': 48,
    'borderRadius': 8,
    'border': `1px solid ${alpha(theme.palette.text.primary, 0.1)}`,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.default,
    },
  }));

  return (
    <Box>
      <Box p={2}>
        <SectionTitle name="My Projects" />
      </Box>
      <Box
        sx={{
          background: 'url(/images/dots.png)',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Swiper
          ref={swiperRef}
          autoHeight={true}
          spaceBetween={20}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          scrollbar={{
            hide: true,
          }}
          modules={[Navigation, Scrollbar]}
          className="mySwiper"
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <ProjectItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectItem />
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'row',
        }}
      >
        <ArrowButton
          sx={{marginRight: 1}}
          variant="outlined"
          size="small"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <ArrowBack fontSize="small" />
        </ArrowButton>
        <ArrowButton
          variant="outlined"
          size="small"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <ArrowForward fontSize="small" />
        </ArrowButton>
      </Box>
    </Box>
  );
};
export default MyProjects;
