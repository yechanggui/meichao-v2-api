<?php
/**
 * @author: 吴昊天<442384644@qq.com>
 * @day: 2020-07-02
 */

namespace app\dao\product\product;

use app\dao\BaseDao;
use app\model\product\product\StoreProductReply;

/**
 * Class StoreProductReplyDao
 * @package app\dao\product\product
 */
class StoreProductReplyDao extends BaseDao
{
    /**
     * 设置模型
     * @return string
     */
    protected function setModel(): string
    {
        return StoreProductReply::class;
    }

    /**
     * 后台评论列表
     * @param array $where
     * @param int $page
     * @param int $limit
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function sysPage(array $where, int $page, int $limit)
    {
        return $this->search($where)->page($page, $limit)->select()->toArray();
    }

    /**
     * 获取最近一条最好的评论
     * @param int $productId
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getProductReply(int $productId)
    {
        return $this->search(['product_id' => $productId, 'is_del' => 0])
            ->with('cartInfo')
            ->order('add_time DESC,product_score DESC,service_score DESC,add_time DESC')
            ->find();
    }

    /**
     * 评论条件
     * @param int $id
     * @param int $type
     * @return \crmeb\basic\BaseModel|mixed|\think\Model
     */
    public function replyWhere(int $id, int $type = 0)
    {
        return $this->search(['product_id' => $id, 'is_del' => 0])
            ->when($type == 1, function ($query) {
                $query->where('product_score', 5);
            })->when($type == 2, function ($query) {
                $query->where('product_score', '<', 5)->where('product_score', '>', 2);
            })->when($type == 3, function ($query) {
                $query->where('product_score', '<', 2);
            });
    }

    /**
     * 评论条数
     * @param int $id
     * @param int $type
     * @return int
     */
    public function replyCount(int $id, int $type = 0)
    {
        return $this->replyWhere($id, $type)->count();
    }

    /**
     * 评论内容
     * @param int $id
     * @param int $type
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function replyList(int $id, int $type = 0)
    {
        return $this->replyWhere($id, $type)->with('cartInfo')->order('add_time desc')->select()->toArray();
    }
}
