# LeanCloudWake

用 Valine 做评论系统，用 LeanCloud 储存数据，并用云引擎部署 web服务管理评论内容，并邮件提醒。

近期 LeanCloud 出现 **“因流控原因，通过定时任务唤醒体验版实例失败，建议升级至标准版云引擎实例避免休眠”**  问题。

本仓库利用 Github Action 执行定时唤醒，防止其大白天休眠。

1. 在 setting -> Secrets，添加一个 secret，Name 为 SITE，Value 为 **评论后台网站的地址**。
2. star 自己的仓库，这样是为了手动触发一次定时任务。

Fork：[leancloud-self-wake](https://github.com/AimTao/leancloud-self-wake)