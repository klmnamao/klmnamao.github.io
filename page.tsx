import { Globe2, Users, BarChart3, Target, Clock, FileText, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Share2, Globe, Users2, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Apple-style navigation */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-[980px] mx-auto px-4 h-12 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-medium">HuhuPanda</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-sm font-medium hover:text-primary/80 transition-colors">
              业务介绍
            </a>
            <a href="#coverage" className="text-sm font-medium hover:text-primary/80 transition-colors">
              类目覆盖
            </a>
            <a href="#matrix" className="text-sm font-medium hover:text-primary/80 transition-colors">
              流量矩阵
            </a>
            <a href="#cases" className="text-sm font-medium hover:text-primary/80 transition-colors">
              服务案例
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary/80 transition-colors">
              联系我们
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Now with background image */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background pattern"
            fill
            className="object-cover opacity-[0.03]"
          />
        </div>
        <div className="max-w-[980px] mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4">全球视野的营销机构</h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8">为品牌提供一站式的全球本地化品销合一服务</p>
          {/* Buttons removed for cleaner design */}
        </div>
      </section>

      {/* Services Section - Now with illustrations */}
      <section id="services" className="py-24 bg-black text-white">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16">业务介绍</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 p-8 transition-all hover:scale-[1.02]">
              <div className="mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iStock-2150579796.jpg-bhTBDHeXIe5MDJHxA0Dbvrrvh2wn6T.jpeg"
                  alt="联盟代投示意图"
                  width={400}
                  height={250}
                  className="rounded-xl object-cover w-full"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">联盟代投</h3>
              <p className="text-gray-400 mb-8">与海外头部主流营销联盟渠道对接，触达超百万网盟带货渠道。</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 transform scale-x-0 transition-transform group-hover:scale-x-100" />
            </div>
            {/* Repeat similar structure for other service cards */}
            <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 p-8 transition-all hover:scale-[1.02]">
              <div className="mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WechatIMG562.jpg-zgKarsp8BbnRD6C62lgH66ARQs3epE.jpeg"
                  alt="联盟品宣示意图"
                  width={400}
                  height={250}
                  className="rounded-xl object-cover w-full"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">联盟品宣</h3>
              <p className="text-gray-400 mb-8">与市场主流媒体资源合作，在内容类、导购类等网站提供品牌曝光。</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 transform scale-x-0 transition-transform group-hover:scale-x-100" />
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 p-8 transition-all hover:scale-[1.02]">
              <div className="mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iStock-1168315160.jpg-EYIwdcF8UejxiEJCEFyubl228s3aj1.jpeg"
                  alt="社媒品宣示意图"
                  width={400}
                  height={250}
                  className="rounded-xl object-cover w-full"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">社媒品宣</h3>
              <p className="text-gray-400 mb-8">根据用户不同诉求提供网红广告模式，定制触达人群进行推广。</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 transform scale-x-0 transition-transform group-hover:scale-x-100" />
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 p-8 transition-all hover:scale-[1.02]">
              <div className="mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iStock-2029907821.jpg-Qtn81UfgFFHlTmVOlDCFa9mafA4nEC.jpeg"
                  alt="TikTok带货示意图"
                  width={400}
                  height={250}
                  className="rounded-xl object-cover w-full"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">TikTok带货</h3>
              <p className="text-gray-400 mb-8">作为团长对接流量接口，以确定的达人资源采取团长抽佣的模式。</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 transform scale-x-0 transition-transform group-hover:scale-x-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section - With map background */}
      <section id="coverage" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="World map background"
            fill
            className="object-cover opacity-[0.03]"
          />
        </div>
        <div className="max-w-[980px] mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-semibold text-center mb-16">类目覆盖</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-[28px] bg-gray-100 flex items-center justify-center transition-transform group-hover:scale-110">
                <Globe2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-medium">消费电子</h3>
            </div>
            <div className="group text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-[28px] bg-gray-100 flex items-center justify-center transition-transform group-hover:scale-110">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-medium">家居生活</h3>
            </div>
            <div className="group text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-[28px] bg-gray-100 flex items-center justify-center transition-transform group-hover:scale-110">
                <BarChart3 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-medium">运动户外</h3>
            </div>
            <div className="group text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-[28px] bg-gray-100 flex items-center justify-center transition-transform group-hover:scale-110">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-medium">服装配饰</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights - With decorative elements */}
      <section className="py-24 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-[980px] mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-semibold text-center mb-16">服务亮点</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <Clock className="w-12 h-12 text-primary mx-auto mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-medium mb-4">全球时区客户经理</h3>
              <p className="text-gray-600">客户经理覆盖全球时区，及时响应并跟进您的需求，确保服务无时差</p>
            </div>
            <div className="text-center group">
              <FileText className="w-12 h-12 text-primary mx-auto mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-medium mb-4">周报运营分析</h3>
              <p className="text-gray-600">每周提供运营分析报告，深入洞察流量变化，助您优化策略</p>
            </div>
            <div className="text-center group">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-medium mb-4">成本效益保障</h3>
              <p className="text-gray-600">仅在流量启动后才计费，最大程度守护您的投资回报率（ROI）</p>
            </div>
          </div>
        </div>
      </section>

      {/* Traffic Matrix - Apple style grid */}
      <section id="matrix" className="py-24">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16">流量矩阵</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center">
              <Share2 className="w-12 h-12 text-primary mx-auto mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-medium mb-4">社交媒体</h3>
              <p className="text-gray-600">覆盖全球主流社交平台，触达目标用户群体</p>
            </div>
            <div className="group text-center">
              <Globe className="w-12 h-12 text-primary mx-auto mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-medium mb-4">门户网站</h3>
              <p className="text-gray-600">与各大门户网站合作，提供优质广告位资源</p>
            </div>
            <div className="group text-center">
              <Users2 className="w-12 h-12 text-primary mx-auto mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-medium mb-4">购物类网站</h3>
              <p className="text-gray-600">电商平台精准投放，转化效果显著</p>
            </div>
            <div className="group text-center">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-medium mb-4">社区平台</h3>
              <p className="text-gray-600">深度整合社区资源，打造口碑传播</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - With brand imagery */}
      <section id="cases" className="py-24 bg-black text-white">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16">服务案例</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 p-8 transition-all hover:scale-[1.02]">
              <div className="mb-6 overflow-hidden rounded-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%94%B5%E5%AD%90%E7%83%9F.jpg-Hzd6kMus5Y9b1gMIa1hQZmq3IRnbP4.jpeg"
                  alt="电子烟品牌案例"
                  width={400}
                  height={300}
                  className="transform group-hover:scale-105 transition-transform duration-300 object-cover w-full"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-6">某头部电子烟品牌</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium mb-2">项目目标</h4>
                  <p className="text-gray-400">提高品牌GMV，扩大市场份额</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">实现效果</h4>
                  <p className="text-gray-400">带动品牌整体联盟GMV占比提升</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 transform scale-x-0 transition-transform group-hover:scale-x-100" />
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 p-8 transition-all hover:scale-[1.02]">
              <div className="mb-6 overflow-hidden rounded-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WechatIMG564.jpg-JA0amqDP543eolnrUNOwFNlWrPuBQF.jpeg"
                  alt="枸杞品牌案例"
                  width={400}
                  height={300}
                  className="transform group-hover:scale-105 transition-transform duration-300 object-cover w-full"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-6">某枸杞品牌</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium mb-2">项目目标</h4>
                  <p className="text-gray-400">提高品牌知名度，拓展海外市场</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">实现效果</h4>
                  <p className="text-gray-400">品牌传播度显著提升，线上GMV增长</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 transform scale-x-0 transition-transform group-hover:scale-x-100" />
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 p-8 transition-all hover:scale-[1.02]">
              <div className="mb-6 overflow-hidden rounded-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iStock-1208516997.jpg-TRYeTunJo3sFrXDKvhTgjJuAtIlTvv.jpeg"
                  alt="洗护品牌案例"
                  width={400}
                  height={300}
                  className="transform group-hover:scale-105 transition-transform duration-300 object-cover w-full"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-6">某国际洗护品牌</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium mb-2">项目目标</h4>
                  <p className="text-gray-400">提高美国市场销量和品牌认知</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">实现效果</h4>
                  <p className="text-gray-400">产品GMV和订单数显著提升</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 transform scale-x-0 transition-transform group-hover:scale-x-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - With decorative background */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full opacity-50" />
        </div>
        <div className="max-w-[980px] mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-semibold mb-8">联系我们</h2>
          <p className="text-xl text-gray-600 mb-8">Email：contact@huhupanda.com</p>
          <a href="mailto:contact@huhupanda.com" className="inline-block">
            <Button size="lg" className="text-base rounded-full px-8 bg-primary hover:bg-primary/90">
              立即联系
            </Button>
          </a>
        </div>
      </section>

      {/* Footer - Apple style */}
      <footer className="py-8 border-t">
        <div className="max-w-[980px] mx-auto px-4 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} HuhuPanda. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

