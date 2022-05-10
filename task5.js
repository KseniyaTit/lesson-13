function func (obj){
    for(let key in obj){
        if (typeof obj['key'] === 'object'){
   return true
} else if(typeof obj['key'] !== 'object'){
            return false}
    }
}
/* не пойму почему работает не правильно. возвращает false когда true.i need you help here=) */