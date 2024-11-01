import { getProject } from "../../lib/api";
import { draftMode } from "next/headers";
// import IllustrationsList from "@/Components/illustrations-list";
// import FineArtList from "@/Components/fine-art-list";
// import GraphicDesignsList from "@/Components/graphic-designs-list";
import ImageCarousel from "@/Components/image-carousel";
import { useEffect } from "react";

export default async function Portfolio() {
  const { isEnabled } = draftMode();

  const illustrationsProject = await getProject("illustrations", isEnabled);
  const fineArtProject = await getProject("fine-art", isEnabled);
  const graphicDesignsProject = await getProject("graphic-designs", isEnabled);

  const illustrationsCollection = illustrationsProject.projectsCollection;
  const fineArtCollection = fineArtProject.projectsCollection;
  const graphicDesignsCollection = graphicDesignsProject.projectsCollection;

  return (
    <main id="top-of-page" className="portfolio-page">
      <div className="portfolio-section">
        <div className="portfolio-heading main-font">ILLUSTRATIONS</div>
        {illustrationsCollection.items.length == 0 ? (
          <p>No projects found</p>
        ) : (
          <ImageCarousel projects={illustrationsCollection.items} />
        )}
      </div>
      ;
      <div className="portfolio-section">
        <div className="portfolio-heading main-font">GRAPHIC DESIGN</div>
        {graphicDesignsCollection.items.length == 0 ? (
          <p>No projects found</p>
        ) : (
          <ImageCarousel projects={graphicDesignsCollection.items} />
        )}
      </div>
      <div className="portfolio-section">
        <div className="portfolio-heading main-font">FINE ART</div>
        {fineArtCollection.items.length == 0 ? (
          <p>No projects found</p>
        ) : (
          <ImageCarousel projects={fineArtCollection.items} />
        )}
      </div>
    </main>
  );
}
