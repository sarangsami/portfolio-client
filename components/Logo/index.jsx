import {useSelector} from 'react-redux';

const Logo = () => {
  const primaryColor = useSelector((state) => state.settings.primaryColor);
  return (
    <svg
      width="41"
      height="44"
      viewBox="0 0 41 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="35"
        height="35"
        rx="4.5"
        stroke={primaryColor}
      />
      <rect
        x="4.25623"
        y="4.25488"
        width="36"
        height="36"
        rx="5"
        fill={primaryColor}
      />
      <g filter="url(#filter0_d_157_118)">
        <path
          d="M25.391 27.4521C25.391 27.0537 25.3324 26.6963 25.2152 26.3799C25.098 26.0518 24.8812 25.7471 24.5648 25.4658C24.2484 25.1846 23.7914 24.9033 23.1937 24.6221C22.6078 24.3291 21.8344 24.0244 20.8734 23.708C19.7484 23.333 18.6644 22.9111 17.6215 22.4424C16.5785 21.9619 15.6469 21.4053 14.8265 20.7725C14.0062 20.1279 13.3558 19.3779 12.8754 18.5225C12.3949 17.6553 12.1547 16.6475 12.1547 15.499C12.1547 14.3975 12.4008 13.4072 12.8929 12.5283C13.3851 11.6377 14.0707 10.8818 14.9496 10.2607C15.8402 9.62793 16.8832 9.14746 18.0785 8.81934C19.2738 8.47949 20.5804 8.30957 21.9984 8.30957C23.8734 8.30957 25.5258 8.6377 26.9554 9.29395C28.3969 9.93848 29.5219 10.8584 30.3304 12.0537C31.1508 13.2373 31.5609 14.6377 31.5609 16.2549H25.4261C25.4261 15.6104 25.2914 15.042 25.0219 14.5498C24.764 14.0576 24.3715 13.6709 23.8441 13.3896C23.3168 13.1084 22.6547 12.9678 21.8578 12.9678C21.0844 12.9678 20.434 13.085 19.9066 13.3193C19.3793 13.5537 18.9808 13.8701 18.7113 14.2686C18.4418 14.6553 18.307 15.083 18.307 15.5518C18.307 15.9385 18.4125 16.29 18.6234 16.6064C18.8461 16.9111 19.1566 17.1982 19.5551 17.4678C19.9652 17.7373 20.4574 17.9951 21.0316 18.2412C21.6176 18.4873 22.2738 18.7275 23.0004 18.9619C24.3597 19.3955 25.5668 19.8818 26.6215 20.4209C27.6879 20.9482 28.5844 21.5518 29.3109 22.2314C30.0492 22.8994 30.6058 23.6611 30.9808 24.5166C31.3676 25.3721 31.5609 26.3389 31.5609 27.417C31.5609 28.5654 31.3383 29.585 30.8929 30.4756C30.4476 31.3662 29.809 32.1221 28.9769 32.7432C28.1449 33.3525 27.1488 33.8154 25.9886 34.1318C24.8285 34.4482 23.5336 34.6064 22.1039 34.6064C20.7914 34.6064 19.4965 34.4424 18.2191 34.1143C16.9535 33.7744 15.8051 33.2588 14.7738 32.5674C13.7426 31.8643 12.9164 30.9678 12.2953 29.8779C11.6859 28.7764 11.3812 27.4697 11.3812 25.958H17.5687C17.5687 26.708 17.6683 27.3408 17.8676 27.8564C18.0668 28.3721 18.3597 28.7881 18.7465 29.1045C19.1332 29.4092 19.6078 29.6318 20.1703 29.7725C20.7328 29.9014 21.3773 29.9658 22.1039 29.9658C22.889 29.9658 23.5219 29.8545 24.0023 29.6318C24.4828 29.3975 24.8344 29.0928 25.057 28.7178C25.2797 28.3311 25.391 27.9092 25.391 27.4521Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_157_118"
          x="9.38123"
          y="8.30957"
          width="24.1797"
          height="32.2969"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.954167 0 0 0 0 0.442547 0 0 0 0 0.156642 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_157_118"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_157_118"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default Logo;
