import { connect } from 'react-redux'
import WorkflowDetail from '../components/WorkflowDetail'

function mapStateToProps(state, ownProps) {
    return { nodes: state.workflows.find(w => w.id == ownProps.match.params.id).nodes }
}


export default connect(mapStateToProps, null)(WorkflowDetail)
