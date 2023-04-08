import moment from "moment";

// const arrange = (records, filters) => {
//     if(filters.sort ==='down' || filters.down === '') {
//         return records.sort( (a, b) => a.createdAt - b.createdAt )
//     }else if (filters.sort === 'up') {
//         return records.sort((a,b) => b.createdAt - a.createdAt )
//     }    
// }









// const sortByStatus =(records, filters)=> {
//     let record;
//     switch (filters.status) {
//         case 'all status' :
//             record = records
//             break;
//         case 'pending' :
//             record = records.filter( (item) => item.forClient[item.forClient.length-1].status === 'pending')
//             break;
//         case 'on hold' : 
//             record = records.filter( (item) => item.forClient[item.forClient.length-1].status === 'on hold')
//             break;
//         case 'in transit' :
//             record = records.filter( (item) => item.forClient[item.forClient.length-1].status === 'in transit')
//             break;
//         case 'delivered' : 
//             record = records.filter( (item) => item.forClient[item.forClient.length-1].status === 'delivered')
//             break;
//         default:
//             break
//     }
//     return record;
// }

// const range = (records, filters) => {
//     if(filters.date.startDate !== null && filters.date.endDate !== null) {
//         const lowerLimit = moment(filters.date.startDate)
//         const upperLimit = moment(filters.date.endDate)

//         return records.filter( (item) => moment(item.createdAt).isSameOrAfter(lowerLimit,'day') && moment(item.createdAt).isSameOrBefore(upperLimit,'day'))
//     } else {
//         return records;
//     }
// }

// const searcher = (records, filters)=> {
//     if (filters.adminSearchedId !== "") {
//         return records.filter((item)=> item.id.search(filters.adminSearchedId) > -1)
//     }else {
//         return records
//     } 
// }

// export default (records, filters) => {
//     if(records.length > 0){
//         const record = sortByStatus(records, filters)
//         if(record.length>0){
//             const ranged = range(record,filters);
//             if(ranged.length > 0){
//                 const searched = searcher(ranged,filters)
//                 return searched
//             }
//         }
//         return []
//     }else {
//         return []
//     }
// }


const sortByStatus =(records, filters)=> {
    let record;
    switch (filters.status) {
        case 'all status' :
            record = records
            break;
        case 'pending' :
            record = records.filter( (item) => item.forClient[item.forClient.length-1].status === 'pending')
            break;
        case 'on hold' : 
            record = records.filter( (item) => item.forClient[item.forClient.length-1].status === 'on hold')
            break;
        case 'in transit' :
            record = records.filter( (item) => item.forClient[item.forClient.length-1].status === 'in transit')
            break;
        case 'delivered' : 
            record = records.filter( (item) => item.forClient[item.forClient.length-1].status === 'delivered')
            break;
        default:
            break
    }
    return record;
}

const range = (records, filters) => {
    if(filters.date.startDate !== null && filters.date.endDate !== null) {
        const lowerLimit = moment(filters.date.startDate)
        const upperLimit = moment(filters.date.endDate)

        return records.filter( (item) => moment(item.createdAt).isSameOrAfter(lowerLimit,'day') && moment(item.createdAt).isSameOrBefore(upperLimit,'day'))
    } else {
        return records;
    }
}

const searcher = (records, filters)=> {
    if (filters.adminSearchedId !== "") {
        return records.filter((item)=> item.id.search(filters.adminSearchedId) > -1)
    }else {
        return records
    } 
}

const arrange = (records, filters) => {
    let recordsCopy = records.map((record) => ({ ...record }));
    if(filters.sort ==='down' || filters.sort === '') {
        return recordsCopy.sort( (a, b) => a.createdAt - b.createdAt )
    }else if (filters.sort === 'up') {
        return recordsCopy.sort((a,b) => b.createdAt - a.createdAt )
    }else {
        return []
    }    
}

export default (records, filters) => {
    if(records.length > 0){
        const record = sortByStatus(records, filters)
        if(record.length>0){
            const ranged = range(record,filters);
            if(ranged.length > 0){
                const searched = searcher(ranged,filters)
                if(searched.length > 1){
                    const arranged = arrange(searched,filters)
                    return arranged;
                }
                return searched
            }
        }
        return []
    }else {
        return []
    }
}