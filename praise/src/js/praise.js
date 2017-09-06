"use strict";


//+1
export const praiseCount = function(count) {
    return typeof count !== 'number' ? NaN : ++count;
}

export class PraiseButton {
    //构造函数
    constructor(selector, start = 0) {
        this.count = start;
        this.selector = selector;
    }

    //点赞事件
    clickPriaseButton(clicker) {
            this.count = praiseCount(this.count);
            clicker.append('<span class="praise-button-num">+1</span>');
            let numSpan = $('.praise-button-num');
            let left = clicker.offset().left + clicker.width() / 2;
            let top = clicker.offset().top - clicker.height();
            numSpan.css({
                'position': 'absolute',
                'left': clicker.width() / 2 + 'px',
                'top': '-14px',
                'z-index': 9999,
                'font-size': '14px',
                'line-height': '16px',
                'color': 'red'
            });
            numSpan.animate({
                'font-size': '16px',
                'opacity': '0',
                'top': '-30px',
            }, 600, function() {
                numSpan.remove();
            });
        }
        //初始化dom
    initPriaseButton() {
        this.selector.append('<button class="praise-button" style="width:100%">点赞</button>');
        this.selector.click(this.clickPriaseButton.bind(this, $(this.selector.selector + '>.praise-button')));
    }
}

export class Thumb extends PraiseButton {
    constructor(selector, start = 0) {
        super(selector, start);
    }
    initThumb() {
        console.log(this.selector);
        this.selector.append('<div class="praise-button-thumb">' +
            '<div class="hand"></div>' +
            '<div class="finger-thumb"></div>' +
            '<div class="finger-group-1"></div>' +
            '<div class="finger-group-2"></div>' +
            '</div>');
        this.selector.click(this.clickThumb.bind(this, $(this.selector.selector + '>.praise-button-thumb')));
    }
    clickThumb(clicker) {
        super.clickPriaseButton(clicker);
        console.log(this.count);
        if (this.count >= 10) {
            this.selector.unbind('click');
            clicker.addClass('disabled');
            console.log('it has already praised 10 times');
        }
    }
}