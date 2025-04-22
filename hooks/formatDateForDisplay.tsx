const formatDateForDisplay = (value: Date|undefined) => {

    const date = typeof(value) == 'string' ? new Date(value) : value;

    if(date)
    {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
    else { return "aucune date précise"; }
}

export default formatDateForDisplay