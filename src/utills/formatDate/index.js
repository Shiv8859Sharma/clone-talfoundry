function formatDate(dateString, returnOutput, monthType) {
    const date = new Date(dateString);
    const day = ('0' + date.getDate()).slice(-2);
    const year = date.getFullYear();
    const shortYear = year.toString().slice(-2);

    let month;
    if (monthType === 'short' || monthType === 'long') {
        month = date.toLocaleString('default', { month: monthType });
    } else {
        month = ('0' + (date.getMonth() + 1)).slice(-2);
    }

    const dateObj = {
        mm: month,
        dd: day,
        yyyy: year,
        yy: shortYear
    };

    const splitBy = returnOutput.includes('/') ? '/' : returnOutput.includes('-') ? '-' : ' ';
    const newDate = returnOutput.split(splitBy).map(part => dateObj[part] || part).join(splitBy);

    return newDate;
}

export default formatDate;
