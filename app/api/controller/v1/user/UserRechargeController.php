<?php

namespace app\api\controller\v1\user;

use app\Request;
use app\services\user\UserRechargeServices;

/**
 * 充值类
 * Class UserRechargeController
 * @package app\api\controller\user
 */
class UserRechargeController
{
    protected $services = NUll;

    /**
     * UserRechargeController constructor.
     * @param UserRechargeServices $services
     */
    public function __construct(UserRechargeServices $services)
    {
        $this->services = $services;
    }

    public function recharge(Request $request)
    {
        [$price, $recharId, $type, $from] = $request->postMore([
            ['price', 0],
            ['rechar_id', 0],
            ['type', 0],
            ['from', 'weixin']
        ], true);
        if (!$price || $price <= 0) return app('json')->fail('参数错误');
        if (!in_array($type, [0, 1])) return app('json')->fail('缺少参数');
        if (!in_array($from, ['weixin', 'weixinh5', 'routine'])) return app('json')->fail('充值方式不支持');
        $storeMinRecharge = sys_config('store_user_min_recharge');
        if ($price < $storeMinRecharge) return app('json')->fail('充值金额不能低于' . $storeMinRecharge);
        $uid = (int)$request->uid();
        $re = $this->services->recharge($uid, $price, $recharId, $type, $from);
        if ($re) {
            $msg = $re['msg'];
            unset($re['msg']);
            return app('json')->successful($msg, $re);
        }
        return app('json')->fail('充值失败');
    }

    /**
     * 小程序充值
     *
     * @param Request $request
     * @return mixed
     */
    public function routine(Request $request)
    {
        list($price, $recharId, $type) = $request->postMore([['price', 0], ['rechar_id', 0], ['type', 0]], true);
        if (!$price || $price <= 0) return app('json')->fail('参数错误');
        $storeMinRecharge = sys_config('store_user_min_recharge');
        if ($price < $storeMinRecharge) return app('json')->fail('充值金额不能低于' . $storeMinRecharge);
        $from = 'routine';
        $uid = (int)$request->uid();
        $re = $this->services->recharge($uid, $price, $recharId, $type, $from);
        if ($re) {
            $msg = $re['msg'];
            unset($re['msg']);
            return app('json')->successful($msg, $re);
        }
        return app('json')->fail('充值失败');
    }

    /**
     * 公众号充值
     * @param Request $request
     * @return mixed
     */
    public function wechat(Request $request)
    {
        list($price, $recharId, $from, $type) = $request->postMore([['price', 0], ['rechar_id', 0], ['from', 'weixin'], ['type', 0]], true);
        if (!$price || $price <= 0) return app('json')->fail('参数错误');
        $storeMinRecharge = sys_config('store_user_min_recharge');
        if ($price < $storeMinRecharge) return app('json')->fail('充值金额不能低于' . $storeMinRecharge);
        $uid = (int)$request->uid();
        $re = $this->services->recharge($uid, $price, $recharId, $type, $from);
        if ($re) {
            $msg = $re['msg'];
            unset($re['msg']);
            return app('json')->successful($msg, $re);
        }
        return app('json')->fail('充值失败');
    }

    /**
     * 充值额度选择
     * @return mixed
     */
    public function index()
    {
        $rechargeQuota = sys_data('user_recharge_quota') ?? [];
        $data['recharge_quota'] = $rechargeQuota;
        $recharge_attention = sys_config('recharge_attention');
        $recharge_attention = explode("\n", $recharge_attention);
        $data['recharge_attention'] = $recharge_attention;
        return app('json')->successful($data);
    }
}