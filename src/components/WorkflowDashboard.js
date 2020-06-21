import React, { Fragment } from 'react';
import WorkflowCard from './WorkflowCard'
import AddIcon from '@material-ui/icons/Add';


const WorkflowDashboard = (props) => {
    console.log(props)
    const onDelete = (id) => { props.onDelete(id) }
    const onCreate = () => { props.onCreate() }

    return (
        <div>
            <div className="flex h-16 self-center px-4" >
                <div className="flex-grow">filter</div>
                <div className="flex flex-grow-0 items-center"><button className=" bg-green-500 hover:bg-green-600  hover:shadow-2xl rounded-sm p-1  " onClick={onCreate}><AddIcon></AddIcon> Create Workflow </button></div>
            </div>
            <div className="grid grid-cols-3 gap-4 px-4 py-2 ">
                {
                    props.workflows.sort((a, b) => a.id - b.id).map(({ id, name, status, nodes }) => {
                        console.log(id, name, status, nodes)
                        return (
                            <WorkflowCard key={id} id={id} name={name} status={status} onDelete={() => onDelete(id)}></WorkflowCard>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default WorkflowDashboard;
