import TWEEN from 'tween.js'
import normalize from './_normalize.js'

class Tween {
  /**
   * Animate data changes by transitioning values from old to new value
   */
  tweenData (newData, oldData, onUpdate) {
    const tween = new TWEEN.Tween(oldData)
      .easing(TWEEN.Easing.Quadratic.Out)
      .to(newData, 500)
      .onUpdate(onUpdate)
      .onComplete(() => {
        tween.done = true
      })
      .start()

    // Function which updates the transFitioning value on each tick
    function animate (time) {
      tween.update(time)

      // Ensure we don't keep calling this once we're done
      // Things will get super slow otherwise, **believe me**
      if (!tween.done) {
        requestAnimationFrame(animate)
      }
    }
    animate(window.performance.now())
  }

  /**
   * Functions which ease transitions between prop value changes
   */
  adjustData (vm, newData, oldData, doNormalize) {
    // Animate data
    const nData = doNormalize ? normalize(newData, true) : newData
    const oData = doNormalize ? normalize(oldData, true) : oldData

    this.tweenData(nData, oData, function () {
      vm.animatedData = normalize(this, null, !doNormalize)
      vm.update()
    })
  }
}

const tween = new Tween()
export default tween
