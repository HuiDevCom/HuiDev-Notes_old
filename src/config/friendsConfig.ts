import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "HuiDev Notes",
		imgurl: "/favicon.png",
		desc: "用代码构建，用文字记录",
		siteurl: "https://huidev.com",
		tags: ["博客"],
		weight: 100, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "NorthZero的博客",
		imgurl: "https://nzdnzd.top/favicon.svg",
		desc: "",
		siteurl: "https://nzdnzd.top",
		tags: ["博客"],
		weight: 1,
		enabled: true,
	},
	{
		title: "Nappig",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=1503366755&s=640",
		desc: "",
		siteurl: "https://www.nappig.com",
		tags: ["服务"],
		weight: 2,
		enabled: true,
	},
	{
		title: "午夜的Blog",
		imgurl: "https://q.qlogo.cn/headimg_dl?dst_uin=1343394737&spec=640&img_type=jpg",
		desc: "用代码表达言语的魅力，用代码书写山河的壮丽。",
		siteurl: "https://www.wuye2004.top",
		tags: ["博客"],
		weight: 3,
		enabled: true,
	},
	{
		title: "二叉树树",
		imgurl: "https://q2.qlogo.cn/headimg_dl?dst_uin=2726730791&spec=0",
		desc: "Protect What You Love.",
		siteurl: "https://2x.nz/",
		tags: ["博客"],
		weight: 4,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
