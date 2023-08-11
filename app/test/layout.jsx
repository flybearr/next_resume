export default function RootLayout({ children, menu }) {
  return (
    <div className="bg-emerald-400 w-50 h-96">
      <div className="w-full">{children}</div>
      <div className="w-full">{menu}</div>
    </div>
  );
}
