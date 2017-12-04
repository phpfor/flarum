'use strict';

System.register('flarum/auth/xiaoyunpu/main', ['flarum/extend', 'flarum/app', 'flarum/components/LogInButtons', 'flarum/components/LogInButton'], function (_export, _context) {
  "use strict";

  var extend, app, LogInButtons, LogInButton;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumComponentsLogInButtons) {
      LogInButtons = _flarumComponentsLogInButtons.default;
    }, function (_flarumComponentsLogInButton) {
      LogInButton = _flarumComponentsLogInButton.default;
    }],
    execute: function () {

      app.initializers.add('flarum-auth-xiaoyunpu', function () {
        extend(LogInButtons.prototype, 'items', function (items) {
          items.add('xiaoyunpu', m(
            LogInButton,
            {
              className: 'Button LogInButton--xiaoyunpu',
              icon: 'xiaoyunpu',
              path: '/auth/xiaoyunpu' },
            app.translator.trans('flarum-auth-xiaoyunpu.forum.log_in.with_xiaoyunpu_button')
          ));
        });
      });
    }
  };
});