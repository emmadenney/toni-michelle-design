import { getProject } from "../../lib/api";
import ImageCarousel from "@/Components/image-carousel";

export default async function FineArt() {
  const fineArtProject = await getProject("fine-art");
  const fineArtCollection = fineArtProject.projectsCollection;

  return (
    <>
      {fineArtCollection.items.length == 0 ? (
        <p>No projects found</p>
      ) : (
        <ImageCarousel projects={fineArtCollection.items} hasPurpleBg={true} />
      )}
    </>
  );
}
