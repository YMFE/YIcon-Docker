# YIcon Docker Image

YIcon Docker 镜像

## 使用方式

```bash
docker pull registry.cn-qingdao.aliyuncs.com/ymfe/yicon:latest
docker run -idt -p 3000:3000 --name yicon registry.cn-qingdao.aliyuncs.com/ymfe/yicon
```

稍等大概 15s，本地浏览器访问 `127.0.0.1:3000` 即可。（Windows 用户请将 127.0.0.1 改为虚拟机地址）

管理员登录帐号为 `admin`，密码为 `admin`。

## 包含

* YIcon 0.1.2.1
* MySQL
* 简单的用户系统

## 维护Tips

* 部署路径: `/yicon`
* 配置文件: `/yicon/config.json`
* 源码目录: `/yicon/src/`
* 管理 Yicon 服务: `pm2 restart yicon` (`start` | `stop`)
* 管理 MySQL 服务: `service mysqld restart` (`start` | `stop`)

## 数据库配置

* 用户名: `root`
* 密码: `123456`
* 端口: `3306` (端口未向容器外暴露)

## 用户管理

增加用户/修改密码

登录到容器内执行:

```bash
./user edwon.lim 123456
```

当然，也可以直接从容器外执行:

```bash
docker exec -it yicon bash -c "./user edwon.lim 123456"
```

### Docker 安装

Docker 在本地使用，安装并不困难，只需要下载安装包，根据提示安装即可。

Docker 官网：<http://www.docker.com/>

国内下载地址：<http://get.daocloud.io/#install-docker-for-mac-windows>

内网下载地址：[Mac](https://owncloud.corp.qunar.com/public.php?service=files&t=3737859b937f7ec78b593e4518d2876e) | [Windows pre 10](https://owncloud.corp.qunar.com/public.php?service=files&t=1d0d9b8d9e158e52610c7a5f78247d91) | [Windows 10](https://owncloud.corp.qunar.com/public.php?service=files&t=6fda123935a0f39885a765b7958fb676)

## 开发者

* 林洋 <adwon.lin@qunar.com>
