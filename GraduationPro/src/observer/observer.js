let EventList = {
    　　//事件名称与事件函数的关系key:[]
       //key:[]
    }
    
    
    const $on = (EventName,cb)=>{
    　　//判断事件名称是否存在
        if(!(EventList[EventName])){
    　　　　//事件名称不存在，则创建数组
            EventList[EventName] = [];
        }
    　　//将事件名称对应的函数push到数组中
        EventList[EventName].push(cb);
    }
    
    
    const $emit = (EeventName,params)=>{
    　　//判断事件名称是否存在，不存在，直接return
        if(!EventList[EeventName])return;
    　　//事件名称存在，获取当前事件名称对应的所有函数，遍历执行
        let EventLists = EventList[EeventName];
    　　//遍历事件名称所对应的函数
        EventLists.map((cb)=>{
    　　　　//判断是否传值，执行对应的函数
            params?cb(params):cb();
        })
    }
    
    const $off = (EventName,callback)=>{
    　　//判断事件名称是否存在，若存在
       if(EventList[EventName]){
           let EventListsOff = EventList[EventName];
    　　　　//判断第二个参数是否存在，如果存在
           if(callback){
    　　　　　　　　//将其从数组中移除
                EventList[EventName] =  EventListsOff.filter((cb)=>{
                    return cb != callback;
                })
           }else{
    　　　　　　　　//第二个参数不存在，直接将数组清空
                EventList[EventName].length = 0;
           }
       }
    }
    
    
    export default {
        $on,
        $emit,
        $off
    }