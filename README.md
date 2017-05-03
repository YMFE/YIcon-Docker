# YIcon Docker Image

YIcon Docker 镜像

部署方式：
* 直接修改 DockerFile 和 相关脚本文件，生成自身的镜像，用于部署。适用于基础服务很完善的朋友们。
* 直接通过现有镜像进行部署。适用于基础服务并不是很完善的朋友

## 使用方式

```bash
# 下载镜像
docker pull registry.cn-qingdao.aliyuncs.com/ymfe/yicon:latest
# 创建容器
docker run -idt -p 3000:3000 --name yicon registry.cn-qingdao.aliyuncs.com/ymfe/yicon
```

执行 `docker run` 命令后，稍等大概 15s，本地浏览器访问 `127.0.0.1:3000` 即可。（Windows 用户请将 127.0.0.1 改为虚拟机地址）

管理员登录帐号为 `admin`，密码为 `admin`。


## 包含

* YIcon 1.0.2.1
* MySQL
* 简单的用户系统

## 维护Tips

* 部署路径: `/yicon`
* 配置文件: `/yicon/config.json`
* 源码目录: `/yicon/src/`
* 管理 Docker 容器: `docker restart ycion` (`start` | `stop`)
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

## 开发者

* 林洋 <adwon.lin@qunar.com>
