import ContentInitial from "./sections/ContentInitial"
import AboutHome from "./sections/AboutHome"

export default function HomeMain() {
    return (
        <main className='w-full h-full flex flex-col'>
            <ContentInitial />
            <AboutHome />
        </main>
    )
}
