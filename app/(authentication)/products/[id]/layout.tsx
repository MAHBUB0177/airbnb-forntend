
export default function ProductDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <h2 className="flex justify-center">this is features product</h2>
    </>
  );
}
