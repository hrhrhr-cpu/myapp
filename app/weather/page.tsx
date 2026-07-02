import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "天气知识",
  description: "探索天气现象、气候与天气预报背后的科学原理",
};

export default function WeatherPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col py-16 px-6 bg-white dark:bg-black sm:px-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50 mb-4">
            天气知识
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            天气是大气层在短时间内发生的各种现象。了解天气背后的科学知识，
            能帮助我们更好地安排生活、保护安全，并欣赏自然界的奇妙。
          </p>
        </div>

        {/* Weather Basics */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-6">
            天气是什么？
          </h2>
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6">
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400 mb-4">
              天气指的是某一地区在某一时刻或短时间内的大气状态，包括温度、湿度、
              降水、风、气压、云量等要素。它与气候不同：气候是长时间内天气的平均状态。
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 p-4">
                <h3 className="font-semibold text-black dark:text-zinc-50 mb-1">天气 Weather</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">短期、多变，今天下雨明天晴</p>
              </div>
              <div className="rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 p-4">
                <h3 className="font-semibold text-black dark:text-zinc-50 mb-1">气候 Climate</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">长期平均，如热带雨林气候</p>
              </div>
            </div>
          </div>
        </section>

        {/* Weather Phenomena */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-6">
            常见天气现象
          </h2>
          <div className="grid gap-6">
            <PhenomenonCard
              title="雨 Rain"
              icon="🌧️"
              description="当大气中的水蒸气凝结成水滴，水滴增大到空气托不住时，就会降落到地面。"
              fact="地球上降水最多的地方是印度乞拉朋齐，被称为‘世界雨极’。"
            />
            <PhenomenonCard
              title="雪 Snow"
              icon="❄️"
              description="水蒸气在低温下直接凝华成冰晶，多个冰晶结合形成雪花。"
              fact="雪花的形状取决于温度和湿度，理论上没有两片完全相同的雪花。"
            />
            <PhenomenonCard
              title="雷暴 Thunderstorm"
              icon="⛈️"
              description="强烈的对流活动产生积雨云，云内电荷分离导致闪电，闪电加热空气产生雷声。"
              fact="闪电的温度可达约 30,000°C，是太阳表面温度的 5 倍。"
            />
            <PhenomenonCard
              title="风 Wind"
              icon="💨"
              description="空气从高气压区向低气压区流动形成风。气压差越大，风力越强。"
              fact="风速最快的自然风是龙卷风，中心风速可超过 480 公里/小时。"
            />
            <PhenomenonCard
              title="雾 Fog"
              icon="🌫️"
              description="近地面空气中的水蒸气凝结成微小水滴，使能见度降低到 1 公里以下。"
              fact="雾和云本质相同，只是云在空中，雾贴近地面。"
            />
            <PhenomenonCard
              title="彩虹 Rainbow"
              icon="🌈"
              description="阳光穿过雨滴时发生折射、反射和色散，将白光分解成七色光谱。"
              fact="彩虹是圆弧形，但在地面上我们通常只能看到半圆。"
            />
          </div>
        </section>

        {/* Weather Forecasting */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-6">
            天气预报怎么做？
          </h2>
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6">
            <ol className="space-y-4 list-decimal list-inside text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <strong className="text-black dark:text-zinc-50">观测：</strong>
                通过气象卫星、雷达、地面站、探空气球收集温度、湿度、气压、风等数据。
              </li>
              <li>
                <strong className="text-black dark:text-zinc-50">同化：</strong>
                将海量观测数据整合成大气状态的初始场。
              </li>
              <li>
                <strong className="text-black dark:text-zinc-50">数值预报：</strong>
                利用超级计算机求解描述大气运动的物理方程组，预测未来天气变化。
              </li>
              <li>
                <strong className="text-black dark:text-zinc-50">预报员分析：</strong>
                结合经验与模式输出，发布最终预报结论。
              </li>
            </ol>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-6">
            天气安全小贴士
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <SafetyCard
              title="雷雨天气"
              tips={["避免在空旷地带停留", "远离高大树木和电线杆", "不要在水面游泳"]}
            />
            <SafetyCard
              title="高温天气"
              tips={["多喝水，避免中暑", "减少中午户外活动", "穿着轻薄透气的衣物"]}
            />
            <SafetyCard
              title="大雾天气"
              tips={["驾车开启雾灯、减速慢行", "避免户外运动", "注意交通安全"]}
            />
            <SafetyCard
              title="台风天气"
              tips={["关好门窗，加固易被吹动物品", "避免外出", "远离海边和低洼地区"]}
            />
          </div>
        </section>

        {/* Fun Fact */}
        <section className="mb-12">
          <div className="rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 p-6 text-white">
            <h2 className="text-xl font-semibold mb-2">你知道吗？</h2>
            <p className="text-sm leading-6 opacity-90">
              一朵普通的积雨云重量可达 100 万公斤，相当于 100 头大象。但因为它分散在巨大的空间里，
              由上升气流托住，所以能飘浮在空中。
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            天气知识 · 科学让生活更美好
          </p>
          <Link
            href="/"
            className="text-sm font-medium text-zinc-950 dark:text-zinc-50 hover:underline"
          >
            ← 返回首页
          </Link>
        </div>
      </main>
    </div>
  );
}

function PhenomenonCard({
  title,
  icon,
  description,
  fact,
}: {
  title: string;
  icon: string;
  description: string;
  fact: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-semibold text-black dark:text-zinc-50">{title}</h3>
      </div>
      <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400 mb-3">
        {description}
      </p>
      <p className="text-sm leading-6 text-sky-700 dark:text-sky-400">
        💡 {fact}
      </p>
    </div>
  );
}

function SafetyCard({
  title,
  tips,
}: {
  title: string;
  tips: string[];
}) {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-5">
      <h3 className="font-semibold text-black dark:text-zinc-50 mb-3">{title}</h3>
      <ul className="space-y-2">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="text-sky-600 dark:text-sky-400 mt-0.5">•</span>
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
