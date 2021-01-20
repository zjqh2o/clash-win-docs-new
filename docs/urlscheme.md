# URL Scheme

## 下载配置

CFW 支持使用 URL Scheme 快速导入配置文件：

```
clash://install-config?url=<encoded URI>
```

### 自定义名称

在 CFW 中使用 URL 导入后显示的配置文件名称识别逻辑如下：

1. 响应体头部中是否存在`content-disposition`字段，如果存在则使用里面`filename`对应的值
2. 使用 URL 最后一部分作为配置文件名

## 退出软件

```
clash://quit
```
