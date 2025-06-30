import React from 'react';
import BooksPage from "./ui/pages/BooksPage/BooksPage.jsx"
import AuthorsPage from "./ui/pages/AuthorsPage/AuthorsPage.jsx"
import CountriesPage from "./ui/pages/CountriesPage/CountriesPage.jsx"
import {BrowserRouter, Routes, Route} from "react-router";
import Layout from "./ui/components/layout/Layout/Layout.jsx";
import HomePage from "./ui/pages/HomePage/HomePage.jsx";
import BooksDetails from "./ui/components/books/BookDetails/BookDetails.jsx";
import AuthorsDetails from "./ui/components/authors/AuthorDetails/AuthorDetails.jsx";
import CountriesDetails from "./ui/components/countries/CountryDetails/CountryDetails.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="books" element={<BooksPage/>}/>
                    <Route path="authors" element={<AuthorsPage/>}/>
                    <Route path="countries" element={<CountriesPage/>}/>
                    <Route path="books/:id" element={<BooksDetails/>}/>
                    <Route path="authors/:id" element={<AuthorsDetails/>}/>
                    <Route path="countries/:id" element={<CountriesDetails/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;