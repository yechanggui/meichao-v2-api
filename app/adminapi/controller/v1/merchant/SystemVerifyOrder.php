<?php

namespace app\adminapi\controller\v1\merchant;

use app\adminapi\controller\AuthController;
use app\services\order\StoreOrderServices;
use think\facade\App;

/**
 * 核销订单
 * Class SystemVerifyOrder
 * @package app\adminapi\controller\v1\merchant
 */
class SystemVerifyOrder extends AuthController
{
    /**
     * 构造方法
     * SystemVerifyOrder constructor.
     * @param App $app
     * @param StoreOrderServices $services
     */
    public function __construct(App $app, StoreOrderServices $services)
    {
        parent::__construct($app);
        $this->services = $services;
    }

    /**
     * 获取核销订单列表
     * return json
     */
    public function list()
    {
        $where = $this->request->getMore([
            ['data', '', '', 'time'],
            ['real_name', ''],
            ['store_id', ''],
            ['type', ''],
        ]);
        $data = $this->services->getOrderList($where + ['status' => 6], ['*'], ['store', 'staff', 'staffUser']);
        return $this->success(['count' => $data['count'], 'data' => $data['data'], 'badge' => $data['stat']]);
    }

    /**
     * 未使用,获取核销订单头部
     * @return mixed
     */
    public function getVerifyBadge()
    {
        return $this->success([]);
    }

    /**
     * 订单列表推荐人详细
     * @param $uid
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function order_spread_user($uid)
    {
        return $this->success([]);
    }
}