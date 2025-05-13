import { Routes, Route } from "react-router";
import Root from "../../pages/Root/Root"
import DemoProjects from "../../pages/DemoProjects/DemoProjects";
import Skills from "../../pages/Skills/Skills";
import PublicNotes from "../../pages/PublicNotes/PublicNotes";
import LegalPage from "../../pages/LegalPage/LegalPage";
import Note from "../../pages/Note/Note"

function Main() {
    return (
        <main className="wrapper flex-grow-1 justify-content-center align-content-center m-t-1 m-b-1">
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path="/demo-projects" element={<DemoProjects />} />
                <Route path="/public-notes">
                    <Route index  element={<PublicNotes />} />
                    <Route path=":noteName" element={<Note />} />
                </Route>
                <Route path="/skills" element={<Skills />} />
                <Route path="/legal" element={<LegalPage />} />
            </Routes>
        </main>
    )
}

export default Main;