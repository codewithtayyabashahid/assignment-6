export default function Hero (){
    return(
        <main className="h-[1400px]">
            <div className="pt-[267px] pl-28">
                <img src="Heading.png"></img>
            </div>
            <div className="pt-10 pl-28 space-x-2">
                <button className="rounded group relative border-2 h-12 w-48 border-black text-white bg-black hover:bg-slate-400">Start Learning Now</button>
                <button className="rounded group relative border-2 h-12 w-48 border-black text-black bg-transparent hover:bg-slate-300">Start Learning Now</button>
                    </div> 
                    <div className="flex justify-end relative -top-[570px] ">
          <img src="image.jpeg" className="w-[640px] h-[900px]" alt="Image" />
        </div>
        <div className="flex justify-center relative -top-[570px]">
            <img src="logo2.png" className="w-[1280px]"></img>
            </div>  
        </main>
    )
}