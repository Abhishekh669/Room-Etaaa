import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";

async function handleGoogleSignIn(){
  "use server"
  await signIn("google",{
    redirectTo : "/ghar/rooms"
  })
  }

export default function AuthCard() {
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Sign in
        </CardTitle>
        <CardDescription className="text-center">
          Choose your preferred sign in method
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
      <form action={handleGoogleSignIn}>
          <Button
            className="w-full cursor-pointer"
            variant="outline"
            type="submit"
          >
            <FcGoogle className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>

          </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="text-sm text-center text-muted-foreground mt-2">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </div>
      </CardFooter>
    </Card>
  );
}