const fs = require('fs');

const projectsPath = 'c:\\Projects\\FreelancingProject\\AutomativeRestoration\\src\\data\\projects.json';
const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));
const index = projects.findIndex(p => p.slug === 'commission-014');

const c14 = projects[index];

c14.summary = "A full concourse-level restoration emphasizing mechanical purity and patina preservation, representing an unbroken chain of horological provenance and obsessive mechanical re-engineering.";

const p1 = "The story of Commission 014 begins long before it arrived at Atelier North Motor Works. Originally delivered in April 1973 to an esteemed Swiss horologist in Geneva, this 1973 Porsche 911 Carrera RS was ordered in the vivid hue of Light Yellow (117) with the highly desirable touring package. For the first sixteen years of its life, it was driven with the exact precision one might expect from a master watchmaker. The original documentation, bound in a weathered leather portfolio, reveals a fanatical devotion to maintenance. Every valve adjustment, every oil change, every microscopic adjustment to the mechanical fuel injection system was logged with the exact date, mileage, and atmospheric pressure. This wasn't merely a vehicle; it was an extension of its owner's obsession with mechanical perfection. The provenance of this chassis is virtually unassailable, providing a flawless foundation for what would become our most intensive restoration to date. The unbroken chain of ownership and original Swiss registration documents confirmed its elite status among the dwindling population of matching-numbers RS models. To hold the original keys and peruse the handwritten logs is to step back into a bygone era of analog motoring, where the connection between man and machine was direct, visceral, and unapologetically raw.";
const p1_2 = "As the decades passed, however, the car eventually fell out of regular use. In 1989, it was carefully placed into a temperature-controlled hangar on the outskirts of Geneva, entering a state of suspended animation. It remained there, untouched and unseen, for over thirty years. The lubricants settled, the rubber perished, but the soul of the machine remained entirely intact, waiting for the right custodian to reawaken its spirit.";

const p2 = "Our initial discovery of the vehicle was serendipitous. A quiet inquiry through our European network led our lead acquisition specialist to the hangar in Geneva. Unlocking the doors revealed a time capsule: beneath a thick layer of dust lay Commission 014, sitting exactly as it had been parked three decades prior. The air smelled of aged leatherette, evaporated high-octane fuel, and the distinct, irreplaceable scent of Stuttgart engineering. The tires, originally fitted in the late eighties, were flat and dry-rotted, yet the structural integrity of the chassis appeared remarkably sound. The Light Yellow paint, obscured by time, hinted at the vibrant life it once lived on the Alpine passes. The significance of the find cannot be overstated. A completely unmodified, unrestored, matching-numbers Carrera RS is the holy grail of air-cooled Porsche collecting. To find one with such a meticulously documented early life is a once-in-a-generation event. We knew immediately that this vehicle required a sympathetic touch—a restoration that would not erase its history, but rather, honor it. The transport from Geneva to our North American atelier was executed with the utmost care, utilizing specialized climate-controlled logistics to ensure no further degradation occurred during transit.";

const p3 = "Upon arrival at our atelier, the vehicle underwent a forensic condition assessment, a process spanning over 200 hours. Every square inch of the chassis, powertrain, and interior was cataloged, photographed, and measured. We utilized ultrasonic thickness gauges to determine the exact state of the sheet metal beneath the original single-stage enamel. While the Swiss climate had been relatively kind, thirty years of stagnation had inevitably taken a toll. We identified isolated areas of galvanic corrosion near the suspension pickup points and minor galvanic oxidation in the longitudinal rocker panels. The magnesium engine case, a known Achilles heel of the 2.7 RS, exhibited typical signs of age-related porosity, requiring specialized intervention. The wiring harness had become brittle, the insulation flaking away at the slightest touch. Yet, the core of the vehicle—the fundamental architecture that makes an RS so special—was gloriously untainted. There were no signs of accident damage, no hasty repairs, and no aftermarket modifications. It was a blank, albeit dusty, canvas. Our assessment concluded that while a full mechanical rebuild was mandatory for safety and performance, the exterior patina and interior character could be largely preserved, creating a unique juxtaposition of flawless mechanical function and visible history.";

