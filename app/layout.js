export const metadata = {
  title: 'ICRA 2026 (Unofficial Demo)',
  description: 'Example site for ICRA 2026 with deadlines and workshops.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Inter, system-ui, Arial, sans-serif', background: '#0b1020', color: '#f2f4f8' }}>
        {children}
      </body>
    </html>
  );
}
