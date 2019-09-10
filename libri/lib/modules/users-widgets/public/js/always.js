apos.define('users-widgets', {
    extend: 'apostrophe-widgets',
    construct: function(self, options) {
        self.play = function($widget, data, options) {
            self.html('users', data, function(data) {
                debugger
                $widget.find('[data-users-container]').html(data).addClass('loaded');
            });
        };
    }
})