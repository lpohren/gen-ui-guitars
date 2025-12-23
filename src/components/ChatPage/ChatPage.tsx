import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { ChatInput } from "@/components/ChatInput";
import { ChatMessages } from "@/components/ChatMessages";
import { ChattingLayout } from "@/components/ChattingLayout";
import { InitialLayout } from "@/components/InitialLayout";
import { RecommendationPanel } from "@/components/RecommendationPanel";
import { useGuitarRecommendationChat } from "@/lib/ai-hook";
import type { ModelOption, Provider } from "@/lib/model-selection";
import {
	getAvailableModelOptions,
	getStoredModelPreference,
	MODEL_OPTIONS,
	setStoredModelPreference,
} from "@/lib/model-selection";

import "./ChatPage.css";

export function ChatPage() {
	const [input, setInput] = useState("");
	const [availableProviders, setAvailableProviders] = useState<Provider[]>([]);
	const [selectedModel, setSelectedModel] = useState<ModelOption | null>(null);
	const [isCheckingProviders, setIsCheckingProviders] = useState(true);

	// Fetch available providers on mount
	useEffect(() => {
		fetch("/demo/api/available-providers")
			.then((res) => res.json())
			.then((data) => {
				setAvailableProviders(data.providers);

				// Set default model based on stored preference or first available
				const storedPref = getStoredModelPreference();
				const availableOptions = getAvailableModelOptions(data.providers);

				if (
					storedPref &&
					availableOptions.some((o) => o.model === storedPref.model)
				) {
					setSelectedModel(storedPref);
				} else if (availableOptions.length > 0) {
					setSelectedModel(availableOptions[0]);
				}

				setIsCheckingProviders(false);
			})
			.catch(() => {
				// Fallback to Ollama if can't reach API
				setAvailableProviders(["ollama"]);
				const ollamaOption = MODEL_OPTIONS.find((m) => m.provider === "ollama");
				if (ollamaOption) setSelectedModel(ollamaOption);
				setIsCheckingProviders(false);
			});
	}, []);

	const availableModelOptions = getAvailableModelOptions(availableProviders);

	const { messages, sendMessage, isLoading, stop } =
		useGuitarRecommendationChat();

	const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selected = availableModelOptions.find(
			(m) => `${m.provider}:${m.model}` === e.target.value,
		);
		if (selected) {
			setSelectedModel(selected);
			setStoredModelPreference(selected);
		}
	};

	const Layout = messages.length ? ChattingLayout : InitialLayout;

	if (isCheckingProviders) {
		return (
			<div className="relative flex h-[calc(100vh-80px)] bg-stone-900 items-center justify-center">
				<Loader2 className="w-8 h-8 text-green-500 animate-spin" />
			</div>
		);
	}

	if (availableModelOptions.length === 0) {
		return (
			<div className="relative flex h-[calc(100vh-80px)] bg-stone-900">
				<div className="flex-1 flex items-center justify-center px-4">
					<div className="text-center max-w-xl">
						<h1 className="text-2xl font-bold text-white mb-4">
							No AI Providers Available
						</h1>
						<p className="text-gray-400 mb-4">
							Please configure at least one AI provider in your{" "}
							<code className="text-green-400">.env.local</code> file, or
							ensure Ollama is running locally.
						</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="relative flex h-[calc(100vh-80px)] bg-stone-900">
			<div className="flex-1 flex flex-col min-h-0">
				<ChatMessages messages={messages} />

				<Layout>
					<ChatInput
						input={input}
						setInput={setInput}
						isLoading={isLoading}
						availableModelOptions={availableModelOptions}
						selectedModel={selectedModel}
						onModelChange={handleModelChange}
						onSubmit={(e) => {
							e.preventDefault();
							if (input.trim()) {
								sendMessage(input);
								setInput("");
							}
						}}
						onStop={stop}
						onSendMessage={(message) => {
							sendMessage(message);
							setInput("");
						}}
					/>
				</Layout>
			</div>
			<RecommendationPanel messages={messages} />
		</div>
	);
}

