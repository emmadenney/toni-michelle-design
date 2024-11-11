import Illustrations from "@/Components/illustrations";
import GraphicDesigns from "@/Components/graphic-designs";
import FineArt from "@/Components/fine-art";

export default async function Portfolio() {
  return (
    <main id="top-of-page" className="portfolio-page">
      <div className="portfolio-section" id="illustrations">
        <div className="portfolio-heading main-font">ILLUSTRATIONS</div>
        <Illustrations />
      </div>
      <div className="portfolio-section" id="fine-art">
        <div className="portfolio-heading main-font">FINE ART</div>
        <FineArt />
      </div>
      <div className="portfolio-section" id="graphic-designs">
        <div className="portfolio-heading main-font">GRAPHIC DESIGN</div>
        <GraphicDesigns />
      </div>
    </main>
  );
}
