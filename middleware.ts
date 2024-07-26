import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(request: NextRequestWithAuth){
        console.log(request.nextUrl.pathname)
        console.log(request.nextauth?.token)

        if(request.nextUrl.pathname.startsWith('/orders') && request.nextauth.token?.role !== 'admin'){
            return NextResponse.rewrite(
                new URL('/denied', request.url)
            )

        }
    },
    {
        callbacks: {
            authorized: ({token}) => token?.role === 'admin'
        },
    }
)

export const config = {matcher: ['/orders']}