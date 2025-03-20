import { Routes, Route } from "react-router";
import Root from "../pages/Root"
import DemoProjects from "../pages/DemoProjects";
import Skills from "../pages/Skills";
import PublicNotes from "../pages/PublicNotes";
import LegalPage from "../pages/LegalPage";
import Note from "../pages/Note"

function Main() {
    return (
        <main className="wrapper">
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path="/demo-projects" element={<DemoProjects />} />
                <Route path="/public-notes" element={<PublicNotes />} />
                <Route path="/public-notes/:noteName" element={<Note />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/legal" element={<LegalPage />} />
            </Routes>
        </main>
    )
}

export default Main;