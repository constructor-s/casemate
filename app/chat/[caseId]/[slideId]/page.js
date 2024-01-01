import { cases } from '@/app/lib/cases';
import ChatSlide from './chat-slide';
import Link from 'next/link';

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
  slideId = parseInt(slideId);
  const slide = cases[caseId].slides[slideId];
  return (
    // Add a link to the next slideId if it exists
    <div>
      <ChatSlide slide={slide} />
      <div className="float-right">
        {slideId - 1 >= 0 && <Link href={`/chat/${caseId}/${slideId - 1}`}>Previous</Link>}
        {slideId + 1 < cases[caseId].slides.length && <Link href={`/chat/${caseId}/${slideId + 1}`}>Next</Link>}
      </div>
    </div>
  );
}