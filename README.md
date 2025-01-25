# 羡慕死了

A Telegram Bot ，帮助您在Telegram快速赛博乞讨，完美展示您令人作呕的嫉妒和卑微的自尊心以及爆炸的心态。

### 部署

请确保您的设备上安装了 Node.js 16 及更高版本。

准备 Openai API Key 和 Telegram Bot Token。 如果您使用第三方 Openai API , 请在环境变量中 `OPENAI_API_BASE_URL` 配置。

启动命令如下：

```shell
OPENAI_API_KEY=YOUR_API_KEY BOT_TOKEN=YOUR_BOT_TOKEN node main
```

您也可以使用docker部署使用。

只需下载仓库中的docker-compose.yml文件，配置好环境后运行：

```shell
docker-compose up -d
```

即可

### 使用

发送 `/xm 语句` 或使用 `/xm` 回复一条消息。如果语句以 "xm" 开头，将会使用原句。

您也可以使用 inline keyboard 快捷发送羡慕信息。