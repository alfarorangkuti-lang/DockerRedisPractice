import NavBar from "./navbar"
export default function MainLayout({children, title} : {children : React.ReactNode, title: String}){
    return (
        <div className="flex">
            <NavBar/>
            <div className="flex-1 p-5">
                <div className="flex w-full">
                    <span className="text-3xl font-bold">{title}</span>
                </div>
                {children}
            </div>
        </div>
    )
}