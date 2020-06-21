
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import { Link } from "react-router-dom";

const WorkflowCard = ({ id, name, status, onDelete }) => {
    return (
        <div className="relative" >
            <div className="absolute top-0 right-0 rounded-full bg-red-700 flex justify-center items-center w-8 h-8">
                <DeleteIcon onClick={onDelete} fontSize="small" style={{ fill: "white" }}></DeleteIcon>
            </div>
            <div className="p-4">
                <div className=" shadow-xl space-y border-2" >
                    <Link to={`/workflow/${id}`}><div className="border-2 m-4 cursor-pointer">{name}</div></Link>
                    <div className="flex space-y px-4 h-10 justify-between">
                        <div>{status}</div>
                        <div className={"rounded-full flex justify-center w-8 h-8 items-center " + (status == 'Completed' ? "bg-green-500" : "bg-gray-400")} >
                            <DoneIcon style={{ fill: "white" }}></DoneIcon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WorkflowCard;