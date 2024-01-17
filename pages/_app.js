import '@/styles/globals.css'
import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";
import { GoogleOAuthProvider } from '@react-oauth/google';
import baseUrl from "../utils/baseUrl";
import { redirectUser } from "../utils/authUser";
export default function MyApp({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}
MyApp.getInitialProps = async ({ Component, ctx }) => {
  const { token } = parseCookies(ctx);
  let pageProps = {};
  const protectedRoutes =
    ctx.pathname === "/" ||
    ctx.pathname === "/mapping" ||
    ctx.pathname === "/tasks"||
    ctx.pathname === "/posts"||
    ctx.pathname === "/post"||
    ctx.pathname === "/profile"||
    ctx.pathname === "/hello"||
    ctx.pathname === "/donation"||
    ctx.pathname === "/main"||
    ctx.pathname === "/posttask"||
    ctx.pathname === "/about"||
    ctx.pathname === "/postNewtask";

    !protectedRoutes && redirectUser(ctx, "/");
 if(token){
    try {
      
      const res = await axios.get(`${baseUrl}/api/user`, {
        headers: { Authorization: token },
      
      });

      const { user } = res.data;
      
      pageProps.user = user;
  
    } catch (error) {
      destroyCookie(ctx, "token");
   
    
  }
}

  return { pageProps };
};
