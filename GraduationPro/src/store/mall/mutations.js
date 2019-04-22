export default{
    getAllData:function(state,data){
        // console.log(data.data.data);
        // console.log(typeof data.data.data);
        var arr = data.data.data;
        arr.map((item,index)=>{
            if(item.name == "banner"){
                state.banner.push(item)
            }else if(item.name == "3buy"){
                state.buy.push(item)
            }else if(item.name == "4get"){
                state.get.push(item);
            }else if(item.name == "5hot"){
                state.hot.push(item);
            }else if(item.name == "6select"){
                state.select.push(item);
            }else if(item.name == "7tab"){
                state.tab.push(item);
            }
        })
    }
}