import { connect } from 'react-redux'

import { requestDashboard } from 'actions/Dashboard'

import Dashboard from 'components/Dashboard/Dashboard'

const mapStateToProps = (state) => {
    return {
        errorMessage: state.dashboard.errorMessage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestDashboard: () => dispatch(requestDashboard()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
