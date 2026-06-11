import type { MilestoneCard } from '../types';
import { a } from '../utils/assets';

function CardSection({ title, cards }: { title: string; cards: MilestoneCard[] }) {
  return (
    <section className="content-section">
      <h2>{title}</h2>
      <div className="milestone-grid">
        {cards.map((card) => (
          <article className="milestone-card" style={{ borderTopColor: card.border || 'var(--accent-color)' }} key={card.title}>
            <img src={a(card.image)} alt={card.title} />
            <div className="milestone-content">
              <span style={{ color: card.border || 'var(--accent-color)' }}>{card.date}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CardSection;
