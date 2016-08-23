const EventListener = {
    addEvents(target, eventType, callback) {
        if(target.addEventListener) {
            target.addEventListener(eventType, callback, false);
        } else if(target.attachEvent) {
            target.attachEvent("on" + eventType, callback);
        } else{
            target["on" + type] = callback;
        }
    },

    removeEvents(target, eventType, callback) {
        if(target.removeEventListener) {
            target.removeEventListener(eventType, callback, false);;
        } else if(target.detachEvent) {
            target.detachEvent("on" + eventType, callback);
        } else{
            target["on" + eventType] = null;
        }
    }
}

export default EventListener;