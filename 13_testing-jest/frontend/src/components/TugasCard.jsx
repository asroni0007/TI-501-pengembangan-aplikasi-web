function TugasCard({ judul, selesai }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 12, marginBottom: 8 }}>
      <h3>{judul}</h3>
      <p>Status: {selesai ? 'Selesai ✅' : 'Belum selesai ⏳'}</p>
    </div>
  );
}
export default TugasCard;
