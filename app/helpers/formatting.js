import numeral from 'numeral'

export const formatCounter = (value) => {
    if (value < 10000) {
        return value.toString()
    } else {
        if (value > 999949 && value < 1000000) {
            value *= 1000
        }
        return numeral(value).format('0.[0] a').toUpperCase()
    }
}

export const thousandSeparator = (str) => {
    const parts = (str + '').split('.')
    const main = parts[0]
    const len = main.length

    let i = len - 1
    let output = ''

    while(i >= 0) {
        output = main.charAt(i) + output
        if ((len - i) % 3 === 0 && i > 0) {
            output = ' ' + output
        }
        --i
    }

    if (parts.length > 1) {
        output += '.' + parts[1]
    }

    return output
}
