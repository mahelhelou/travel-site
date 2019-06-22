import $ from 'jquery'
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

class RevealOnScroll {
    constructor(elems, offset) {
        this.itemsToReveal = elems
        this.offsetPercentage = offset
        this.hideInitially()
        this.createWaypoints()
    }

    hideInitially() {
        this.itemsToReveal.addClass('reveal-item')
    }

    createWaypoints() {
        const that = this
        this.itemsToReveal.each(function () {
            const currentItem = this
            new Waypoint({
                element: currentItem,
                handler: function () {
                    $(currentItem).addClass('reveal-item--is-visible')
                },
                offset: that.offsetPercentage
            })
        })
    }
}

export default RevealOnScroll