export default function Layout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <main>
      <nav>Catergorias</nav>
      {children}
    </main>
  );
}