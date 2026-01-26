"use client";

import { ReactNode } from 'react';

interface ToolsLayoutProps {
  children: ReactNode;
}

export default function ToolsLayout({ children }: ToolsLayoutProps) {
  return (
    <>
      {children}
    </>
  );
}