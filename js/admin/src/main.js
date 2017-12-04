import app from 'flarum/app';

import GithubSettingsModal from 'flarum/auth/xiaoyunpu/components/XiaoyunpuSettingsModal';

app.initializers.add('flarum-auth-xiaoyunpu', () => {
  app.extensionSettings['flarum-auth-xiaoyunpu'] = () => app.modal.show(new XiaoyunpuSettingsModal());
});
