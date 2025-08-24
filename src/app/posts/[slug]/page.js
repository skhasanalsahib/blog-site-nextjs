import FeedbackButtons from "@/components/FeedbackButtons/FeedbackButtons";
import AuthorAvatar from "@/components/ui/AuthorAvatar";
import styles from "./post.module.css";

const SinglePostPage = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);

  // dummy post body
  const postBody = `<h1>Designing for the Web: Complete Guide</h1>

<p><strong>Short summary:</strong> This long example demonstrates almost every Quill feature you may store: rich text, lists, tables, images, embeds, code, formulas and more.</p>

<h2>Formatting examples</h2>
<p><em>Italic</em>, <strong>Bold</strong>, <u>Underline</u>, <s>Strikethrough</s>, <code>inline code</code>.</p>
<p style="color:#1f2937; background:#fff3bf">Text with color/background and a <span style="font-size:18px">larger font-size</span>.</p>

<h2>Block elements</h2>
<blockquote>
  <p>“Good design is obvious. Great design is transparent.” — Joe Sparano</p>
</blockquote>

<hr />

<h2>Lists</h2>
<ol>
  <li>First ordered item</li>
  <li>Second ordered item
    <ol>
      <li>Nested ordered</li>
    </ol>
  </li>
  <li>Third ordered item</li>
</ol>

<ul>
  <li>Bullet item</li>
  <li>Checklist example (rendered by checklist module)</li>
</ul>

<h2>Code block</h2>
<pre><code class="language-js">// JavaScript example
function greet(name) {
  "console.log(\`Hello, \${name}!\`)";
}
greet('World');</code></pre>

<h2>Table</h2>
<table>
  <thead><tr><th>Feature</th><th>Supported</th><th>Supported</th><th>Supported</th></tr></thead>
  <tbody>
  <tr><td>Images</td><td>Yes</td></tr>
  <tr><td>Video embeds</td><td>Yes</td></tr>
  <tr><td>Images</td><td>Yes</td></tr>
  <tr><td>Video embeds</td><td>Yes</td></tr>
  </tbody>
</table>

<h2>Images</h2>
<p>Remote image (recommended):</p>
<p><img src="https://placehold.co/900x300" alt="Featured image" /></p>

<p>Inline/embedded image (base64) — not recommended for DB unless small:</p>
<p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..." alt="inline small" /></p>

<h2>Video embed</h2>
<p>Embedded YouTube (Quill stores an embed reference):</p>
<p><iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video" frameborder="0" allowfullscreen></iframe></p>
<hr>
<h2>Math / Formula</h2>
<p>Inline formula: <span class="ql-formula">E = mc^2</span></p>
<p>Block formula:</p>
<p class="ql-formula">\\int_0^\\infty e^{-x} dx = 1</p>

<h2>Links and anchors</h2>
<p>Read more on <a href="https://example.com">Example.com</a> or email <a href="mailto:hello@example.com">hello@example.com</a>.</p>

<h2>Final notes</h2>
<p>Thanks for reading — publish, share and iterate.</p>`;

  return (
    <section>
      <div className="container !max-w-[800px]">
        <article>
          {/* Post Title */}
          <h1 className="mb-8">
            This is the heading of the post. Or you could say title{" "}
          </h1>

          <div className="flex flex-col-reverse md:gap-4 gap-2 md:flex-row md:items-center">
            <AuthorAvatar />
            <span className="dot-divider hidden md:block"></span>
            <p className="text-sm m-0">24 Aug 2025</p>
          </div>

          {/* Post Body */}
          {/* Have to add purify */}
          <div
            className={`prose lg:prose-lg dark:prose-invert ${styles.postBody}`}
            dangerouslySetInnerHTML={{ __html: postBody }}
          ></div>

          {/* Like Dislike */}
          <div className="border-y border-neutral-500 mt-4">
            <FeedbackButtons />
          </div>
        </article>
      </div>
    </section>
  );
};

export default SinglePostPage;
