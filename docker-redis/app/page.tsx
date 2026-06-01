import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-midground space-y-4">
      
      <div className="flex space-x-4">
        <i className="text-5xl text-gray-800">X</i>
        <h1 className="font-bold italic text-5xl text-gray-800">Practine</h1>
      </div>
      
      <div className="w-lg h-72 py-10 px-6 pb-20 border border-stroke rounded-xl space-y-2">
        <div className="w-full h-fit flex flex-col space-y-2">
          <label htmlFor="username" className="text-sm">Username</label>
          <input type="text" className="rounded-md border border-stroke p-2 outline-0 focus:outline-1 outline-stroke tracking-wider"/>
        </div>

        <div className="w-full h-fit flex flex-col space-y-2">
          <label htmlFor="username" className="text-sm">Password</label>
          <input type="password" className="rounded-md border border-stroke p-2 outline-0 focus:outline-1 outline-stroke tracking-widest"/>
        </div>

        <div className="w-full h-fit flex flex-col items-end mt-4">
          <button className=" text-sm py-2 px-4 bg-foreground text-background font-bold rounded tracking-wide cursor-pointer hover:bg-gray-700 transition duration-200">LOG IN</button>
        </div>

      </div>
    </div>
  );
}
