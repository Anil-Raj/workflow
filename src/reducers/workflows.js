import { createNode, createWorkflow, updateNodeStatus, shuffleArray, CREATE_WORKFLOW, DELETE_WORKFLOW, CREATE_NODE, DELETE_NODE, SHUFFLE_NODE, UPDATE_NODE_STATUS } from '../actions'
const workflows = (state = [
    {
        id: 1,
        name: 'workflow 1',
        status: 'Completed',
        nodes: [{
            name: "asdf",
            id: "1",
            orderBy: 1,
            status: "Pending",
            detail: "asdf"
        },
        {
            name: "asdf 2",
            id: "2",
            orderBy: 2,
            status: "Pending",
            detail: "asdf"
        }, {
            name: "asdf 3",
            id: "3",
            orderBy: 3,
            status: "Pending",
            detail: "asdf"
        }, {
            name: "asdf 4",
            id: "4",
            orderBy: 4,
            status: "Pending",
            detail: "asdf"
        },
        ]
    },
    {
        id: 2,
        name: 'workflow 2',
        status: 'Pending',
        nodes: []
    },
    {
        id: 3,
        name: 'workflow 3',
        status: 'Completed',
        nodes: []
    },
    {
        id: 4,
        name: 'workflow 4',
        status: 'Completed',
        nodes: []
    },
    {
        id: 5,
        name: 'workflow 5',
        status: 'Pending',
        nodes: []
    },
    {
        id: 6,
        name: 'workflow 6',
        status: 'Completed',
        nodes: []
    },

], action) => {
    switch (action.type) {
        case CREATE_WORKFLOW: {
            const newWorkflow = createWorkflow()
            newWorkflow.nodes = [createNode(1)]
            return [...state, newWorkflow]
        }
        case DELETE_WORKFLOW: {
            return state.filter(w => w.id != action.payload)
        }
        case CREATE_NODE: {
            let i = state.find(w => w.id == action.payload).nodes.length + 1
            let node = createNode(i)
            return [...state.filter(w => w.id != action.payload), {
                ...state.find(w => w.id == action.payload),
                nodes: [...state.find(w => w.id == action.payload).nodes, node]
            }]
        }
        case DELETE_NODE: {
            return [...state.filter(w => w.id != action.payload), {
                ...state.find(w => w.id == action.payload),
                nodes: [...state.find(w => w.id == action.payload).nodes.slice(0, -1)]
            }]
        }
        case SHUFFLE_NODE: {
            let newState = [...state.filter(w => w.id != action.payload), {
                ...state.find(w => w.id == action.payload),
                nodes: shuffleArray(state.find(w => w.id == action.payload).nodes)
            }]
            return newState
        }
        case UPDATE_NODE_STATUS: {
            let node = state.find(w => w.id == action.payload.workflowId).nodes.find(n => n.id == action.payload.nodeId)
            let updatedNode = updateNodeStatus(node)
            return [...state.filter(w => w.id != action.payload.workflowId), {
                ...state.find(w => w.id == action.payload.workflowId),
                nodes: [...state.find(w => w.id == action.payload.workflowId).nodes.filter(n => n.id != action.payload.nodeId), updatedNode]
            }]
        }
        default:
            return state
    }
}

export default workflows