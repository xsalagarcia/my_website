import { Routes, Route } from "react-router-dom";
import Root from "../pages/Root"
import DemoProjects from "../pages/DemoProjects";
import Skills from "../pages/Skills";
import PublicNotes from "../pages/PublicNotes";

function Main() {
    return (
        <main className="wrapper">
            <Routes>
                <Route path="/" element={<Root />}></Route>
                <Route path="/demo-projects" element={<DemoProjects />}></Route>
                <Route path="/public-notes" element={<PublicNotes />}></Route>
                <Route path="/skills" element={<Skills />}></Route>
            </Routes>
        </main>
    )
}

export default Main;