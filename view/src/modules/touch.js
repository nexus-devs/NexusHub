function Touch(options) {

    /**
     * Apply Settings if present
     */
    this.listener = {
        rightEdge: {
            initialized: false,
            initialCoord: window.innerWidth,
            initialThreshold: -25,
            event:{
                type: "dragX",
                threshold: 0.25 * window.innerWidth,
                aboveThreshold: false,
                percentage: null,
                method: function(){console.log('lol')},
                done: false
            },
            element: undefined,
            elementSub: undefined,
        }
    }
    
    //console.log(this.listener.rightEdge)

    
    /**
     * Initialize Touch listener
     */
    this.current = {
        startPosX: null,
        startPosY: null,
        posX: null,
        posY: null,
        distanceX: null,
        distanceY: null
    }


    /**
     * Handles TouchStart event
     */
    this.touchStart = (e) => {
        
        //console.log(this.listener.rightEdge)
        
        // Save start positions in touch listener
        this.current.startPosX = e.touches[0].pageX
        this.current.startPosY = e.touches[0].pageY
        
        for(var _target in this.listener){
            var target = this.listener[_target]
            
            // Depending on event type
            if(target.event.trigger === 'dragX' && target.initialCoord - this.current.startPosX < target.initialThreshold){
                target.initialized = true
            }
        }
    }
    
    
    /**
     * Handles TouchEnd event
     */
    this.touchEnd = (e) => {

        // Log Initalized Elements above their threshold
        for(var _target in this.listener){
            
            var target = this.listener[_target]
            if(target.initialized && target.event.aboveThreshold){
                //console.log(target + ' above threshold')
                //target.event.method()
            }
        }
    }
    
    
    /**
     * Handles TouchMove event
     */
    this.touchMove = (e) => {
        
        // Keep track of current position & distance
        this.current.posX = e.touches[0].pageX
        this.current.posY = e.touches[0].pageY
        this.current.distanceX = this.current.startPosX - this.current.posX
        this.current.distanceY = this.current.startPosY - this.current.posY
        
        // Modify listener of targets
        for(var _target in this.listener){
            
            var target = this.listener[_target]
            //console.log(target)
            if(target.initialized){
                
                //console.log(target)
                
                // Check Event Types
                if(target.event.type === 'dragX' && this.current.distanceX > target.event.threshold){
                    //console.log('up')
                    this.listener[_target].event.aboveThreshold = true
                }
            }
        }
    }






    /**
     * Initialize listener
     */
    this.listen = () => {
        document.addEventListener("touchstart", this.touchStart, false)
        document.addEventListener("touchend", this.touchEnd, false)
        document.addEventListener("touchmove", this.touchMove, false)
    }

    this.listen()
}













/**
 * Extend function for options merging
 */
var extend = function(a, b){
    for(var key in b)
        if(b.hasOwnProperty(key))
            a[key] = b[key];
    return a;
}