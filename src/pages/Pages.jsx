import Home from "./Home"
import { Route, Routes } from "react-router-dom"
import Discover from "./Discover"

function Pages() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover/:type" element={<Discover />} />
        </Routes>
    )
}

export default Pages