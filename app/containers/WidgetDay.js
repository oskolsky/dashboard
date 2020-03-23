import { connect } from 'react-redux'

import WidgetDay from 'components/UI/WidgetDay/WidgetDay'

const mapStateToProps = (state) => {
    return {
        unprocessedOrders: state.dashboard.unprocessed_orders,
        missedCalls: state.dashboard.missed_calls,
    }
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetDay)
