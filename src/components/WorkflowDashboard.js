import React, { Fragment } from 'react';
import WorkflowCard from './WorkflowCard'

const WorkflowDashboard = (props) => {
    console.log(props)
    const onDelete = (id) => { props.onDelete(id) }
    const onCreate = () => { props.onCreate() }

    return (
        <div>
            <div onClick={onCreate}>Create Workflow </div>
            <div className="grid grid-cols-3 gap-4 px-4 py-2 ">
                {
                    props.workflows.map(({ id, name, status, nodes }) => {
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
