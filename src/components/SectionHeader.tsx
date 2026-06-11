function SectionHeader({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="section-header">
      <i className={icon} />
      <h2>{title}</h2>
    </div>
  );
}

export default SectionHeader;
