

const NoteCard = () => {
    return (
        <>
            <div className="Notecard shadow-lg rounded-lg p-3">
                <div className="flex justify-between">
                    <p>April 3, 2024</p>
                    <p>...</p>
                </div>
                <div className="mt-2">
                    <title className="font-bold text-2xl" >This Is my title</title>
                    <p className="text-sm text-slate-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed culpa recusandae nisi ut dolorem distinctio, exercitationem commodi vel praesentium impedit?
                    </p>
                </div>
                <div className="mt-4">
                    <button className="border-2 border-sky-500 shadow-lg rounded-lg bg-white text-sky-500 text-lg font-semibold py-2 px-4 hover:bg-sky-500 hover:text-white ">
                        Pocket Money
                    </button>
                    <button className="border-2 border-sky-500 shadow-lg rounded-lg bg-white text-sky-500 text-lg font-semibold py-2 px-4 hover:bg-sky-500 hover:text-white ">
                        Pocket Money
                    </button>
                </div>
            </div>
        </>
    )
}

export default NoteCard;