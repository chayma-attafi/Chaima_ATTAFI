import type { ReactNode } from 'react';

function TimelineItem({ date, title, org, children }: { date: string; title: string; org: string; children: ReactNode }) {
  return (
    <article className="timeline-item">
      <span className="timeline-date">{date}</span>
      <h3 className="timeline-title">{title}</h3>
      <span className="timeline-org">{org}</span>
      <div className="timeline-desc">{children}</div>
    </article>
  );
}

export default TimelineItem;
