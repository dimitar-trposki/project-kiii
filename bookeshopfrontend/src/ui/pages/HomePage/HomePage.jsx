import React from 'react';
import {
    Box,
    Container,
    Paper, Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";

const HomePage = () => {
    return (
        <Box sx={{m: 0, p: 0}}>
            <Container maxWidth="xl" sx={{mt: 3, py: 3}}>
                <Typography variant="h4" gutterBottom>
                    Welcome to E-Shop App! 👋
                </Typography>
                <Typography variant="body1" sx={{mb: 4}}>
                    This is the home page.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    🌍 Top 3 Books Worldwide
                </Typography>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>Name</strong></TableCell>
                                <TableCell><strong>Author</strong></TableCell>
                                <TableCell><strong>Genre</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Don Quixote</TableCell>
                                <TableCell>Miguel de Cervantes</TableCell>
                                <TableCell>Classic / Satire</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>A Tale of Two Cities</TableCell>
                                <TableCell>Charles Dickens</TableCell>
                                <TableCell>Historical Fiction</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>The Lord of the Rings</TableCell>
                                <TableCell>J.R.R. Tolkien</TableCell>
                                <TableCell>Fantasy</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    );
};

export default HomePage;