import { connect } from 'react-redux'
import WorkflowDetail from '../WorkflowDetail'

function mapStateToProps(state) {
    return state
}


export default connect(mapStateToProps, null)(WorkflowDetail)
