export const getMonth = (month, monthsForm) => {
    const monthsForm1 = 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,окрябрь,ноябрь,декабрь'.split(',')
    const monthsForm2 = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,окрября,ноября,декабря'.split(',')

    if (monthsForm === 1) {
        return monthsForm1[month]
    }

    if (monthsForm === 2) {
        return monthsForm2[month]
    }
}
