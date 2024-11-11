import { getProject } from "../../lib/api";
import ImageCarousel from "@/Components/image-carousel";

export default async function Illustrations() {
  const illustrationsProject = await getProject("illustrations");
  const illustrationsCollection = illustrationsProject.projectsCollection;

  return (
    <>
      {illustrationsCollection.items.length == 0 ? (
        <p>No projects found</p>
      ) : (
        <ImageCarousel
          projects={illustrationsCollection.items}
          hasPurpleBg={false}
        />
      )}
    </>
  );
}