const p4 = "The metal reconstruction phase was approached with surgical precision. To address the localized corrosion without compromising the structural integrity or the original factory welds, we employed period-correct fabrication techniques. The chassis was placed on a specialized Cellette bench, ensuring zero distortion during the repair process. The affected areas in the longitudinals were carefully excised, and replacement panels were fabricated in-house using the exact gauge of steel utilized by the factory in 1973. We utilized resistance spot welders configured to replicate the original factory weld spacing and penetration depth. Every repair was meticulously lead-loaded, a time-consuming art that avoids the use of modern plastic body fillers entirely. This ensures that the acoustic resonance of the chassis remains true to the original design, providing the exact tactile feedback intended by the engineers in Weissach. The front suspension pan, a common area for battery acid damage, was replaced using an OEM Porsche stamping, seamlessly integrated into the existing structure. The goal was not merely to repair the metal, but to render the repairs completely invisible to even the most discerning concourse judge. Hundreds of hours were dedicated to planishing and metal finishing, ensuring that the repaired sections blended flawlessly with the surrounding, original steel.";
const p4_2 = "Following the structural repairs, the bare metal areas were treated with a specialized epoxy primer to provide long-term corrosion resistance, bridging the gap between vintage authenticity and modern longevity.";

const p5 = "The chassis and suspension represent the dynamic interface between the vehicle and the road. For Commission 014, we sought to retain the analog purity of the 1973 setup while subtly enhancing compliance and feedback. The original torsion bars, sway bars, and trailing arms were removed, media blasted, and subjected to crack-testing using dye penetrant inspection. Once cleared, they were refinished in the correct shade of satin black chassis paint. The original Koni shock absorbers were sent to a specialized facility for a complete internal rebuild, utilizing modern valving technology concealed within the period-correct housings. This provides superior damping characteristics without altering the visual authenticity of the undercarriage. The suspension bushings were upgraded from the factory rubber to a proprietary polyurethane blend, specifically formulated to reduce deflection under high cornering loads while avoiding the harshness typically associated with track-focused compounds. The steering rack was completely disassembled, the internal gearing inspected, and reassembled with aerospace-grade lubricants. The result is a steering feel that is telepathically direct, transmitting every nuance of the road surface directly to the driver's palms. The brake calipers were meticulously rebuilt, retaining their original anodized finish, and fitted with modern friction materials that offer superior bite and fade resistance.";

const p6 = "The powertrain rebuild was arguably the most intensive aspect of Commission 014. The matching-numbers Type 911/83 2.7-liter flat-six was entirely dismantled. The magnesium crankcase was sent out for ultrasonic cleaning, align-boring, and the installation of steel case savers—a mandatory reliability upgrade for these engines. The original crankshaft was magnafluxed, polished, and micro-polished, then dynamically balanced alongside the connecting rods and pistons to a tolerance of less than 0.5 grams. We sourced genuine Mahle Nikasil cylinders and forged pistons, maintaining the original 8.5:1 compression ratio to ensure compatibility with modern fuels. The cylinder heads were completely rebuilt with new guides, valves, and performance springs. The mechanical fuel injection (MFI) system, the crown jewel of the RS engine, was entrusted to one of the few remaining masters of the Bosch system. The pump was recalibrated on a specialized flow bench to match the original factory delivery curves perfectly. The entire assembly was meticulously detailed; every fastener was replated in correct yellow zinc or black oxide, the fiberglass engine shroud was painstakingly restored, and the original decals were perfectly reproduced. When the engine was finally fired on our dynamometer, it produced a healthy 215 horsepower, exceeding the original factory claims while delivering an intoxicating, razor-sharp throttle response.";

const p7 = "Interior preservation is a delicate balancing act. Our objective was to retain the authentic smells, textures, and visual character of the original cabin while ensuring it was comfortable and usable. The original Pepita cloth (houndstooth) seat inserts were incredibly fragile. Rather than discarding them, we carefully removed them, treated the fibers with a specialized conservation fluid to halt further deterioration, and reintegrated them into the newly bolstered sport seats. The bolsters themselves were retrimmed in correct-grain black leatherette sourced directly from Germany, perfectly matching the weight and sheen of the original material. The original dashboard, which had suffered minor sun damage, was stabilized using advanced polymer resins, preventing further cracking while retaining its historical patina. The headliner was carefully cleaned and re-tensioned, rather than replaced, preserving the subtle discoloration above the driver's side window. The tactile points—the steering wheel and shift knob—were gently re-dyed and conditioned, retaining the smooth, polished surface created by thousands of hours of driving. The gauges were sent out for a mechanical rebuild, the faces cleaned but not repainted, leaving the subtle yellowing of the numerals intact. Sitting in the cabin of Commission 014 is not like sitting in a new car; it is an immersive historical experience.";

const p8 = "The surface development of Commission 014 was our most controversial, yet ultimately rewarding, decision. Most restorations would dictate a bare-metal respray. However, the original single-stage Light Yellow paint possessed a depth, character, and history that modern clearcoats simply cannot replicate. We embarked on a painstaking preservation process. The paint was carefully decontaminated using specialized clay and pH-neutral solvents. We then performed a microscopic, multi-stage correction process, utilizing ultra-fine abrasives to remove oxidation and swirl marks without burning through the incredibly thin original finish. In areas where the paint had worn through to the primer—specifically around the door handles, the leading edge of the hood, and the rear flares—we chose to leave the history visible. We sealed the entire body using a cutting-edge ceramic polymer coating, which locks in the patina and provides unparalleled UV protection. The result is a finish that gleams with a deep, historical luster. It is imperfect, yet entirely flawless in its authenticity. It wears its scars with pride, telling the story of its early life on the Alpine roads. The original brightwork, including the window frames and door handles, was carefully hand-polished, removing tarnish while leaving the microscopic scratches that attest to its age.";

