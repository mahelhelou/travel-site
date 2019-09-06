/*==============================
        # TABLE OF CONTENTS
            ## Libraries
                ### jqeury.js

            ## Modules Files
                ### MobileMenu
                ### RevealOnScroll
==============================*/
import $ from 'jquery'

import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

const moibleMenu = new MobileMenu()

new RevealOnScroll($('.feature-item'), '85%')
new RevealOnScroll($('.testimonial'), '60%')

const stickyHeader = new StickyHeader()