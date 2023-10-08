import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-screen justify-center items-center text-4xl font-bold flex flex-col gap-10">
      <p>You are in Narnia.</p>
      <Link
        className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-xl"
        href="/"
      >
        Climb out of the Lion, the Witch, and the Wardrobe
      </Link>
    </div>
  );
}
