
import { Container } from "@mui/material";
import TopSellers from "../../topSellers/TopSellers";

const MainPage = () => {
    return (
        <Container
            maxWidth={'lg'}
            sx={{
                backgroundColor: '#272727',
                minHeight: '100vh',
                height: 'auto',
                pt: { xs: 9, sm: 10 },
                display: 'flex',
                flexDirection: 'row',
                gap: { xs: 0, md: 2 },
            }}>
            <TopSellers />
        </Container>
    );
};

export default MainPage;