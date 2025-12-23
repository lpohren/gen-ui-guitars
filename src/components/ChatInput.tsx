import { Send, Square } from "lucide-react";
import type { ModelOption } from "@/lib/model-selection";

export function ChatInput({
	input,
	setInput,
	isLoading,
	availableModelOptions,
	selectedModel,
	onModelChange,
	onSubmit,
	onStop,
	onSendMessage,
}: {
	input: string;
	setInput: (value: string) => void;
	isLoading: boolean;
	availableModelOptions: ModelOption[];
	selectedModel: ModelOption | null;
	onModelChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	onStop: () => void;
	onSendMessage: (message: string) => void;
}) {
	return (
		<div className="space-y-3">
			{/* Model Selector */}
			<div className="flex justify-center">
				<select
					value={
						selectedModel
							? `${selectedModel.provider}:${selectedModel.model}`
							: ""
					}
					onChange={onModelChange}
					disabled={isLoading}
					className="rounded-lg border border-green-500/20 bg-stone-800/50 px-3 py-1.5 text-xs text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500/50"
				>
					{availableModelOptions.map((option) => (
						<option
							key={`${option.provider}:${option.model}`}
							value={`${option.provider}:${option.model}`}
						>
							{option.label}
						</option>
					))}
				</select>
			</div>

			{isLoading && (
				<div className="flex items-center justify-center">
					<button
						onClick={onStop}
						className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
					>
						<Square className="w-4 h-4 fill-current" />
						Stop
					</button>
				</div>
			)}
			<form onSubmit={onSubmit}>
				<div className="relative max-w-xl mx-auto flex items-center gap-2">
					<div className="relative flex-1">
						<textarea
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Type something clever..."
							className="w-full rounded-lg border border-green-500/20 bg-stone-800/50 pl-4 pr-12 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent resize-none overflow-hidden shadow-lg"
							rows={1}
							style={{ minHeight: "44px", maxHeight: "200px" }}
							disabled={isLoading}
							onInput={(e) => {
								const target = e.target as HTMLTextAreaElement;
								target.style.height = "auto";
								target.style.height =
									Math.min(target.scrollHeight, 200) + "px";
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter" && !e.shiftKey && input.trim()) {
									e.preventDefault();
									onSendMessage(input);
									setInput("");
								}
							}}
						/>
						<button
							type="submit"
							disabled={!input.trim() || isLoading}
							className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-green-500 hover:text-green-400 disabled:text-gray-500 transition-colors focus:outline-none"
						>
							<Send className="w-4 h-4" />
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

