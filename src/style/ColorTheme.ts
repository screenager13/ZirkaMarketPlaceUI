import { createTheme } from '@mui/material';

export const theme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#7E60BF',
                },
                secondary: {
                    main: '#E4B1F0',
                },
                background: {
                    default: '#433878',
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
