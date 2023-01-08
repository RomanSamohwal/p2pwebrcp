import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Room from "./pages/Room";
import Main from "./pages/Main";
import NotFound404 from "./pages/NotFound";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/room/:id' element={<Room/>}/>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/*' element={<NotFound404/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
