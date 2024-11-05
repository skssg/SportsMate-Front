import { useMediaQuery } from 'react-responsive';

export const useResponsive = () => {
    const isPC:boolean = useMediaQuery({ query: "(min-width: 481px)" });
    const isMobile:boolean = useMediaQuery({ query: "(max-width: 480px)" });

    return { isPC, isMobile };
};