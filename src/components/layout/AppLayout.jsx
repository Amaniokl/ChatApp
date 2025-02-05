import React from 'react'
import Title from '../shared/Title';
import Header from './Header';
import { Drawer, Grid2, Skeleton } from "@mui/material";
const AppLayout = () => (WrappedComponent) => {
    return (props) => {
        return (
            <>
                <Title />
                <Header></Header>
                <Grid2 container height={"calc(100vh - 4rem)"}>
                    <Grid2
                        item
                        sm={4}
                        md={3}
                        sx={{
                            display: { xs: "none", sm: "block" },
                        }}
                        height={"100%"}
                    >
                    </Grid2>
                    <Grid2 item xs={12} sm={8} md={5} lg={6} height={"100%"}>
                        <WrappedComponent {...props}/>
                    </Grid2>

                    <Grid2
                        item
                        md={4}
                        lg={3}
                        height={"100%"}
                        sx={{
                            display: { xs: "none", md: "block" },
                            padding: "2rem",
                            bgcolor: "rgba(0,0,0,0.85)",
                        }}
                    >
                        
                    </Grid2>
                </Grid2>
            </>
        );
    };
};

export default AppLayout;