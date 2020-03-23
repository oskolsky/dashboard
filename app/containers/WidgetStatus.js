import { connect } from 'react-redux'

import WidgetStatus from 'components/UI/WidgetStatus/WidgetStatus'

const mapStateToProps = (state) => {
    return {
        date: state.dashboard.status.date,
        new: state.dashboard.status.new,
        open: state.dashboard.status.open,
        delivery: state.dashboard.status.delivery,
        pending: state.dashboard.status.pending,
    }
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetStatus)
