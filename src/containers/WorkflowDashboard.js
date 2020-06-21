import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onDelete, onCreate } from '../actions'
import WorkflowDashboard from '../components/WorkflowDashboard'


function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ onDelete, onCreate }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkflowDashboard)
