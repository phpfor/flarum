import SettingsModal from 'flarum/components/SettingsModal';

export default class XiaoyunpuSettingsModal extends SettingsModal {
  className() {
    return 'XiaoyunpuSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('flarum-auth-xiaoyunpu.admin.xiaoyunpu_settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('flarum-auth-xiaoyunpu.admin.xiaoyunpu_settings.client_id_label')}</label>
        <input className="FormControl" bidi={this.setting('flarum-auth-xiaoyunpu.client_id')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('flarum-auth-xiaoyunpu.admin.xiaoyunpu_settings.client_secret_label')}</label>
        <input className="FormControl" bidi={this.setting('flarum-auth-xiaoyunpu.client_secret')}/>
      </div>
    ];
  }
}
