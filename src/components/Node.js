import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import {
    Link
} from "react-router-dom";

const Node = ({ node: { id, name, detail, status }, isFirst, isLast, onUpdateNodeStatus }) => {
    return (
        <div className="relative" key={id}>
            <div className={"absolute top-0 right-0 rounded-full flex justify-center w-8 h-8 items-center " + (status == 'Completed' ? "bg-green-500" : (status == 'InProgress'? "bg-blue-400":"bg-gray-400"))}>
                <DoneIcon onClick={onUpdateNodeStatus} style={{ fill: "white" }}></DoneIcon>
            </div>
            <div className="p-4 h-full" style={{ width: 400 }}>
                <div className=" shadow-xl space-y border-2 min-h-full flex flex-col" >
                    <input className="m-4 bg-gray-200 focus:bg-white px-2 py-1 border-2 rounded-sm" value={name}></input>
                    <div className="flex space-y p-4 h-64 justify-between flex-auto">
                        <textarea className="bg-gray-200 focus:bg-white px-2 py-1 border-2 rounded-sm min-w-full" value={detail}></textarea>
                    </div>
                    {!isLast && <div className="line" style={{
                        position: 'absolute',
                        borderTop: '1px solid black',
                        width: '6rem',
                        left: '100%',
                        bottom: '50%'
                    }}></div>
                    }
                    {!isFirst && <div style={{
                        borderTop: '10px solid transparent',
                        height: '20px',
                        width: '20px',
                        borderLeft: '10px solid black',
                        borderBottom: '10px solid transparent',
                        position: 'absolute',
                        left: 0,
                        bottom: 'calc(50% - 10px)'
                    }}></div>
                    }
                </div>
            </div>

        </div>
    );
}
export default Node;