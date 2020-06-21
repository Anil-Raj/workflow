import { createNode } from '../actions'
const workflows = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NODE':
            state[action.payload].concat(createNode())
            return state
        case 'CREATE_WORKFLOW':
            state[action.payload] = { id: 12, name: 'asdfa', status: 'adfasdf' }
        default:
            return state
    }
}

export default workflows