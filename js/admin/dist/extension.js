'use strict';

System.register('flarum/auth/xiaoyunpu/components/XiaoyunpuSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var SettingsModal, XiaoyunpuSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      XiaoyunpuSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(XiaoyunpuSettingsModal, _SettingsModal);

        function XiaoyunpuSettingsModal() {
          babelHelpers.classCallCheck(this, XiaoyunpuSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(XiaoyunpuSettingsModal).apply(this, arguments));
        }

        babelHelpers.createClass(XiaoyunpuSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'XiaoyunpuSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('flarum-auth-xiaoyunpu.admin.xiaoyunpu_settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('flarum-auth-xiaoyunpu.admin.xiaoyunpu_settings.client_id_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('flarum-auth-xiaoyunpu.client_id') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('flarum-auth-xiaoyunpu.admin.xiaoyunpu_settings.client_secret_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('flarum-auth-xiaoyunpu.client_secret') })
            )];
          }
        }]);
        return XiaoyunpuSettingsModal;
      }(SettingsModal);

      _export('default', XiaoyunpuSettingsModal);
    }
  };
});;
'use strict';

System.register('flarum/auth/xiaoyunpu/main', ['flarum/app', 'flarum/auth/xiaoyunpu/components/XiaoyunpuSettingsModal'], function (_export, _context) {
  "use strict";

  var app, XiaoyunpuSettingsModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumAuthGithubComponentsXiaoyunpuSettingsModal) {
      XiaoyunpuSettingsModal = _flarumAuthGithubComponentsXiaoyunpuSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('flarum-auth-xiaoyunpu', function () {
        app.extensionSettings['flarum-auth-xiaoyunpu'] = function () {
          return app.modal.show(new XiaoyunpuSettingsModal());
        };
      });
    }
  };
});