export function PageBorders() {
  return (
    <>
      <div className="hidden md:flex fixed top-0 left-16 bottom-0 w-px bg-neutral-800/75 pointer-events-none z-10" />
      <div className="hidden md:flex fixed top-0 right-16 bottom-0 w-px bg-neutral-800/75 pointer-events-none z-10" />
    </>
  );
}
