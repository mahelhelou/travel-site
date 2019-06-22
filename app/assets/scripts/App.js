/*==============================
        # TABLE OF CONTENTS
            ## Libraries
                ### jqeury.js

            ## Modules Files
                ### MobileMenu
                ### RevealOnScroll
==============================*/

import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import $ from 'jquery'

const moibleMenu = new MobileMenu()

new RevealOnScroll($('.feature-item'), '85%')
new RevealOnScroll($('.testimonial'), '60%')