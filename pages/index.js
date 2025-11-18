import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div>
      <h1>OEMAlert</h1>

      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
