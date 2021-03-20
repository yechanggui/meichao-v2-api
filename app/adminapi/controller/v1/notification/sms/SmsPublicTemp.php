<?php

namespace app\adminapi\controller\v1\notification\sms;

use app\adminapi\controller\AuthController;
use crmeb\exceptions\AdminException;
use crmeb\services\sms\Sms;

/**
 * 公共短信模板
 * Class SmsPublicTemp
 * @package app\admin\controller\sms
 */
class SmsPublicTemp extends AuthController
{
    /**
     * @var Sms
     */
    protected $smsHandle;

    public function initialize()
    {
        parent::initialize(); // TODO: Change the autogenerated stub
        $this->smsHandle = new Sms('yunxin', [
            'sms_account' => sys_config('sms_account'),
            'sms_token' => sys_config('sms_token'),
            'site_url' => sys_config('site_url')
        ]);
        if (!$this->smsHandle->isLogin()) {
            throw new AdminException('请先填写短息配置');
        }
    }

    /**
     * 异步获取公共模板列表
     */
    public function index()
    {
        $where = $this->request->getMore([
            ['is_have', ''],
            ['page', 1],
            ['limit', 20],
        ]);
        $templateList = $this->smsHandle->publictemp($where);
        if ($templateList['status'] == 400) return $this->fail($templateList['msg']);
        $arr = $templateList['data']['data'];
        foreach ($arr as $key => $value) {
            switch ($value['type']) {
                case 1:
                    $arr[$key]['type'] = '验证码';
                    break;
                case 2:
                    $arr[$key]['type'] = '通知';
                    break;
                case 3:
                    $arr[$key]['type'] = '推广';
                    break;
                default:
                    $arr[$key]['type'] = '';
                    break;
            }
        }
        $templateList['data']['data'] = $arr;
        return $this->success($templateList['data']);
    }

}