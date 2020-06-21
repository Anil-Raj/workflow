import { createNode, createWorkflow, CREATE_WORKFLOW, DELETE_WORKFLOW } from '../actions'
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
    },
    {
        id: 3,
        name: 'workflow 3',
        status: 'Completed',
    },
    {
        id: 4,
        name: 'workflow 4',
        status: 'Completed',
    },
    {
        id: 5,
        name: 'workflow 5',
        status: 'Pending',
    },
    {
        id: 6,
        name: 'workflow 6',
        status: 'Completed',
    },

], action) => {
    switch (action.type) {
        case 'ADD_NODE':
            state[action.payload].concat(createNode())
            return state
        case CREATE_WORKFLOW:
            return state.concat(createWorkflow())
        case DELETE_WORKFLOW:
            return state.filter(w => w.id != action.payload)
        default:
            return state
    }
}

export default workflows