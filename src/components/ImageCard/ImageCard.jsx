export default function ImageCard({ img }) {
  return (
    <div>
      <img src={img.urls.small} alt={img.description} />
    </div>
  );
}
