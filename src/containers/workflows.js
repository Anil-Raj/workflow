import { connect } from 'react-redux'
import Workflows from '../Workflows'

function mapStateToProps(state) {
    return state
}


export default connect(mapStateToProps, null)(Workflows)
