export default function BackgroundGlow() {
  return (
    <>
      <div className="fixed top-[-200px] left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[180px]" />

      <div className="fixed bottom-[-200px] left-[-100px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="fixed bottom-[-150px] right-[-100px] h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[160px]" />
    </>
  );
}