import { cn } from "@/lib/utils"
import Icon, { icons } from "@/components/ui/icon"

type Props = {
  theory: number
  rythem: number
  reading: number
  hearing: number
}

type ChartIndicatorProps = {
  value: number
  color: string
  icon: keyof typeof icons
}

type ChartProps = {
  title: string
  currentState: number
  progress: number
  color: string
  icon: keyof typeof icons
}

export default function Stats({theory = 0, rythem = 0, reading = 0, hearing = 0}: Props) {
  const ChartIndicator = ({value, color, icon}: ChartIndicatorProps) => {
    return (
      <div
        className={cn("flex flex-col w-full h-44 rounded-3xl crosshatch-size-3 items-center justify-end crosshatch-stone-300")}>
        <div className="z-50 flex items-center justify-center w-6 -mb-3 bg-white rounded-full aspect-square">
          <div className="w-2 mx-auto rounded-full aspect-square bg-stone-400"></div>
        </div>

        <div className={cn("w-full rounded-3xl", color)} style={{ height: `${value}%` }}></div>

        <Icon 
          className="flex items-center justify-center w-12 -my-6 border-2 rounded-full bg-linen-950 border-linen-100" 
          name={icon}
          variant="bulk"
          color="fill-linen-100"
        />
      </div>
    )
  }

  const Chart = ({title, currentState, progress, color, icon}: ChartProps) => {
    return (
      <div className="flex flex-col items-center justify-center w-full">
        <ChartIndicator value={progress} color={color} icon={icon} />
        <p className="mt-6 text-xs font-medium text-center font-borna">{title}</p>
        <p className="mt-1 font-semibold text-center font-borna">{currentState} درس</p>
      </div>
    )
  }

  return (
    <section className="w-full px-5">
      <h2 className="mb-4 text-xl font-extrabold font-borna text-title">وضعیت من</h2>

      <div className="grid w-full grid-cols-4 gap-2">
        <Chart
          title="تئوری"
          currentState={10}
          progress={theory}
          color="bg-mint-700"
          icon="book"
        />

        <Chart
          title="ریتم"
          currentState={6}
          progress={rythem}
          color="bg-cherry-700"
          icon="timer"
        />

        <Chart
          title="دید‌خوانی"
          currentState={24}
          progress={reading}
          color="bg-sky-700"
          icon="music"
        />

        <Chart
          title="شنیداری"
          currentState={37}
          progress={hearing}
          color="bg-mustard-700"
          icon="music-play"
        />
      </div>
    </section>
  )
}
