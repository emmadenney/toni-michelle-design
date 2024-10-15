import { getProject } from "../../lib/api";
import { draftMode } from "next/headers";
import IllustrationsList from "@/Components/illustrations-list";
import FineArtList from "@/Components/fine-art-list";
import GraphicDesignsList from "@/Components/graphic-designs-list";

export default async function Portfolio() {
  const { isEnabled } = draftMode();
  const illustrationsProject = await getProject("illustrations", isEnabled);
  const fineArtProject = await getProject("fine-art", isEnabled);
  const graphicDesignsProject = await getProject("fine-art", isEnabled);

  const illustrationsCollection = illustrationsProject.projectsCollection;
  const fineArtCollection = fineArtProject.projectsCollection;
  const graphicDesignsCollection = graphicDesignsProject.projectsCollection;

  return (
    <main id="top-of-page">
      <div className="illustrations-section">
        <div className="illustrations-heading main-font">ILLUSTRATIONS</div>
        {illustrationsCollection.items.length == 0 ? (
          <p>No projects found</p>
        ) : (
          <div className="illustrations-container">
            <IllustrationsList illustrations={illustrationsCollection.items} />
          </div>
        )}
      </div>
      <div className="fine-art-section">
        <div className="fine-art-heading main-font">FINE ART</div>
        {fineArtCollection.items.length == 0 ? (
          <p>No projects found</p>
        ) : (
          <div className="fine-art-container">
            {" "}
            <FineArtList fineArt={fineArtCollection.items} />
          </div>
        )}
      </div>
      <div className="graphic-design-section">
        <div className="graphic-design-heading main-font">GRAPHIC DESIGN</div>
        {graphicDesignsCollection.items.length == 0 ? (
          <p>No projects found</p>
        ) : (
          <div className="graphic-design-container">
            <GraphicDesignsList
              graphicDesigns={graphicDesignsCollection.items}
            />
          </div>
        )}
      </div>
    </main>
  );
}
