import React from 'react';
import Node from './Node'
const WorkflowDetail = (props) => {
    console.log(props)
    return (
        <div>
            <div onClick={() => props.onCreateNode(props.id)}>Add Node</div>
            <div className="flex overflow-scroll space-x-24" style={{ height: 500 }}>
                {props.nodes && props.nodes.map((n, i) => <Node isFirst={i == 0} isLast={i == props.nodes.length - 1} node={n} key={i}></Node>)}
            </div >
        </div>
    );
}
export default WorkflowDetail;