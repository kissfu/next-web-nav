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
      },
      {
        icon: "https://www.wenxiaobai.com/new_favicon.ico",
        title: "问小白",
        desc: "您好！我是“问小白”智能助手中的AI大模型，基于深度求索（DeepSeek）的DeepSeek-R1-671B模型开发，擅长通过自然对话为您提供信息查询、逻辑推理、创意生成等多方面的帮助",
        link: "https://www.wenxiaobai.com/chat" 
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
      }
    ]
  }
]
