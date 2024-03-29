import Link from "next/link"
import FullPost from "../../../components/organisms/FullPost"
import markdownToHtml, { getPostBySlug } from "../../../lib/api"

type Params = {
  params: {
    slug: string
  }
}

export default async function Post({ params }: Params) {
  const post: any = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ])
  const content = await markdownToHtml(post.content || "")

  return (
    <main className="container mx-auto">
      <div className="underline text-xl text-end">
        <Link href="/writing">BACK</Link>
      </div>

      <article className="mt-4 mb-32 lg:grid grid-cols-2 gap-x-8">
        <FullPost
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          content={content}
        />
      </article>
    </main>
  )
}
