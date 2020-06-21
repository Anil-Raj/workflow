export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_PENDING: 'SHOW_PENDING'
}


export const createNode = (i) =>{
  return {
    id: new Date().getTime(),
    name: `Task ${i}`,
    detail: ''
  }
}