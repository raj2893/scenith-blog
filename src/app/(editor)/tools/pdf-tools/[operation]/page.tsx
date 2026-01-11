import PDFToolsWorkspace from "./PDFToolsWorkspace";

// This is a Server Component
export default async function PDFOperationPage({
  params,
}: {
  params: Promise<{ operation: string }>;
}) {
  const { operation } = await params; // ← await the promise

  // Now safely pass the resolved string to the client component
  return <PDFToolsWorkspace operation={operation} />;
}