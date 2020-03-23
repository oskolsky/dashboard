import { connect } from 'react-redux'

import WidgetProgress from 'components/UI/WidgetProgress/WidgetProgress'

const mapStateToProps = (state) => {
    return {
        value: state.dashboard.plan,
    }
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetProgress)
