export default function MarketingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center space-y-6">
      <h1 className="text-5xl font-extrabold tracking-tight">SoloSpace</h1>
      <p className="text-xl text-muted-foreground max-w-2xl">
        The ultimate dashboard for freelancers and solo entrepreneurs. 
        Manage clients, projects, and invoices all in one place.
      </p>
      <div className="flex gap-4">
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium">Get Started</button>
          <button className="px-6 py-3 border rounded-lg font-medium">Learn More</button>
      </div>
    </div>
  );
}
