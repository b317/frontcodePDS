import {goodsforhome} from "@/api/http";
let arr = []
let ddd = []
goodsforhome().then(res => {
    console.log(res)
    res.data.data.goodsList.map((item,key) => {
        if(key >= 4){
            return;
        }
        let arr1 = item.goodslist.map(item =>{
            return item.goods_name
        })
        let arr2 = item.goodslist.map(item =>{
            return {
                goods_id:item.id,
                shop_id:item.shop_id,
                goods_name:item.goods_name,
                goods_price:item.goods_price,
                goods_discount:item.goods_discount,
                goods_photo:item.goods_photo,
                shop_id:item.shop_id
            }
        })
        let arritem = {
            title:{
                title:item.mainsort.sort,
                tip:arr1
            },
            data:arr2
        }
        ddd.push(item.mainsort.sort)
        arr.push(arritem)
    })
})
export default{
   arr:arr,
   arr2:ddd
}
