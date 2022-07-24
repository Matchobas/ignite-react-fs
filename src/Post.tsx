interface PostProps {
  author: string;
  content: string;
}

export function Post({ author, content }: PostProps) {
  return (
    <>
      <h1>{author}</h1>
      <p>{content}</p>
    </>
  )
}