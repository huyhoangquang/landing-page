import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SigninPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
