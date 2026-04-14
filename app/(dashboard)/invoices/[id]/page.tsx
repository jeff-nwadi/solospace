export default function InvoiceDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Invoice Detail</h1>
      <p className="text-muted-foreground">Viewing invoice: {params.id}</p>
    </div>
  );
}
