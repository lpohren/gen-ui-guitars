import { useEffect, useRef } from "react";
import { Streamdown } from "streamdown";
import type { ChatMessages } from "@/lib/ai-hook";

export function ChatMessages({ messages }: { messages: ChatMessages }) {
	const messagesContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (messagesContainerRef.current) {
			messagesContainerRef.current.scrollTop =
				messagesContainerRef.current.scrollHeight;
		}
	}, [messages]);

	if (!messages.length) {
		return null;
	}

	return (
		<div
			ref={messagesContainerRef}
			className="flex-1 overflow-y-auto pb-4 min-h-0"
		>
			<div className="max-w-3xl mx-auto w-full px-4">
				{messages.map((message) => {
					return (
						<div
							key={message.id}
							className={`p-4 ${
								message.role === "assistant"
									? "bg-linear-to-r from-green-500/5 to-green-600/5"
									: "bg-transparent"
							}`}
						>
							<div className="flex items-start gap-4 max-w-3xl mx-auto w-full">
								{message.role === "assistant" ? (
									<div className="w-8 h-8 rounded-lg bg-linear-to-r from-green-500 to-green-600 mt-2 flex items-center justify-center text-sm font-medium text-white shrink-0">
										AI
									</div>
								) : (
									<div className="w-8 h-8 rounded-lg bg-stone-700 flex items-center justify-center text-sm font-medium text-white shrink-0">
										Y
									</div>
								)}
								<div className="flex-1 min-w-0">
									{message.parts.map((part, index) => {
										if (part.type === "text" && part.content) {
											return (
												<div
													className="flex-1 min-w-0 prose dark:prose-invert max-w-none prose-sm"
													key={index}
												>
													<Streamdown>{part.content}</Streamdown>
												</div>
											);
										}
										// Skip rendering guitar recommendations in chat (they're shown in right panel)
										return null;
									})}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

