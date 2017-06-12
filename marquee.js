/**
 * 过长的文字用跑马灯效果显示
 * @author Weilao
 */
(function (_window) {

    _window.Marquee = function (el, opts) {
        var self = this;
        var nextStep,
            edgeDelay,
            currIndent = 0,
            currDelay = 0,
            currIncrease = -1;

        opts = opts || {};
        edgeDelay = opts.edgeDelay || 1000;

        this.el = el;
        el.style.overflow = 'hidden';
        el.style.whiteSpace = 'nowrap';

        var minIndent = el.clientWidth - el.scrollWidth;

        if (minIndent >= 0) {
            this.destroy();
            return;
        }

        var nextStepBackAndForth = function () {
            if (minIndent >= currIndent) {
                currIncrease = -1;
                currDelay = edgeDelay;
            } else if (currIndent >= 0) {
                currIncrease = 1;
                currDelay = edgeDelay;
            }
            currIndent -= currIncrease;
            self.animateTimeout = setTimeout(function () {
                el.style.textIndent = currIndent + 'px';
                currDelay = 0;
                nextStep();
            }, 50 + currDelay);
        };

        var nextStepLoop = function () {
            if (minIndent >= currIndent) {
                currIndent = 0;
                currDelay = edgeDelay;
            } else {
                if (currIndent === 0) {
                    currDelay = edgeDelay;
                }
                currIndent--;
            }
            self.animateTimeout = setTimeout(function () {
                el.style.textIndent = currIndent + 'px';
                currDelay = 0;
                nextStep();
            }, 50 + currDelay);
        };

        switch (opts.style) {
            default:
            case 'back_and_forth':
                nextStep = nextStepBackAndForth;
                break;
            case 'loop':
                nextStep = nextStepLoop;
                break;
        }

        nextStep();
    };

    _window.Marquee.prototype = {
        destroy: function () {
            this.el.style.overflow = '';
            this.el.style.whiteSpace = '';
            clearTimeout(this.animateTimeout);
        },
    };

})(window);