import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
	console.log('middleware inside app ran');

	return NextResponse.next();
}
