<?php
/**
 * @author: 吴昊天<442384644@qq.com>
 * @day: 2020-07-15
 */

namespace app\api\controller\v2;


use app\services\diy\DiyServices;

class PublicController
{
    /**
     * 获取页面数据
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getDiy()
    {
        /** @var DiyServices $diyService */
        $diyService = app()->make(DiyServices::class);
        $data = $diyService->getDiy();
        return app('json')->successful($data);
    }

    /**
     * 是否强制绑定手机号
     * @return mixed
     */
    public function bindPhoneStatus()
    {
        $status = sys_config('store_user_mobile') ? true : false;
        return app('json')->success(compact('status'));
    }
}
