import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Icon from "@/components/ui/icon"
import React from "react"

type Props = {
	children?: React.ReactNode
	
	name: string
	level: number
  avatar: string
}

export default function Header({children, name, level, avatar}: Props) {
	return (
		<header className="flex flex-col items-center justify-start w-full p-4 bg-cherry-800 rounded-b-4xl">
			<div className="flex flex-row items-center w-full space-x-2">
				<Avatar className="max-w-12 size-full ring-4 ring-cherry-900">
					<AvatarImage src={avatar} alt={name} />
					<AvatarFallback>{name.charAt(0)}</AvatarFallback>
				</Avatar>

				<div className="flex flex-col items-start justify-center mr-2">
					<h5 className="text-lg font-bold text-white font-borna">
						{name}
						<span className="text-sm font-light text-cherry-100"> [صبحت بخیر👋]</span>
					</h5>

					<h6 className="text-xs text-cherry-100 font-borna">سطح {level}</h6>
				</div>

				<Icon className="p-2 mr-auto rounded-full bg-cherry-900" name="notification" color="fill-cherry-200" />
			</div>

			{children}
		</header>
	)
}