import React from "react";
import { createRoot, Root } from "react-dom/client";

import GuitarRecommendationWidget from "@/chatgpt/GuitarRecommendationWidget";
import {
  ChatGPTIntegration,
  useChatGPTToolOutput,
} from "@/chatgpt/integration";
import { getBaseURL } from "../lib/config";

import "@/styles.css";

const CONTAINER_ID = "tanstack-app-root";

function ensureRoot(): Root {
  const container = document.getElementById(CONTAINER_ID);
  if (!container) {
    throw new Error(`Container #${CONTAINER_ID} not found`);
  }

  let root = (container as any)._reactRoot as Root | undefined;
  if (!root) {
    root = createRoot(container);
    (container as any)._reactRoot = root;
  }
  return root;
}

function PlaceGuitarRecommendation() {
  const toolOutput = useChatGPTToolOutput<{ id?: string }>();
  if (!toolOutput?.id) {
    return null;
  }
  return (
    <GuitarRecommendationWidget id={toolOutput.id}>
      <a
        onClick={() => {
          (window as any).openai.openExternal({
            href: `${getBaseURL()}example/guitars/${toolOutput.id}`,
          });
        }}
      >
        <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1.5 rounded-lg text-sm hover:opacity-90 transition-opacity">
          View Details
        </button>
      </a>
    </GuitarRecommendationWidget>
  );
}

function render() {
  ensureRoot().render(
    <React.StrictMode>
      <ChatGPTIntegration>
        <PlaceGuitarRecommendation />
      </ChatGPTIntegration>
    </React.StrictMode>
  );
}

render();
