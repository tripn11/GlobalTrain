export default (records, filters)=> {
    if (filters.searchedId !== "") {
        return records.find((item)=> item.id === filters.searchedId) || {forClient:[]}
    }else {
        return {forClient:[]}
    } 
}