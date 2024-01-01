import { cases } from '@/app/lib/cases';
import ChatSlide from './chat-slide';

export function generateStaticParams() {
  const params = Object.keys(cases).flatMap((caseId) => {
    return cases[caseId].slides.map((slide, slideId) => {
      return {
        caseId,
        slideId: `${slideId}`
      }
    })
  });
  return params;
}

export default function Page({ params: { caseId, slideId } }) {
  const slide = cases[caseId].slides[slideId];
  return (
    <div>
      <ChatSlide slide={slide} />
    </div>
  );
}