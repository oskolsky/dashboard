/* eslint-env node */
/* eslint-disable no-undef */

export const DASHBOARD_OK = 'DASHBOARD_OK'
export const DASHBOARD_ERROR = 'DASHBOARD_ERROR'

export const dashboardOk = (payload) => {
    return {
        type: DASHBOARD_OK,
        payload,
    }
}

export const dashboardError = (errorMessage) => {
    return {
        type: DASHBOARD_ERROR,
        errorMessage,
    }
}

export const requestDashboard = () => {
    return (dispatch) => {
        var xhr = new XMLHttpRequest()

        xhr.open('GET', API_HOST, true)
        xhr.send()
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) return

            if (xhr.status !== 200) {
                dispatch(dashboardError('Не удалось загрузить данные'))
            } else {
                dispatch(dashboardOk(JSON.parse(xhr.responseText)))
            }
        }
    }
}
