import ComplexComponent from "./complex-component";

export const dynamic = "force-dynamic";

export default async function ComplexPage() {
  console.log("rendering", Date.now());

  const currentTime = new Date().toLocaleString();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Last rendered at:</h1>
      <p className="text-lg font-mono px-4 py-2 rounded">{currentTime}</p>
      <ComplexComponent />
    </main>
  );
}
