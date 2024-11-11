import { getProject } from "../../lib/api";
import ImageCarousel from "@/Components/image-carousel";

export default async function GraphicDesigns() {
  const graphicDesignsProject = await getProject("graphic-designs");
  const graphicDesignsCollection = graphicDesignsProject.projectsCollection;

  return (
    <>
      {graphicDesignsCollection.items.length == 0 ? (
        <p>No projects found</p>
      ) : (
        <ImageCarousel
          projects={graphicDesignsCollection.items}
          hasPurpleBg={false}
        />
      )}
    </>
  );
}
