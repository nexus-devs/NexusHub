document.addEventListener('DOMContentLoaded', function () {
    


    // Index Еlements
    var eleNavIco = document.getElementsByClassName('nav-ico')[0]
    var eleNav = document.getElementsByClassName('nav-r')[0]
    var eleNavMain = document.getElementsByTagName('nav')[0]
    var eleDim = document.getElementsByClassName('nav-r-visible-cover')[0]
    
    var touch = new Touch({})
    
    //console.log(touch.listener)
    
    
    
    
    
    
    /** Scroll Events (Nav Bar) **/
    var lastScrollTop = 0;
    var counter_up = 0;
    var counter_down = 0;
    window.addEventListener("scroll", function(){ 
        var st = window.pageYOffset || document.documentElement.scrollTop
        
        if (st > lastScrollTop){
            counter_up = 0;
            counter_down++
            if(counter_down > 10){
                eleNavMain.classList.add('nav-hidden')
            }
        }
        
        /* else {
            counter_down = 0;
            counter_up++
            if(counter_up > 2){
                eleNavMain.classList.remove('nav-hidden')
            }
        } */
        
        // On top? Show nav always
        if(window.pageYOffset < 34){
            eleNavMain.classList.remove('nav-hidden')
        }
        lastScrollTop = st;
    }, false);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /** Menu Stuff **/

    // Touch States
    var rightEdge = {
        initialized: false,
        dragThreshold: 0.15 * window.innerWidth,
        aboveThreshold: false,
        dargPercentage: null,
        dragElement: eleNav,
        dragElementSub: eleDim,
        dragSuccess: false
    }
    
    var current = {
        startPosX: null,
        startPosY: null,
        posX: null,
        posY: null
        // Add distanceX, distanceY in constructor (start - pos * +-1)
    }

    // UI Functions
    function ToggleMenu() {
        // Make sure nav bar always visible
        eleNavMain.classList.remove('nav-hidden')
        
        // Remove previous position from drag
        eleNav.removeAttribute('style')
        rightEdge.dragSuccess = !rightEdge.dragSuccess
        
        if (eleNav.classList.contains('nav-r-visible')) {
            
            // Block transition during touch
            eleNav.classList.remove('touch-drag')
            
            // Hide Side Bar
            eleNav.classList.remove('nav-r-visible')
        } else {
            
            // Block transition during touch
            eleNav.classList.remove('touch-drag')

            // Hide Side Bar
            eleNav.classList.add('nav-r-visible')
        }
    }

    
    
    /**
     * Touch Handling 
     */
    function TouchStart(e) {
        current.startPosX = e.touches[0].pageX
        current.startPosY = e.touches[0].pageY
        
        // Menu Closed and dragging on edge? -> add notransition class
        if ((window.innerWidth - e.touches[0].pageX) < 25) {
            rightEdge.initialized = true
            rightEdge.dragElement.classList.add('touch-drag')
        }
        
        // Menu Open and start dragging -> add notransition class
        if (rightEdge.dragSuccess){
            rightEdge.dragElement.classList.add('touch-drag')
        }
    }

    function TouchEnd(e) {

        // Open Menu if above threshold
        if (rightEdge.aboveThreshold) {
            ToggleMenu()
        }
        
        // Close Menu if below threshold and opened before
        if (rightEdge.dragSuccess) {
            if (current.posX - current.startPosX > rightEdge.dragThreshold) ToggleMenu()
        } else {
            
            // Block Page Scrolling
            if(window.scroll){
                document.body.classList.remove('block-scroll')
            }
        }

        // Reset Swipe Progress
        rightEdge.dragElement.removeAttribute('style')
        
        // Reset notransition Class
        rightEdge.dragElement.classList.remove('touch-drag')

        // Reset States
        rightEdge.initialized = false
        rightEdge.aboveThreshold = false
    }


    function TouchMove(e) {
        current.posX = e.touches[0].pageX
        current.posY = e.touches[0].pageY
        //console.log(touch.current.posX)
        //console.log(touch.current.posY)
        //console.log(touch.current.distanceX)

        // Right Menu Detection
        if (rightEdge.initialized) {
            
            // Block Page Scrolling
            if(window.scroll){
                document.body.classList.add('block-scroll')
            }

            // Set Touch Distance from edge
            var edgeDistance = window.innerWidth - current.posX
            var menuTargetPos = current.posX - window.innerWidth + rightEdge.dragElement.offsetWidth
            rightEdge.dragPercentage = edgeDistance/rightEdge.dragThreshold

            // At certain threshold, toggle menu function
            if (edgeDistance > rightEdge.dragThreshold && !rightEdge.dragSuccess) rightEdge.aboveThreshold = true
            else rightEdge.aboveThreshold = false
        
            // Reposition drag element
            if (edgeDistance < rightEdge.dragElement.offsetWidth && !rightEdge.dragSuccess) {

                // Assign Distance to drag element
                rightEdge.dragElement.setAttribute('style', 'transform: translateX(' + menuTargetPos + 'px)')
            }
        }
        
        
        // Swipe Back Open Menu
        if (rightEdge.dragSuccess){
            var menuTargetPos = current.posX - current.startPosX
            
            // Block Page Scrolling
            if(window.scroll){
                document.body.classList.add('block-scroll')
            }
            
            // Apply new position after 30px threshold
            if (menuTargetPos > 0 && (current.posX - current.startPosX) > 30){
                rightEdge.dragElement.setAttribute('style', 'transform: translateX(' + menuTargetPos + 'px)')
            }
        }
    }

    // Add Event Listeners
    eleNavIco.addEventListener('click', function () {
        ToggleMenu()
    }, false)

    eleDim.addEventListener('click', function () {
        ToggleMenu()
    }, false)

    // Add Mobile Event Listeners
    document.addEventListener("touchstart", TouchStart, false)
    document.addEventListener("touchend", TouchEnd, false)
    document.addEventListener("touchmove", TouchMove, false)
})