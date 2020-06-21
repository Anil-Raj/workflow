import React from 'react';
import Node from './Node'
import ShuffleIcon from '@material-ui/icons/Shuffle';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const WorkflowDetail = (props) => {
    console.log(props)
    return (
        <div>
            <div className="flex h-16 self-center px-4" >
                <div className="flex flex-grow mx-2 items-center"><input class="bg-gray-200 focus:bg-white px-2 py-1 border-2 rounded-sm" value={props.name} /></div>
                <div className="flex flex-grow-0 mx-2 items-center"><button className=" bg-purple-600 hover:bg-purple-700  hover:shadow-2xl rounded-sm p-1  " onClick={() => props.onShuffleNode(props.id)}><ShuffleIcon></ShuffleIcon> Shuffle Node</button></div>
                <div className="flex flex-grow-0 mx-2 items-center"><button className=" bg-red-500 hover:bg-red-600  hover:shadow-2xl rounded-sm p-1  " onClick={() => props.onDeleteNode(props.id)}><DeleteIcon></DeleteIcon> Delete Node</button></div>
                <div className="flex flex-grow-0 mx-2 items-center"><button className=" bg-green-500 hover:bg-green-600  hover:shadow-2xl rounded-sm p-1  " onClick={() => props.onCreateNode(props.id)}><AddIcon></AddIcon> Add Node</button></div>
            </div>
            <div className="flex overflow-scroll space-x-24 mx-2" style={{ height: 500 }}>{props.nodes && console.log(props.nodes.sort((a, b) => a.orderBy - b.orderBy))}
                {props.nodes && props.nodes.sort((a, b) => a.orderBy - b.orderBy).map((n, i) => <Node isFirst={i == 0} isLast={i == props.nodes.length - 1} node={n} key={i} onUpdateNodeStatus={() => props.onUpdateNodeStatus(props.id, n.id)}></Node>)}
            </div >
        </div>
    );
}
export default WorkflowDetail;