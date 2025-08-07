export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "我们聊聊吧,AI聊吧",
  description: "我们聊聊吧，可以解决您的问题。We Chat Pub 聊吧(wc.pub)",
  mainNav: [],
  links: {
    twitter: "",
    github: ""
  }
}

export interface NavLink {
  /** 站点图标 */
  icon: string
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc: string
  /** 站点链接 */
  link: string
}

type NavData = {
  title: string
  items: NavLink[]
}

export const NavData: NavData[] = [
  {
    title: "聊吧",
    items: [
      {
        icon: "https://chat.deepseek.com/favicon.svg",
        title: "DeepSeek",
        desc: "中国的深度求索（DeepSeek）公司开发的智能助手DeepSeek Chat",
        link: "https://chat.deepseek.com" 
      },
      {
        icon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/logo-icon.png",
        title: "豆包",
        desc: "字节旗下AI工具你的智能助手，帮你智能编程，速解代码难题，帮你写作，提供灵感，驾驭各类体裁和风格",
        link: "https://www.doubao.com/chat" 
      },
      {
        icon: "https://nlp-eb.cdn.bcebos.com/logo/favicon.ico",
        title: "文心一言",
        desc: "百度全新一代知识增强大语言模型，文心大模型家族的新成员，能够与人对话互动、回答问题、协助创作，高效便捷地帮助人们获取信息、知识和灵感",
        link: "https://yiyan.baidu.com" 
      },
      {
        icon: "https://cp.baidu.com/favicon.ico",
        title: "橙篇",
        desc: "橙篇是百度文库在2024百度移动生态万象大会发布的综合性AI Native产品。主打专业的知识检索和问答、超长图文理解和生成、深度编辑和跨模态自由创作。",
        link: "https://cp.baidu.com" 
      },
      {
        icon: "https://statics.moonshot.cn/kimi-chat/favicon.ico",
        title: "Kimi",
        desc: "Kimi是北京月之暗面科技有限公司于2023年10月9日推出的一款智能助手，主要应用场景为专业学术论文的翻译和理解、辅助分析法律问题、快速理解API开发文档等，是全球首个支持输入20万汉字的智能助手产品。",
        link: "https://kimi.moonshot.cn" 
      },{
        icon: "https://cdn-bot.hunyuan.tencent.com/logo.png",
        title: "元宝",
        desc: "我是腾讯元宝，一个由腾讯打造的智能小助手！目前我正在使用Hunyuan-T1模型为您提供服务，支持通过文字、图片、文件等多种方式互动。无论是解答问题、学习新知识、创作内容，还是编程开发、图像生成，甚至日常闲聊",
        link: "https://yuanbao.tencent.com" 
      },
      {
        icon: "https://wy-static.wenxiaobai.com/wenxiaobai-web/production/3.10.4/_next/static/media/new_favicon.6d31cfe4.png",
        title: "问小白",
        desc: "您好！我是“问小白”智能助手中的AI大模型，基于深度求索（DeepSeek）的DeepSeek-R1-671B模型开发，擅长通过自然对话为您提供信息查询、逻辑推理、创意生成等多方面的帮助",
        link: "https://www.wenxiaobai.com/chat" 
      },
      {
        icon: "https://www.n.cn/favicon.ico",
        title: "纳米AI搜索",
        desc: "纳米 AI 搜索是由 360 推出的全新 AI 搜索产品，旨在通过多模态内容创作引擎，为用户提供一站式的 “搜、学、写、创” 服务，推动搜索进入 3.0 时代",
        link: "https://www.n.cn/" 
      },
      {
        icon: "https://static.tiangong.cn/prod-skywork-web-bundle/favicon.ico",
        title: "天工Skywork",
        desc: "天工Skywork-13B开源大模型 Skywork-13B。天工 Skywork 是 AI Office 智能体，含 3 专家 + 1 通用 agent，可生成文档、PPT、表格，支持网页、图像等创意创作。融合多模态与深度检索技术，提供科研级结果，助职场人、学生等提升效率，释放创造力。",
        link: "https://www.tiangong.cn/login?invite_code=fdc88b40e0700b7ef3c69ff3aaaa264f" 
      },
      {
        icon: "https://pic1.zhimg.com/v2-7e3856b1a6d415224ca95814132a3612.png",
        title: "知乎直答",
        desc: "知乎推出的一款使用 AI 大模型等先进技术的产品，以知乎社区的优质内容为核心，多种数据源为辅助，为人们提供一种全新的获取可靠信息的途径。知乎直答是多智能体系统，能够满足用户多维度的需求；同时对生成结果进行溯源，以确保内容的可信、可控以及对知识产权和版权的尊重。知乎直答致力于为用户提供卓越的使用体验，用技术拉近创作者和用户之间的距离。有问题，就会有答案。",
        link: "https://zhida.zhihu.com" 
      }
    ]
  },
  {
    title: "外围",
    items: [
      {
        icon: "https://www.wc.pub/wc.png",
        title: "ChatGPT",
        desc: "由 OpenAI 开发，主要提供 智能对话、知识咨询、数据分析、代码辅助 等服务",
        link: "https://chat.openai.com" 
      },
      {
        icon: "https://www.wc.pub/wc.png",
        title: "Gemini",
        desc: "Google DeepMind（谷歌母公司Alphabet下设立的人工智能实验室）于2023年12月6日发布的人工智能模型，可同时识别文本、图像、音频、视频和代码五种类型信息，还可以理解并生成主流编程语言的高质量代码",
        link: "https://gemini.google.com" 
      },
      {
        icon: "https://www.wc.pub/wc.png",
        title: "Watch TV Global",
        desc: "Watch Free Live TV from Around the World on tv.garden! Stream live news, sports, and entertainment—no subscription needed. Start watching now!",
        link: "https://tv.garden/" 
      }
    ]
  },
  {
    title: "中介",
    items: [
      {
        icon: "https://cloud.siliconflow.cn/favicon.ico",
        title: "硅基流动",
        desc: "基于优秀的开源模型，提供高性价比的 GenAI 云服务.文本对话 · 图像生成 · 视频生成 · 语音合成",
        link: "https://cloud.siliconflow.cn/i/MU6sa7EJ"
      },
      {
        icon: "https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico",
        title: "阿里云百炼",
        desc: "阿里云推出的一站式大模型开发与应用平台，旨在帮助企业和开发者快速构建、部署及优化大模型应用，支持从模型调用、训练到应用落地的全流程服务",
        link: "https://www.aliyun.com/product/bailian"
      },
      {
        icon: "https://portal.volccdn.com/obj/volcfe/misc/favicon.png",
        title: "火山方舟",
        desc: "抖音推出火山方舟提供模型训练、推理、评测、精调等全方位功能与服务，并重点支撑大模型生态。",
        link: "https://www.volcengine.com/product/ark"
      }
    ]
  },
  {
    title: "工具",
    items: [
      {
        icon: "https://nav.liwenkai.fun/logo.ico",
        title: "文凯导航",
        desc: "一个简单好用的导航网站，里面是一些网站开发常用的网站",
        link: "https://nav.liwenkai.fun"
      },
      {
        icon: "https://assets.cdn.ifixit.com/static/icons/ifixit/favicon-32x32.png",
        title: "iFixit",
        desc: "iFixit 是一个以维修为主题的全球性互助社区。从一个一个的设备开始，让我们来一步一个脚印一点一点的修复这个世界。你可以在问题解答论坛和专家一起互动——还可以创建并与全世界分享由你编篡的维修手册。你可以在这里买到所有关于你的 DIY 维修计划的配件及工具，帮助修复好你的苹果或安卓设备。",
        link: "https://zh.ifixit.com"
      }
    ]
  },
  {
    title: "数据",
    items: [
      {
        icon: "https://tushare.pro/static/frontend/images/favicon-32x32.png",
        title: "Tushare",
        desc: "Tushare是一个免费、开源的python财经数据接口包。主要实现对股票等金融数据从数据采集、清洗加工 到 数据存储的过程，能够为金融分析人员提供快速、整洁、和多样的便于分析的数据，为他们在数据获取方面极大地减轻工作量，使他们更加专注于策略和模型的研究与实现上。",
        link: "https://tushare.pro/register?reg=771968"
      }
      // ,
      // {
      //   icon: "https://tushare.pro/static/frontend/images/favicon-32x32.png",
      //   title: "AKShare",
      //   desc: "AKShare是一款基于Python的开源金融数据接口库，旨在为个人投资者和研究人员提供方便获取广泛金融数据的工具。该库涵盖股票、期货、期权、基金、债券、指数、数字货币、外汇、宏观经济等多种金融数据类型，数据来源于公开的数据源",
      //   link: "https://tushare.pro/register?reg=771968"
      // }
    ]
  },
  {
    title: "论文",
    items: [
      {
        icon: "https://www.wc.pub/wc.png",
        title: "AI小微智能写作",
        desc: "收费。你只负责输入标题，写论文的这100小时，小微来帮你节省。",
        link: "http://apmq2k.checkmore.net/tb/htjR1P?dCode=vxovvO0Pybsdl9Yu&couponCode=xiaoweilunwen"
      }
    ]
  }
]
