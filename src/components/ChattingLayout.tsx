export function ChattingLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="sticky bottom-0 left-0 right-0 bg-stone-900/80 backdrop-blur-sm border-t border-green-500/10 z-10">
			<div className="max-w-3xl mx-auto w-full px-4 py-3">{children}</div>
		</div>
	);
}

