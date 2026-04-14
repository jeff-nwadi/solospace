export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Project Detail</h1>
      <p className="text-muted-foreground">Viewing project: {params.id}</p>
    </div>
  );
}
