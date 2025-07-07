export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav>Catergorias</nav>
      {children}
    </div>
  );
}