// our-domain.com/news
import Link from "next/link";

function NewPage() {
  return (
    <>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link href="/news/fsfsfsf">Next.js is a great framework</Link>
        </li>
        <li>
          <Link href="/news/something">Something</Link>
        </li>
      </ul>
    </>
  );
}

export default NewPage;
