import EditorCanvas from "./EditorCanvas";

export default async function EditorPage({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;
  return <EditorCanvas projectId={projectId} />;
}