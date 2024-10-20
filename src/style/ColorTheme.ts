import { createTheme } from '@mui/material';

export const theme = createTheme({
    colorSchemes: {
        dark: {
            palette: {
                primary: {
                    main: '#000000',
                },
                secondary: {
                    main: '#52057B',
                },
                background: {
                    default: '#494949',
                },
            },
        },
        // dark: {
        //     palette: {
        //         primary: {
        //             main: '#D6C0B3',
        //         },
        //         secondary: {
        //             main: '#AB886D',
        //         },
        //         background: {
        //             default: '#686868',
        //         },
        //     },
        // },
    },
});
