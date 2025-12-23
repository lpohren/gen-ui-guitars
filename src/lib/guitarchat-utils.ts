import type { ChatMessages } from "./ai-hook";

export function getLatestRecommendation(messages: ChatMessages): {
	type: "single" | "multiple" | "comparison";
	data: { id: number } | { ids: number[] } | { id1: number; id2: number };
} | null {
	// Iterate through messages in reverse to find the latest recommendation
	for (let i = messages.length - 1; i >= 0; i--) {
		const message = messages[i];
		for (const part of message.parts) {
			if (
				part.type === "tool-call" &&
				part.name === "recommendGuitar" &&
				part.output
			) {
				return {
					type: "single",
					data: part.output as { id: number },
				};
			}
			if (
				part.type === "tool-call" &&
				part.name === "recommendGuitars" &&
				part.output
			) {
				return {
					type: "multiple",
					data: part.output as { ids: number[] },
				};
			}
			if (
				part.type === "tool-call" &&
				part.name === "compareGuitars" &&
				part.output
			) {
				return {
					type: "comparison",
					data: part.output as { id1: number; id2: number },
				};
			}
		}
	}
	return null;
}

