import './globals.css'

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

// So, that's why we don't have the head section here,

// simply because all the content that goes into head

// is set with that metadata,

// or automatically behind the scenes by NextJS.

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
