import ContentInitial from "./sections/ContentInitial"
import AboutHome from "./sections/AboutHome"
import ProjectsHome from "./sections/ProjectsHome"

export default function HomeMain() {
    return (
        <main className='w-full h-full flex flex-col'>
            <ContentInitial />
            <AboutHome />
            <ProjectsHome />
        </main>
    )
}