const p9 = "Final assembly is the crucible where thousands of hours of disparate labor come together. It requires immense patience and an encyclopedic knowledge of the vehicle's architecture. Every component, from the meticulously rebuilt engine to the preserved interior trim, was mated to the chassis with obsessive care. The wiring harness, fabricated in-house to exact factory specifications utilizing modern, high-temperature wire concealed in correct braided loom, was routed precisely as it was in 1973. The mating of the powertrain to the chassis is a solemn event in our atelier, a marriage of mechanical perfection and structural integrity. The transaxle, a fully rebuilt Type 915/08, was mated to the engine, and the entire assembly was lifted into the chassis. The suspension components were torqued to spec under load to prevent bushing bind. The oil lines, fuel lines, and brake lines were routed with geometric precision, utilizing the correct Adel clamps and hardware. As the final exterior trim pieces were affixed and the iconic 'Carrera RS' decals were carefully applied to the flanks, the true majesty of Commission 014 was revealed. It was no longer a collection of parts; it was a cohesive, breathing machine, ready to reclaim its place on the road.";

const p10 = "A museum-grade restoration is worthless if the vehicle cannot perform as intended. Road validation is the final, critical step in our process. Commission 014 was subjected to a rigorous 500-mile shakedown protocol. We started with low-speed runs to seat the piston rings and verify fluid integrity. Once the engine was broken in, we progressively increased the loads, exploring the upper reaches of the rev range and the limits of the chassis dynamics. The MFI system required minute adjustments to achieve the perfect idle and transition under part-throttle. The suspension geometry was meticulously fine-tuned on our alignment rack, dialing in the precise camber, caster, and toe settings required for optimal turn-in response and high-speed stability. The car was driven on varied surfaces—from smooth highways to broken canyon roads—to ensure the suspension damping was compliant yet controlled. The brakes were bedded in, the shifting action of the 915 transaxle was adjusted for maximum precision, and every gauge and switch was verified for functionality. The culmination of the validation process was a high-speed run at a private facility, where the RS effortlessly reached its original top speed, tracking perfectly straight and delivering the spine-tingling howl that only a mechanically injected air-cooled flat-six can produce.";

const p11 = "The delivery of Commission 014 was an emotional culmination of a 16-month journey. The vehicle was presented to its new custodian at our atelier, illuminated under specialized detailing lights to highlight the stunning preserved patina and the immaculate mechanical details. Accompanying the vehicle was a comprehensive restoration dossier—a leather-bound volume documenting every hour of labor, every replaced component, and the complete photographic history of the project from the dusty hangar in Geneva to the final polish. The dossier includes dyno sheets, alignment printouts, and metallurgical reports from the fabrication phase. We spent hours with the new owner, walking them through the starting procedure of the MFI engine, explaining the nuances of the 915 gearbox, and detailing the specific care requirements for the preserved exterior. When the key was finally turned and the 2.7-liter engine barked into life, filling the atelier with its unmistakable mechanical symphony, the true value of the undertaking was realized. This was not merely the transfer of an asset; it was the passing of a torch. Commission 014 was ready for its next chapter, engineered to provide decades of analog driving pleasure.";

const p12 = "The legacy of Commission 014 extends far beyond our atelier walls. It stands as a testament to a specific philosophy of restoration—one that prioritizes historical integrity and mechanical purity over the sterile perfection of a total concourse rebuild. It challenges the notion that an old car must be made 'new' again. By preserving the patina, the interior wear, and the tactile history of the vehicle, while completely re-engineering the mechanicals to zero-hour tolerances, we have created a machine that is deeply respectful of its past yet entirely prepared for its future. It is a rolling archive, a tangible link to a pivotal moment in automotive history. Commission 014 has redefined our approach to early 911s, proving that sometimes, the most profound restorations are those that know exactly when to stop. It represents a paradigm shift in the collector market, where authenticity and operational excellence are valued above flawless, artificial cosmetics. As it carves its way through modern traffic, a blur of Light Yellow and screaming magnesium, it serves as a visceral reminder that some legends are meant to be driven, not merely displayed.";

