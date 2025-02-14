import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import BlogPostList from "@site/src/components/BlogPostList"

function BlogListPage(props) {
  const { siteConfig } = useDocusaurusContext()
  const { metadata, items } = props

  return (
    <Layout title={`Blog - ${siteConfig.title}`} description="TechBlog Posts">
      <main>
        <div className="container margin-vert--xl">
          <h1>TechBlog Posts</h1>
          <BlogPostList posts={items} />
        </div>
      </main>
    </Layout>
  )
}

export default BlogListPage

