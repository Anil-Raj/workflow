export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_PENDING: 'SHOW_PENDING'
}


export const createNode = (i) => {
  return {
    id: new Date().getTime(),
    name: `Task ${i}`,
    detail: '',
    status: 'Pending',
    orderBy: i
  }
}

export const createWorkflow = (i) => {
  return {
    id: new Date().getTime(),
    name: 'asdfa',
    status: 'adfasdf'
  }
}






export const onDelete = (workflowId) => {
  return {
    type: DELETE_WORKFLOW,
    payload: workflowId
  }
}

export const onCreate = (i) => {
  return {
    type: CREATE_WORKFLOW
  }
}

export const onCreateNode = (workflowId) => {
  return {
    type: CREATE_NODE,
    payload: workflowId
  }
}
export const onDeleteNode = (workflowId) => {
  return {
    type: DELETE_NODE,
    payload: workflowId
  }
}
export const onShuffleNode = (workflowId) => {
  return {
    type: SHUFFLE_NODE,
    payload: workflowId
  }
}
export const shuffleArray = (array) => {
  let newArray = [].concat(array)
  for (var i = newArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = newArray[i].orderBy;
    newArray[i].orderBy = newArray[j].orderBy;
    newArray[j].orderBy = temp;
  }
  return newArray;
}

export const updateNodeStatus = (node) => {
  node.status = node.status == 'Pending' ? 'InProgress' : (node.status == 'InProgress' ? 'Completed' : 'Pending')
  return node;
}

export const onUpdateNodeStatus = (workflowId, nodeId) => {
  return {
    type: UPDATE_NODE_STATUS,
    payload: {
      workflowId: workflowId,
      nodeId, nodeId
    }
  }
}




export const DELETE_WORKFLOW = 'DELETE_WORKFLOW'
export const CREATE_WORKFLOW = 'CREATE_WORKFLOW'
export const CREATE_NODE = 'CREATE_NODE'
export const DELETE_NODE = 'DELETE_NODE'
export const SHUFFLE_NODE = 'SHUFFLE_NODE'
export const UPDATE_NODE_STATUS = 'UPDATE_NODE_STATUS'