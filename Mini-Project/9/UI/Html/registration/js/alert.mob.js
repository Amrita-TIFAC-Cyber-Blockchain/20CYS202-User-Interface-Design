/**
 *    jquery、zepto 手机弹窗插件
 *    调用方法（中括号的为可选参数）：
 *    $.alert(string[,function])
 *    $.confirm(string[,function])
 *    $.tips(msg)
 *    version:2016-07-27
 */
! function($) {
    $._isalert = 0,
        $.alert = function() {
            if (arguments.length) {
                $._isalert = 1;
                return $.confirm.apply($, arguments);
            }
        },
        $.confirm = function() {
            var args = arguments;
            if (args.length) {
                var d = $('<div class="alert_overlay"></div><div class="alert_msg"><div class="alert_content">' + args[0] + '</div><div class="alert_buttons"><button class="alert_btn alert_btn_ok">Okey</button><button class="alert_btn alert_btn_cancel">Cancel</button></div></div>'),
                    fn = args[1],
                    flag = 1,
                    _click = function(e) {
                        typeof fn == 'function' ? (fn.call(d, e.data.r) != !1 && d.remove()) : d.remove();
                    };
                $._isalert && d.find('.alert_btn_cancel').hide();
                d.on('contextmenu', !1)
                    .on('click', '.alert_btn_ok', {
                        r: !0
                    }, _click)
                    .on('click', '.alert_btn_cancel', {
                        r: !1
                    }, _click)
                    .appendTo('body');
            }
            $._isalert = 0;
        },
        $.tips = function(m) {
            $('.alert_tips').remove();
            $('<div class="alert_tips"><div>' + m + '</div></div>').appendTo('body').one('webkitAnimationEnd animationEnd', function() {
                $(this).remove()
            })
        }
}($);