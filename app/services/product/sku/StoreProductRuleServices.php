<?php
/**
 * @author: 吴昊天<442384644@qq.com>
 * @day: 2020-07-02
 */

namespace app\services\product\sku;


use app\dao\product\sku\StoreProductRuleDao;
use app\services\BaseServices;
use crmeb\exceptions\AdminException;

/**
 * Class StoreProductRuleService
 * @package app\services\product\sku
 */
class StoreProductRuleServices extends BaseServices
{
    public function __construct(StoreProductRuleDao $dao)
    {
        $this->dao = $dao;
    }

    /**
     * 获取商品规格列表
     * @param array $where
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getList(array $where = [])
    {
        [$page, $limit] = $this->getPageValue();
        $list = $this->dao->getList($where, $page, $limit);
        foreach ($list as &$item) {
            $attr_name = $attr_value = [];
            if ($item['rule_value']) {
                $specs = json_decode($item['rule_value'], true);
                if ($specs) {
                    foreach ($specs as $key => $value) {
                        $attr_name[] = $value['value'];
                        $attr_value[] = implode(',', $value['detail']);
                    }
                } else {
                    $attr_name[] = '';
                    $attr_value[] = '';
                }
                $item['attr_name'] = implode(',', $attr_name);
                $item['attr_value'] = $attr_value;
            }
        }
        $count = $this->dao->count($where);
        return compact('list', 'count');
    }

    /**
     * 保存数据
     * @param int $id
     * @param array $data
     */
    public function save(int $id, array $data)
    {
        $data['rule_value'] = json_encode($data['spec']);
        unset($data['spec']);
        if ($id) {
            $res = $this->dao->update($id, $data);
        } else {
            $res = $this->dao->save($data);
        }
        if (!$res) throw new AdminException('保存失败');
    }

    /**
     * 获取一条数据
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $info = $this->dao->get($id);
        $info['spec'] = json_decode($info['rule_value'], true);
        return compact('info');
    }

    /**
     * 删除数据
     * @param string $ids
     */
    public function del(string $ids)
    {
        if ($ids == '') throw new AdminException('请至少选择一条数据');
        $this->dao->del($ids);
    }
}
