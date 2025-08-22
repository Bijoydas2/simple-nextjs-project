// layout.jsx
export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist",
};

export default function NotFoundLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        {children}
      </body>
    </html>
  );
}
