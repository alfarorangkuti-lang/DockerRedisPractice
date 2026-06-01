export default function NavBar(){
    return (
        <div className="h-screen w-fit bg-midground border flex flex-col border-stroke">
            <div className="flex items-center justify-center w-fit h-fit py-2 border-b border-stroke px-4">
                <h1>Logo</h1>
            </div>

            <div className="h-full flex-1">
                <div><a href="#">H</a></div>
                <div><a href="#">S</a></div>
                <div><a href="#">A</a></div>
                <div><a href="#">H</a></div>
            </div>
            
            <div className="flex items-center justify-center w-fit h-fit py-2 border-t border-stroke px-4">
                <h1>Logo</h1>
            </div>
        </div>
    )
}