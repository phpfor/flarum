import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('flarum-auth-xiaoyunpu', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('xiaoyunpu',
      <LogInButton
        className="Button LogInButton--xiaoyunpu"
        icon="github"
        path="/auth/xiaoyunpu">
        {app.translator.trans('flarum-auth-xiaoyunpu.forum.log_in.with_xiaoyunpu_button')}
      </LogInButton>
    );
  });
});
