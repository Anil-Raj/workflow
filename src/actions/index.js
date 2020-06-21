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
    detail: ''
  }
}

export const createWorkflow = (i) => {
  return {
    id: new Date().getTime(), 
    name: 'asdfa', 
    status: 'adfasdf'
  }
}






export const onDelete = (i) => {
  return {
    type: DELETE_WORKFLOW,
    payload: i
  }
}

export const onCreate = (i) => {
  return {
    type: CREATE_WORKFLOW
  }
}

export const onCreateNode = (i) => {
  return {
    type: CREATE_NODE,
    payload: i
  }
}




export const DELETE_WORKFLOW = 'DELETE_WORKFLOW'
export const CREATE_WORKFLOW = 'CREATE_WORKFLOW'
export const CREATE_NODE = 'CREATE_NODE'