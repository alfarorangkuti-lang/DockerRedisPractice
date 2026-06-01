import NavBar from "./navbar"
export default function MainLayout({children} : {children : React.ReactNode}){
    return (
        <div className="flex">
            <NavBar/>
            {children}
        </div>
    )
}