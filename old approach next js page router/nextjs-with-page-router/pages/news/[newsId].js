// our-domain.com/news/[newsId].js
import { useRouter } from 'next/router';

function NewsArticle() {
  const router = useRouter();
  const { newsId } = router.query;

  return <h1>News Article: {newsId}</h1>;
}

export default NewsArticle;
