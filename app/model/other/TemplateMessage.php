<?php
/**
 * @author: 吴昊天<442384644@qq.com>
 * @day: 2020/7/1
 */
namespace app\model\other;

use crmeb\basic\BaseModel;
use crmeb\traits\ModelTrait;
use think\Model;

/**
 *  消息模板Model
 * Class TemplateMessage
 * @package app\model\other
 */
class TemplateMessage extends BaseModel
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
    protected $name = 'template_message';

    /**
     * 模板ID搜索器
     * @param Model $query
     * @param $value
     * @param $data
     */
    public function searchTempIdAttr($query, $value, $data)
    {
        $query->where('temp_id', $value);
    }
}
