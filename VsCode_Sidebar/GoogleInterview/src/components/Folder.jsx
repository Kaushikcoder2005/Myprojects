import React, { useState } from 'react';

function Folder({ explorer }) {
    const [showFile, setShowFile] = useState(false);
    const [items, setItems] = useState(explorer.items);
    const [input, setInput] = useState(false)
    const [change, setChange] = useState("")

    const handleChange = (e) => {
        setChange(e.target.value)
        console.log(e.target.value);

    }

    const handleFolder = () => {
        setInput(!input)
        const folderData = {
            id: Math.random(), // Use a more robust ID generator in real applications
            name: change,
            isFolder: true,
            items: [],
        };
        if (items.map((item) => item.name).includes(change)) {
            alert("Folder already exists!");
            return;
        } else {
            if (change !== "") {
                setItems([...items, folderData]);
                
            }
        }

    };
    const handleFile = () => {
        setInput(!input)
        const fileData = {
            id: Math.random(), // Use a more robust ID generator in real applications
            name: change,
            isFolder: false,
            items: [],
        };
        if (items.map((item) => item.name).includes(change)) {
            alert("File already exists!");
            return;
        } else {
            if (change !== "") {
                setItems([...items, fileData]);
                
            }
        }

    };

    return (
        // Folder
        <div className="folder w-fit rounded-lg overflow-hidden border border-slate-200 hover:border-slate-300 transition-all duration-200 shadow-sm hover:shadow-md">
            <div>
                <div className="folder-name flex justify-between items-center gap-5 px-6 py-3 bg-white hover:bg-slate-50 cursor-pointer select-none transition-colors duration-200">
                    <div
                        className="flex gap-3 items-center group"
                        onClick={() => setShowFile(!showFile)}
                    >
                        <span className="text-xl transition-transform duration-200 group-hover:scale-110">
                            {showFile ? "📂" : "📁"}
                        </span>
                        <span className="font-medium text-slate-700 group-hover:text-slate-900">
                            {explorer.name}
                        </span>

                    </div>
                    <div className="flex gap-2">
                        <button
                            className="text-sm bg-slate-400 rounded-lg px-2 py-1 hover:bg-slate-200"
                            onClick={handleFolder}
                        >
                            Folder
                        </button>
                        <button className="text-sm bg-slate-400 rounded-lg px-2 py-1 hover:bg-slate-200"
                            onClick={handleFile}>
                            File
                        </button>
                    </div>
                </div>
                <input type="text" value={change} onChange={handleChange} className={`${input ? 'block' : 'hidden'} ml-6 mb-1 pl-2 border-2 border-black rounded-lg text-sm py-1 `} />
            </div>
            <div className={`folder-contents ${showFile ? 'block' : 'hidden'} pl-6 bg-slate-50/50`}>
                {items.map((item) => {
                    if (item.isFolder) {
                        return <Folder explorer={item} key={item.id} />;
                    } else {
                        return (
                            // File
                            <div
                                className={`flex items-center gap-3 px-6 py-3 hover:bg-slate-100 cursor-pointer text-slate-600 hover:text-slate-900 transition-colors duration-200`}
                                key={item.id}
                            >
                                <span className="text-lg transition-transform duration-200 hover:scale-110">
                                    🗄
                                </span>
                                <span className="font-normal">
                                    {item.name}
                                </span>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default Folder;
