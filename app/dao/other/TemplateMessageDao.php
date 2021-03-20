<?php
/**
 * @author: liaofei<136327134@qq.com>
 * @day: 2020/7/7
 */

namespace app\dao\other;


use app\dao\BaseDao;
use app\model\other\TemplateMessage;

/**
 * 模板消息
 * Class TemplateMessageDao
 * @package app\dao\other
 */
class TemplateMessageDao extends BaseDao
{
    /**
     * 设置模型
     * @return string
     */
    protected function setModel(): string
    {
        return TemplateMessage::class;
    }

    /**
     * 获取模板消息列表
     * @param array $where
     * @param int $page
     * @param int $limit
     * @return \think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getTemplateList(array $where, int $page, int $limit)
    {

        return $this->getModel()->when(isset($where['name']) && $where['name']!='', function ($query) use ($where) {
            $query->where('name','LIKE', "%$where[name]%");
        })->when(isset($where['status']) && $where['status']!='', function ($query) use ($where) {
            $query->where('status',$where['status']);
        })->where('type',$where['type'])->page($page, $limit)->select()->toArray();
    }

}