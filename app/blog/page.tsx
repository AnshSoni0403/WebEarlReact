import { Metadata } from 'next';
import BlogPage from '@/components/pages/blog-page';

export const metadata: Metadata = {
  title: 'Blog - WebEarl',
  description: 'Read our latest blog posts about technology, development, and industry insights',
};

export default function Blog() {
  return <BlogPage />;
}
