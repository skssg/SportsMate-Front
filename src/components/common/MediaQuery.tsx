import { useMediaQuery } from 'react-responsive';

export const useResponsive = () => {
    const isPC:boolean = useMediaQuery({ query: "(min-width: 431px)" });
    const isMobile:boolean = useMediaQuery({ query: "(max-width: 430px)" });

    return { isPC, isMobile };
};