c14.sections = [
  {
    heading: "Provenance",
    text: p1 + "\n\n" + p1_2,
    image: "/images/commissions/commission-014/provenance.jpg",
    archivalCaption: "Original Swiss registration documents, Geneva, 1973.",
    pullQuote: "Every valve adjustment, every oil change... logged with the exact precision one might expect from a master watchmaker."
  },
  {
    heading: "Discovery",
    text: p2,
    image: "/images/commissions/commission-014/archive-garage.jpg",
    archivalCaption: "As discovered in a temperature-controlled hangar, suspended in time since 1989.",
    timeline: [
      { date: "April 1973", event: "Original delivery to first owner in Geneva." },
      { date: "October 1989", event: "Placed into deep storage." },
      { date: "March 2025", event: "Rediscovered by Atelier North Motor Works." }
    ]
  },
  {
    heading: "Condition Assessment",
    text: p3,
    image: "/images/commissions/commission-014/teardown.jpg",
    archivalCaption: "Forensic teardown and measurement of the chassis architecture.",
    pullQuote: "It was a blank, albeit dusty, canvas. The core of the vehicle was gloriously untainted."
  },
  {
    heading: "Metal Reconstruction",
    text: p4 + "\n\n" + p4_2,
    image: "/images/commissions/commission-014/fabrication.jpg",
    archivalCaption: "Period-correct spot welding and lead-loading on the longitudinal rocker panels.",
    timeline: [
      { date: "Month 2", event: "Chassis mounted to Cellette bench." },
      { date: "Month 4", event: "Structural metalwork and lead-loading completed." },
      { date: "Month 5", event: "Epoxy primer and corrosion stabilization applied." }
    ]
  },
  {
    heading: "Chassis and Suspension",
    text: p5,
    image: "/images/commissions/commission-014/metalwork-detail.jpg",
    archivalCaption: "Refinished trailing arms and upgraded Koni dampers installed.",
    pullQuote: "A steering feel that is telepathically direct, transmitting every nuance of the road surface."
  },
  {
    heading: "Powertrain Rebuild",
    text: p6,
    image: "/images/commissions/commission-014/engine-rebuild.jpg",
    archivalCaption: "The 2.7-liter Type 911/83 flat-six, blueprinted and dynamically balanced.",
    timeline: [
      { date: "Month 6", event: "Magnesium case align-bored and sleeved." },
      { date: "Month 8", event: "MFI pump recalibrated to factory delivery curves." },
      { date: "Month 9", event: "Engine dyno validation: 215 horsepower." }
    ]
  },
  {
    heading: "Interior Preservation",
    text: p7,
    image: "/images/commissions/commission-014/dashboard-restoration.jpg",
    archivalCaption: "Preserved original gauges and re-tensioned headliner in the cabin.",
    pullQuote: "Sitting in the cabin is not like sitting in a new car; it is an immersive historical experience."
  },
  {
    heading: "Surface Development",
    text: p8,
    image: "/images/commissions/commission-014/primer-stage.jpg",
    archivalCaption: "Multi-stage paint correction and ceramic stabilization of the original single-stage enamel.",
    timeline: [
      { date: "Month 10", event: "Decontamination and microscopic paint correction." },
      { date: "Month 11", event: "Ceramic polymer sealing applied to lock in the patina." }
    ]
  },
  {
    heading: "Final Assembly",
    text: p9,
    image: "/images/commissions/commission-014/inspection-polish.jpg",
    archivalCaption: "The meticulous mating of the powertrain to the restored chassis.",
    pullQuote: "It was no longer a collection of parts; it was a cohesive, breathing machine."
  },
  {
    heading: "Road Validation",
    text: p10,
    image: "/images/commissions/commission-014/beauty-detail.jpg",
    archivalCaption: "Suspension geometry dialing and high-speed shakedown on varied surfaces.",
    timeline: [
      { date: "Month 14", event: "Initial 50-mile low-speed shakedown." },
      { date: "Month 15", event: "Suspension alignment and MFI fine-tuning." },
      { date: "Month 15.5", event: "High-speed validation and dynamic sign-off." }
    ]
  },
  {
    heading: "Delivery",
    text: p11,
    image: "/images/commissions/commission-014/delivery.jpg",
    archivalCaption: "Presentation to the new custodian under specialized detailing lights.",
    pullQuote: "This was not merely the transfer of an asset; it was the passing of a torch."
  },
  {
    heading: "Legacy",
    text: p12,
    image: "/images/commissions/commission-014/final-reveal.jpg",
    archivalCaption: "Commission 014 standing as a rolling archive of mechanical purity.",
    timeline: [
      { date: "Month 16", event: "Project completion and delivery." },
      { date: "Ongoing", event: "Preserved as an investment-grade automotive artifact." }
    ]
  }
];

fs.writeFileSync(projectsPath, JSON.stringify(projects, null, 2));
console.log("Updated projects.json successfully");
