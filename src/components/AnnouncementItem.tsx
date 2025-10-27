'use client';

interface AnnouncementItemProps {
  type: string;
  date: string;
  title: string;
  bgColor?: string;
  delay?: number;
}

export default function AnnouncementItem({
  type,
  date,
  title,
  bgColor = 'theme-300',
  delay = 0,
}: AnnouncementItemProps) {
  return (
    <section
      className="p-4 rounded-3xl bg-white/70 shadow-md hover:shadow-lg transition-shadow scroll-animate scroll-fade-up"
      style={{ animationDelay: `${delay}s` }}>
      <div className="flex items-center gap-4">
        <span
          className={`text-sm font-bold text-white rounded-md px-3 py-1 ${
            bgColor === 'theme-300'
              ? 'bg-theme-300'
              : bgColor === '#ff9d5b'
              ? 'bg-[#ff9d5b]'
              : 'bg-[#a5e4ff]'
          }`}
        >
          {type}
        </span>
        <p className="text-sm text-text-light">{date}</p>
      </div>
      <p className="block mt-2 text-lg font-bold text-text-main">{title}</p>
    </section>
  );
}
