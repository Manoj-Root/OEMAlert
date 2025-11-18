import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>OEMAlert</h1>

      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
        <p>You are logged in.</p>
      </SignedIn>
    </div>
  );
}
