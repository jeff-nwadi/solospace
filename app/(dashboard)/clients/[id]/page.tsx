export default function ClientDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Client Detail</h1>
      <p className="text-muted-foreground">Viewing client: {params.id}</p>
    </div>
  );
}
