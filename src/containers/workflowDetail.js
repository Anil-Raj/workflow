import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import WorkflowDetail from '../components/WorkflowDetail'
import { onCreateNode, onDeleteNode, onShuffleNode, onUpdateNodeStatus } from '../actions'


function mapStateToProps(state, ownProps) {
    const workflow = state.workflows.find(w => w.id == ownProps.match.params.id);
    return { ...workflow, id:ownProps.match.params.id }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ onCreateNode, onDeleteNode, onShuffleNode, onUpdateNodeStatus }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkflowDetail)
