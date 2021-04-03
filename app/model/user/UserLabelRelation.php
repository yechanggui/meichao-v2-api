<?php
/**
 * @author: liaofei<136327134@qq.com>
 * @day: 2020/6/30
 */

namespace app\model\user;

use crmeb\basic\BaseModel;
use crmeb\traits\ModelTrait;

/**
 * Class UserLabelRelation
 * @package app\model\user
 */
class UserLabelRelation extends BaseModel
{
    use ModelTrait;

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'user_label_relation';
}