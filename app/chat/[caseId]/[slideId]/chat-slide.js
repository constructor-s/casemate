"use client";

import { getAssistantForSlide } from '@/app/lib/assistant-helper';
import OpenCustomChatEmbeded from "@/app/ui/open-custom-chat-embeded";
import OpenAI from "openai";
import { useState, useEffect } from 'react';

export default function ChatSlide({ slide }) {
  const [assistantId, setAssistantId] = useState(null);
  
  useEffect(() => {
    (async () => {
      let apiKey = localStorage.getItem('openAIKey');
      const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
      const assistant = await getAssistantForSlide(openai, slide);
      setAssistantId(assistant.id);
    })();
  }, [slide]);

  return (<div className="h-screen">
    {assistantId && <OpenCustomChatEmbeded assistantId={assistantId} title={`CaseMate Chat: ${slide.name}`} defaultChat={slide.prompt || []} />}
  </div>);
}