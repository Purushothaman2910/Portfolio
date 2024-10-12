function InViewPortObserver(setinview){
    let Observer = new IntersectionObserver((entries)=>{
        let entry = entries[0]
        setinview(entry.isIntersecting)
    } , {threshold : 0.5 })
    return Observer
}


class InviewPortListener{
    constructor( setInView , ref ){
        this.setinview = setInView ;
        this.ref = ref ;
        this.Listener = function () { return InViewPortObserver(this.setinview)}
        this.Observe = function () {
            let Listner = this.Listener();
            if(this.ref.current){
                Listner.observe(this.ref.current)
            }
        }
        this.unObserve = function(){
            let Listner = this.Listener();
            if(this.ref.current){
                Listner.unobserve(this.ref.current)
            }
        }
    }
}


export { InviewPortListener , InViewPortObserver }