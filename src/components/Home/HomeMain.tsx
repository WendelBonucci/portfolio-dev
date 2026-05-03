import ContentInitial from "./sections/ContentInitial"
import AboutHome from "./sections/AboutHome"
import ProjectsHome from "./sections/ProjectsHome"
import SkillsHome from "./sections/SkillsHome"

export default function HomeMain() {
    return (
        <main className='w-full h-full flex flex-col'>
            <ContentInitial />
            <AboutHome />
            <ProjectsHome />
            <SkillsHome />
        </main>
    )
}
