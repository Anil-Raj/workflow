import { createNode, createWorkflow, CREATE_WORKFLOW, DELETE_WORKFLOW, CREATE_NODE } from '../actions'
const workflows = (state = [
    {
        id: 1,
        name: 'workflow 1',
        status: 'Completed',
        nodes: [{
            name: "asdf",
            id: "1",
            status: "Pending",
            detail: "asdf"
        },
        {
            name: "asdf",
            id: "2",
            status: "Pending",
            detail: "asdf"
        }, {
            name: "asdf",
            id: "3",
            status: "Pending",
            detail: "asdf"
        }, {
            name: "asdf",
            id: "4",
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
        case CREATE_WORKFLOW:
            const newWorkflow = createWorkflow()
            newWorkflow.nodes = [createNode(1)]
            return [...state, newWorkflow]
        case DELETE_WORKFLOW:
            return state.filter(w => w.id != action.payload)
        case CREATE_NODE:
            const i = state.find(w => w.id == action.payload).nodes.length + 1
            const node = createNode(i)
            return [...state.filter(w => w.id != action.payload), {
                ...state.find(w => w.id == action.payload),
                nodes: [...state.find(w => w.id == action.payload).nodes, node]
            }]
        default:
            return state
    }
}

export default workflows