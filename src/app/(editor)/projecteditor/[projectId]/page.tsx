// app/projecteditor/[projectId]/page.tsx
'use client';

import ProjectEditor from '@/app/components/ProjectEditor/ProjectEditor';
import { useParams } from 'next/navigation';

export default function ProjectEditorPage() {
  const params = useParams();
  const projectId = params.projectId as string;

  return <ProjectEditor />;
}