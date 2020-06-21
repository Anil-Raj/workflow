import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import WorkflowDetail from '../components/WorkflowDetail'
import { onCreateNode } from '../actions'


function mapStateToProps(state, ownProps) {
    return { id:ownProps.match.params.id,  nodes: state.workflows.find(w => w.id == ownProps.match.params.id).nodes }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ onCreateNode }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkflowDetail)
