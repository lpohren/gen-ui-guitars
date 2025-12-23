import GuitarRecommendation from "@/components/GuitarRecommendation";
import GuitarRecommendations from "@/components/GuitarRecommendations";
import GuitarComparison from "@/components/GuitarComparison";
import type { ChatMessages } from "@/lib/ai-hook";
import { getLatestRecommendation } from "@/lib/guitarchat-utils";

export function RecommendationPanel({ messages }: { messages: ChatMessages }) {
	const latestRecommendation = getLatestRecommendation(messages);

	if (!latestRecommendation) {
		return (
			<div className="flex-1 border-l border-green-500/10 bg-stone-900/50 p-4 flex items-center justify-center">
				<p className="text-gray-500 text-sm text-center">
					No recommendations yet
				</p>
			</div>
		);
	}

	return (
		<div className="flex-1 border-l border-green-500/10 bg-stone-900/50 overflow-y-auto">
			<div className="p-4">
				{latestRecommendation.type === "single" ? (
					<GuitarRecommendation
						id={String((latestRecommendation.data as { id: number }).id)}
					/>
				) : latestRecommendation.type === "multiple" ? (
					<GuitarRecommendations
						ids={
							(latestRecommendation.data as { ids: number[] }).ids?.map((id) =>
								String(id),
							) || []
						}
					/>
				) : (
					<GuitarComparison
						id1={String((latestRecommendation.data as { id1: number; id2: number }).id1)}
						id2={String((latestRecommendation.data as { id1: number; id2: number }).id2)}
					/>
				)}
			</div>
		</div>
	);
}

