import { createFileRoute } from "@tanstack/react-router";
import { ChatPage } from "@/components/ChatPage/ChatPage";

export const Route = createFileRoute("/demo/guitarchat")({
	component: ChatPage,
});

