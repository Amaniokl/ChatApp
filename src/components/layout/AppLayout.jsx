import React from 'react'
import Title from '../shared/Title';
import Header from './Header';
import { Drawer, Box, Skeleton } from "@mui/material";
const AppLayout = () => (WrappedComponent) => {
    return (props) => {
        return (
            <>
                <Title />
                <Header></Header>
                <Box container height={"calc(100vh - 4rem)"}>
                    <Box
                        item
                        sm={4}
                        md={3}
                        sx={{
                            display: { xs: "none", sm: "block" },
                        }}
                        height={"100%"}
                    >
                    </Box>
                    <Box item xs={12} sm={8} md={5} lg={6} height={"100%"}>
                        <WrappedComponent {...props}/>
                    </Box>

                    <Box
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
                        
                    </Box>
                </Box>
            </>
        );
    };
};

export default AppLayout;