export default function BackgroundGlow() {
  return (
    <>
      <div className="pointer-events-none fixed top-[-200px] left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-#00559a-500/20 blur-[180px]" />

      <div className="pointer-events-none fixed bottom-[-200px] left-[-100px] h-[400px] w-[400px] rounded-full bg-#00559a-500/10 blur-[180px]" />

      <div className="pointer-events-none fixed bottom-[-150px] right-[-100px] h-[300px] w-[300px] rounded-full bg-#00559a-500/10 blur-[160px]" />
    </>
  );
}