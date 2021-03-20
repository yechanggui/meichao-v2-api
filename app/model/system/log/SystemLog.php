<?php
/**
 * @author: liaofei<136327134@qq.com>
 * @day: 2020/6/30
 */

namespace app\model\system\log;

use crmeb\basic\BaseModel;
use crmeb\traits\ModelTrait;
use think\Model;

/**
 * 日志模型
 * Class SystemLog
 * @package app\model\system\log
 */
class SystemLog extends BaseModel
{
    use ModelTrait;

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'system_log';

    protected $insert = ['add_time'];

    protected function setAddTimeAttr()
    {
        return time();
    }

    /**
     * 访问方式搜索器
     * @param Model $query
     * @param $value
     */
    public function searchPagesAttr($query, $value)
    {
        $query->whereLike('page', '%' . $value . '%');
    }

    /**
     * 访问路径搜索器
     * @param Model $query
     * @param $value
     */
    public function searchPathAttr($query, $value)
    {
        $query->whereLike('path', '%' . $value . '%');
    }

    /**
     * ip搜索器
     * @param Model $query
     * @param $value
     */
    public function searchIpAttr($query, $value)
    {
        $query->where('ip', 'LIKE', "%$value%");
    }

    /**
     * 管理员id搜索器
     * @param Model $query
     * @param $value
     */
    public function searchAdminIdAttr($query, $value)
    {
        $query->whereIn('admin_id', $value);
    }
}