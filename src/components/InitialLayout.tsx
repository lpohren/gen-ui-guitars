export function InitialLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex-1 flex items-center justify-center px-4">
			<div className="text-center max-w-3xl mx-auto w-full">
				<h1 className="text-6xl font-bold mb-4 bg-linear-to-r from-green-500 to-green-600 text-transparent bg-clip-text uppercase flex items-center justify-center gap-2">
					<span className="text-white"> Guitar</span>  Chat 
				</h1>
				<p className="text-gray-400 mb-6 w-2/3 mx-auto text-lg">
					Ask me about guitars, I'll recommend you the best ones.
				</p>
				{children}
			</div>
		</div>
	);
}
