import { NextResponse } from 'next/server';
import blogsData from '../../../data/blogs.json' assert { type: 'json' };

export async function GET() {
  return NextResponse.json(blogsData);
}