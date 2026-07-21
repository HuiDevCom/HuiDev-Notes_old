---
title: 一篇文章从研究到成文，一个内容创作 Agent 搞定
published: 2026-07-21
pinned: false
description: 一个 AI 驱动的创作管线——从联网研究到成文、SEO 优化，串成一条线。基于 Deep Agents + LangChain，部署在 EdgeOne Makers。
tags: [AI, 写作, Agent, 开源]
category: 项目
draft: false
---

> 基于 EdgeOne Makers 模板二次开发，增加了创作管线相关的 Agent 和存储逻辑。不是成品 SaaS，是一个可以自己部署的模板。

[**GitHub 地址**](https://github.com/HuiDevCom/content-creator-agent)

## 它是什么？

简单来说，这是一个把"想一个主题 → 联网调研 → 生成大纲 → 写完整篇文章 → SEO 分析"这条链路串起来的 Agent 工具。

它不是让你点点点就能出爆文的平台，而是一个**你可以按需改、自己部署、自己掌控**的创作管线。

说"开源"其实有点心虚——这个项目最早 fork 自 [TencentEdgeOne 的 Makers 模板](https://github.com/TencentEdgeOne/edgeone-makers-template)，我在上面加了创作相关的 Agent、版本管理、记忆存储这些东西。算是站在肩膀上改了改。

## 为什么要做这个？

写文章的时候经常遇到这些情况：

- 想查点背景资料，得打开好几个标签页来回切
- 大纲写到一半发现结构不对，又要从头理
- 文章写完了，SEO 分析再开另一个工具做一遍

这些事单拎出来都不难，但**串在一起就很割裂**。内容创作 Agent 做的就是把这些步骤编排到一条流水线上，让 Agent 一台接一台地干活。

## 有哪些能力？

| 能力 | 说明 |
|------|------|
| **联网研究** | 每次请求做一次搜索，拿到写作背景材料。支持 WSA 和 Kimi 两种搜索提供商 |
| **结构化大纲** | 先出大纲再动笔，避免写到一半跑偏 |
| **流式写作** | 一次流式输出完整文章，能遵循字数和风格要求 |
| **SEO 优化与关键词** | 有独立的优化和建议端点，写完再调 |
| **持久记忆** | 跨会话记住你的偏好（风格、语气、常用长度） |
| **版本管理** | 每篇文章保存版本记录，支持对比检索 |
| **GitHub 登录** | 不同用户的数据自动隔离 |

## 怎么用？

部署到 EdgeOne Makers 上，配好环境变量就能跑：

```
AI_GATEWAY_API_KEY=你的Key
AI_GATEWAY_BASE_URL=https://ai-gateway.edgeone.link/v1
```

前端是一套 Next.js 界面，POST `/create` 开始创作，流式输出实时刷新。

不想用默认模型的话，改 `AI_GATEWAY_MODEL` 换成你喜欢的就行——兼容 OpenAI 协议的都行。

## 最后说两句

这个项目说实话不算大，但它把"从零开始写一篇文章"这件事拆得挺清楚的。如果你也在折腾 AI 写作相关的东西，可以 fork 一份自己改着玩。

哦对，它原本是 TencentEdgeOne 的 Makers 模板，我只是在上面加了自己的东西——不是我一个人从零写的，不能贪功。

项目地址：[github.com/HuiDevCom/content-creator-agent](https://github.com/HuiDevCom/content-creator-agent)
