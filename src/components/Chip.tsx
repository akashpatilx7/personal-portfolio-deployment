export default function Chip({ text }: { text: string }) {
  return (
    <div className='rounded-full bg-primary/10 text-primary font-medium border border-primary/25 px-3 py-0.5 text-xs md:text-sm tracking-wide transition-colors'>
      {text}
    </div>
  );
}
