import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import Icon from "@/components/ui/icon"

type Props = {
  current: number
  target: number
}

type DayOfWeekProps = {
  label: string
  active?: boolean
}

const daysOfWeek = [
  'شنبه',
  'یکشنبه',
  'دوشنبه',
  'سه‌شنبه',
  'چهارشنبه',
  'پنج‌شنبه',
  'جمعه',
]

export default function Streak({current, target}: Props) {
	const DayOfWeek = ({ label, active = false }: DayOfWeekProps) => {
    return (
      <div className="flex flex-col items-center justify-center aspect-square max-w-16">
        <Icon 
          className={cn(
            "p-2 rounded-full",
            active ? "bg-linen-500" :"bg-white"
          )} 
          name="musicnote" 
          color={active ? "fill-linen-900" : "fill-cherry-800" } />
          
        <p 
          className={cn(
            "mt-1 text-sm font-medium select-none font-borna",
            active ? "text-linen-500" :"text-white"
          )}
        >
          {label}
        </p>
      </div>
    )
	}

	return (
		<section className="w-full mt-4">
      <h2 className="mb-2 text-2xl font-extrabold text-center text-white font-borna">در مسیر پیشرفت</h2>

      <div className="grid w-full grid-cols-3 space-x-2 rounded-3xl">
        <div className="p-1.5 bg-cherry-900 rounded-3xl">
          <div className="flex flex-col items-center justify-center h-full bg-linen-950 rounded-3xl">
            <span>
              <svg width="60" height="60" viewBox="0 0 507 507" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M246.073 7.07106C249.978 3.16582 256.31 3.16582 260.215 7.07107L379.716 126.572C449.62 196.476 449.62 309.812 379.716 379.716V379.716C309.812 449.62 196.476 449.62 126.572 379.716V379.716C56.6683 309.812 56.6683 196.476 126.572 126.572L246.073 7.07106Z"
                  fill="#DD3254" />
                <path
                  d="M124.729 69.4798C125.96 64.3365 131.127 61.1644 136.27 62.3948L199.053 77.414C256.445 91.1434 291.84 148.799 278.111 206.19L274.304 222.101C262.677 270.705 213.849 300.681 165.245 289.054V289.054C116.64 277.427 86.6643 228.599 98.2917 179.995L124.729 69.4798Z"
                  fill="#DD3254" />
                <path
                  d="M387.09 119.098C392.072 117.387 397.498 120.039 399.209 125.021L419.958 185.436C439.126 241.248 409.42 302.03 353.609 321.198L337.799 326.628C290.719 342.797 239.446 317.739 223.277 270.659V270.659C207.108 223.579 232.166 172.305 279.246 156.136L387.09 119.098Z"
                  fill="#DD3254" />
                <path
                  d="M247.082 144.634C250.43 141.286 255.858 141.286 259.206 144.634L310.431 195.858C342.069 227.496 342.069 278.792 310.431 310.43V310.43C278.792 342.069 227.496 342.069 195.858 310.43V310.43C164.22 278.792 164.22 227.496 195.858 195.858L247.082 144.634Z"
                  fill="#F1B852" />
              </svg>
            </span>

            <h4 className="text-xl font-bold text-white font-borna">{current} روز</h4>

            <span className="text-xs font-borna text-linen-400 whitespace-nowrap">روند تمریناتم</span>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between col-span-2 space-y-2">
          <div className="flex flex-col justify-center w-full p-1.5 bg-cherry-900 rounded-full relative">
            <span className="absolute left-0 right-0 mx-auto text-xs font-bold text-white w-fit font-borna">
              {target-current} روز تا هدفم
            </span>
            
            <Progress value={current/target*100} className="h-4" />
          </div>

          <div className="p-1.5 bg-cherry-900 w-full rounded-2xl">
            <div className="grid w-full grid-flow-col-dense gap-1 p-2 overflow-x-auto bg-linen-950 rounded-2xl scrollbar-hide">
              {daysOfWeek.map((day, idx) => <DayOfWeek label={day} key={idx} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
	)
}