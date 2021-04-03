<?php
/**
 * @author: 吴昊天<442384644@qq.com>
 * @day: 2020/7/
 */
declare (strict_types=1);

namespace app\dao\activity;

use app\dao\BaseDao;
use app\model\activity\StoreCombination;

/**
 *
 * Class StoreCombinationDao
 * @package app\dao\activity
 */
class StoreCombinationDao extends BaseDao
{

    /**
     * 设置模型
     * @return string
     */
    protected function setModel(): string
    {
        return StoreCombination::class;
    }

    /**
     * 拼团商品列表
     * @param array $where
     * @param int $page
     * @param int $limit
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getList(array $where, int $page = 0, int $limit = 0)
    {
        return $this->search($where)->where('is_del', 0)->with('getPrice')->when($page != 0 && $limit != 0, function ($query) use ($page, $limit) {
            $query->page($page, $limit);
        })->order('sort desc,id desc')->select()->toArray();
    }

    /**
     * 获取正在进行拼团的商品以数组形式返回
     * @param array $ids
     * @param array $field
     * @return array
     */
    public function getPinkIdsArray(array $ids, array $field = [])
    {
        return $this->search(['is_del' => 0, 'is_show' => 1])->where('start_time', '<=', time())->where('stop_time', '>=', time())->whereIn('product_id', $ids)->column(implode(',', $field), 'product_id');
    }

    /**
     * 获取拼团列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function combinationList()
    {
        return $this->search(['is_del' => 0, 'is_show' => 1])
            ->where('start_time', '<=', time())
            ->where('stop_time', '>=', time() - 86400)
            ->where('product_id', 'IN', function ($query) {
                $query->name('store_product')->where('is_show', 1)->where('is_del', 0)->field('id');
            })->with('getPrice')->order('sort desc,id desc')->select()->toArray();
    }

    /**
     * 根据id获取拼团数据
     * @param array $ids
     * @param string $field
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function idCombinationList(array $ids, string $field)
    {
        return $this->getModel()->whereIn('id', $ids)->field($field)->select()->toArray();
    }

    /**
     * 获取一条拼团数据
     * @param int $id
     * @param string $field
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function validProduct(int $id, string $field)
    {
        $where = ['is_show' => 1, 'is_del' => 0];
        return $this->search($where)
            ->where('id', $id)
            ->where('start_time', '<', time())
            ->where('stop_time', '>', time() - 86400)
            ->with(['total'])->field($field)->find();
    }

    /**
     * 获取推荐拼团
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getCombinationHost()
    {
        $where = ['is_del' => 0, 'is_host' => 1, 'is_show' => 1];
        return $this->search($where)
            ->where('start_time', '<', time())
            ->where('stop_time', '>', time() - 86400)
            ->select()->toArray();
    }
}
