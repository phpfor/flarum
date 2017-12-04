<?php
/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Flarum\Auth\Xiaoyunpu;

use Flarum\Forum\AuthenticationResponseFactory;
use Flarum\Forum\Controller\AbstractOAuth2Controller;
use Flarum\Settings\SettingsRepositoryInterface;
use Phpfor\OAuth2\Client\Provider\Xiaoyunpu;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;

class XiaoyunpuAuthController extends AbstractOAuth2Controller
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param AuthenticationResponseFactory $authResponse
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(AuthenticationResponseFactory $authResponse, SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
        $this->authResponse = $authResponse;
    }

    /**
     * {@inheritdoc}
     */
    protected function getProvider($redirectUri)
    {
        return new Xiaoyunpu([
            'clientId'     => 'bbsclient',
            'clientSecret' => 'bbspass',
            'redirectUri'  => 'http://bbs.xyp.com:8080/auth/xiaoyunpu'
        ]);        
        return new Xiaoyunpu([
            'clientId'     => $this->settings->get('flarum-auth-xiaoyunpu.client_id'),
            'clientSecret' => $this->settings->get('flarum-auth-xiaoyunpu.client_secret'),
            'redirectUri'  => $redirectUri
        ]);
    }

    /**
     * {@inheritdoc}
     */
    protected function getAuthorizationUrlOptions()
    {
        return ['scope' => ['']];
    }

    /**
     * {@inheritdoc}
     */
    protected function getIdentification(ResourceOwnerInterface $resourceOwner)
    {
        $email = $resourceOwner->getId().'@xiaoyunpu.com';
        return [
            'email' => $email
        ];
    }

    /**
     * {@inheritdoc}
     */
    protected function getSuggestions(ResourceOwnerInterface $resourceOwner)
    {
        return [
            'username' => $resourceOwner->getId(),
            'avatarUrl' => array_get($resourceOwner->toArray(), 'avatar_url')
        ];
    }

    protected function getEmailFromApi()
    {
        $url = $this->provider->apiDomain.'/user/emails';
        $emails = $this->provider->getResponse(
            $this->provider->getAuthenticatedRequest('GET', $url, $this->token)
        );

        foreach ($emails as $email) {
            if ($email['primary'] && $email['verified']) {
                return $email['email'];
            }
        }
    }
}
