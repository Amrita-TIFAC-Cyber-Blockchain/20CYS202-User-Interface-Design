(function($) {

    $.fn.imageUploadResizer = function(options) {
        var settings = $.extend({
            max_width: 1000,
            max_height: 1000,
            quality: 1,
            do_not_resize: [],
        }, options);

        this.filter('input[type="file"]').each(function() {
            this.onchange = function() {
                var eName = this.name;
                const that = this; // input node
                const originalFile = this.files[0];

                if (!originalFile || !originalFile.type.startsWith('image')) {
                    return;
                }

                // Don't resize if doNotResize is set
                if (settings.do_not_resize.includes('*') || settings.do_not_resize.includes(originalFile.type.split('/')[1])) {
                    return;
                }

                var reader = new FileReader();

                reader.onload = function(e) {
                    var img = document.createElement('img');
                    var canvas = document.createElement('canvas');
                    if (eName == 'ptnPhoto') {
                        var output = document.getElementById('ptnIcon');
                        output.src = e.target.result;
                    }
                    img.src = e.target.result
                    img.onload = function() {
                        var ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0);

                        if (img.width < settings.max_width && img.height < settings.max_height) {
                            // Resize not required
                            return;
                        }

                        const ratio = Math.min(settings.max_width / img.width, settings.max_height / img.height);
                        const width = Math.round(img.width * ratio);
                        const height = Math.round(img.height * ratio);

                        canvas.width = width;
                        canvas.height = height;

                        var ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0, width, height);

                        canvas.toBlob(function(blob) {
                            var resizedFile = new File([blob], 'resized_' + originalFile.name, originalFile);

                            var dataTransfer = new DataTransfer();
                            dataTransfer.items.add(resizedFile);

                            // temporary remove event listener, change and restore
                            var currentOnChange = that.onchange;

                            that.onchange = null;
                            that.files = dataTransfer.files;
                            that.onchange = currentOnChange;

                        }, 'image/jpeg', settings.quality);
                    }
                }

                reader.readAsDataURL(originalFile);
            }
        });

        return this;
    };

}(jQuery));