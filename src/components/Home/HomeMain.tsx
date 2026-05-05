import ContentInitial from "./sections/ContentInitial"
import AboutHome from "./sections/AboutHome"
import ProjectsHome from "./sections/ProjectsHome"
import SkillsHome from "./sections/SkillsHome"
import Trajectory from "./sections/Trajectory"
import LoadingScreen from "../UI/Loading"

export default function HomeMain() {
    return (
        <main className='w-full h-full flex flex-col overflow-hidden'>
            <ContentInitial />
            <AboutHome />
            <ProjectsHome />
            <SkillsHome />
            <Trajectory />
            <LoadingScreen />
        </main>
    )
}
