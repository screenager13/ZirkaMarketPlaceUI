import { createTheme } from '@mui/material';

export const theme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#393E46',
                },
                secondary: {
                    main: '#00ADB5',
                },
                background: {
                    default: '#222831',
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
