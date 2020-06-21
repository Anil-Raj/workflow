import { connect } from 'react-redux'
import WorkflowDetail from '../components/WorkflowDetail'

function mapStateToProps(state, ownProps) {
    console.log(state.workflows, ownProps.match.params.id,state.workflows.find(w => w.id == ownProps.match.params.id))
    console.log(state.workflows.find(w => w.id == ownProps.match.params.id).nodes)
    return { nodes: state.workflows.find(w => w.id == ownProps.match.params.id).nodes }
}


export default connect(mapStateToProps, null)(WorkflowDetail)
