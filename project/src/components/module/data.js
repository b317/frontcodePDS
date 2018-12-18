import {getmainsort} from "@/api/http.js"
let data = []
getmainsort().then(res => {
    let ll = res.data.data.categoryList
    ll.map((item,index) => {
        data.push({
            name:item.sort,
            id:item.id
        })
    })
});
export default {data:data}