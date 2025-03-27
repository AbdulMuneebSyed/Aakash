import Image from "next/image";
import { ChevronDown } from "lucide-react";
import bg from "@/public/bgpic.jpeg"
export default function ArchitectureServices() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] flex items-center justify-center">
        <Image
          src={bg}
          alt="Modern architecture building"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-2">OUR SERVICES</h1>
          <p className="text-sm tracking-wider">
            HERE ARE SOME OF OUR SERVICES WE OFFER
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-gray-100 py-8 text-center">
        <p className="text-sm font-medium">
          LET'S HAVE A LOOK AT OUR{" "}
          <span className="font-bold">AMAZING SERVICES</span>
        </p>
        <div className="flex justify-center mt-2">
          <div className="w-8 h-1 bg-yellow-400"></div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center">
            <div className="w-2 h-6 bg-white"></div>
          </div>
          <h2 className="text-sm font-bold uppercase">OUR SERVICES</h2>
          <p className="text-xs text-gray-500">
            Here are some of our services we offer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Architecture */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-2 border-yellow-400 flex items-center justify-center mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Architecture icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-sm font-bold uppercase text-black mb-2">ARCHITECTURE</h3>
            <p className="text-xs text-center text-gray-600 mb-4">
              As a growing Architectural firm, we are updated with the ongoing
              styles and aim to provide solutions that stand out.
            </p>
            <button className="bg-yellow-400 text-xs font-medium py-2 px-4 uppercase">
              What we offer
            </button>
          </div>

          {/* Interior Design */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-2 border-yellow-400 flex items-center justify-center mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Interior Design icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-sm font-bold uppercase mb-2">
              INTERIOR DESIGN
            </h3>
            <p className="text-xs text-center text-gray-600">
              We start with the aim that the client needs our support in
              achieving an interior environment.
            </p>
          </div>

          {/* Structural Design */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-2 border-yellow-400 flex items-center justify-center mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Structural Design icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-sm font-bold uppercase mb-2">
              STRUCTURAL DESIGN
            </h3>
            <p className="text-xs text-center text-gray-600">
              Our team comprises of experienced structural engineers who have
              worked on a wide range of projects.
            </p>
          </div>

          {/* Turn-key Contract */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-2 border-yellow-400 flex items-center justify-center mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Turn-key Contract icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-sm font-bold uppercase mb-2">
              TURN-KEY CONTRACT
            </h3>
            <p className="text-xs text-center text-gray-600">
              We respect the design provided to us and ensure that it has been
              executed to meet both client and designers satisfaction.
            </p>
          </div>

          {/* PMC */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-2 border-yellow-400 flex items-center justify-center mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="PMC icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-sm font-bold uppercase mb-2">PMC</h3>
            <p className="text-xs text-center text-gray-600">
              The success of any construction project depends upon the
              appropriate project management team who can understand all aspects
              of construction - design, materials, quality control, costing and
              the importance of safety.
            </p>
          </div>

          {/* Home Automation */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-2 border-yellow-400 flex items-center justify-center mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Home Automation icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-sm font-bold uppercase mb-2">
              HOME AUTOMATION
            </h3>
            <p className="text-xs text-center text-gray-600">
              Comfort, security and energy management with home automation is
              the latest trend in residential and commercial building. Our over
              offers home solutions tailored to your needs. Close your curtains
              with one click, dim your lights for a cozy night in or turn off
              everything when you leave the house.
            </p>
          </div>

          {/* Online Tracking */}
          <div className="flex flex-col items-center md:col-start-2 lg:col-start-auto">
            <div className="w-24 h-24 rounded-full border-2 border-yellow-400 flex items-center justify-center mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Online Tracking icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-sm font-bold uppercase mb-2">
              ONLINE TRACKING
            </h3>
            <p className="text-xs text-center text-gray-600">
              Track the progress of your House Construction via our Website or
              smart app.
            </p>
          </div>
        </div>
      </div>

      {/* Learn More Section */}
      <div className="py-8 px-4 md:px-8 lg:px-16 bg-teal-50 text-black">
        <h2 className="text-xl font-bold mb-4">
          Learn More About Our Services
        </h2>

        {/* Architecture Accordion */}
        <div className="mb-2">
          <div className="bg-yellow-400 p-3 flex items-center">
            <ChevronDown className="w-4 h-4 mr-2" />
            <span className="font-bold text-sm">ARCHITECTURE</span>
          </div>
          <div className="p-4 border border-gray-200">
            <p className="text-sm mb-2">
              As a growing Architectural firm, we are updated with the ongoing
              styles and aim to provide solutions that stand out.
            </p>
            <p className="text-sm mb-2">
              We believe that everything follows a function. Hence, a practical
              design is our primary offering.
            </p>
            <p className="text-sm">
              As architects, environmental sensitivity is our primary
              responsibility. All our designs pave the way towards conservation
              in construction.
            </p>
          </div>
        </div>

        {/* Interior Design Accordion */}
        <div className="mb-2">
          <div className="bg-yellow-400 p-3 flex items-center">
            <ChevronDown className="w-4 h-4 mr-2" />
            <span className="font-bold text-sm">INTERIOR DESIGN</span>
          </div>
          <div className="p-4 border border-gray-200">
            <p className="text-sm mb-2">
              We start with the aim that the client needs our support in
              achieving an interior environment.
            </p>
            <p className="text-sm mb-2">
              We then communicate primarily to understand the client's thoughts
              which will provide the base for the requirement.
            </p>
            <p className="text-sm mb-2">
              We work to translate these thoughts into design concepts and
              visualizations.
            </p>
            <p className="text-sm">
              We believe that design evolves through communication and hence we
              make client interaction, our way forward.
            </p>
          </div>
        </div>

        {/* Structural Design Accordion */}
        <div className="mb-2">
          <div className="bg-yellow-400 p-3 flex items-center">
            <ChevronDown className="w-4 h-4 mr-2" />
            <span className="font-bold text-sm">STRUCTURAL DESIGN</span>
          </div>
          <div className="p-4 border border-gray-200">
            <p className="text-sm mb-2">
              Our team comprises of experienced structural engineers who have
              worked on a wide range of projects.
            </p>
            <p className="text-sm mb-2">
              We place a strong emphasis on producing the economical design
              without compromising on safety.
            </p>
            <p className="text-sm mb-2">
              With our team of distinguished professionals, we are able to serve
              our clients with Connection Design services.
            </p>
            <p className="text-sm mb-2">
              Once the drawings are approved by the Client/Architect/Consultant,
              we carry out the detailed structural analysis, review, and design.
            </p>
            <p className="text-sm">
              The design and drawings are prepared according to relevant Codes &
              Standards applicable to the project.
            </p>
          </div>
        </div>

        {/* Turn-key Contract Accordion */}
        <div className="mb-2">
          <div className="bg-yellow-400 p-3 flex items-center">
            <ChevronDown className="w-4 h-4 mr-2" />
            <span className="font-bold text-sm">TURN-KEY CONTRACT</span>
          </div>
          <div className="p-4 border border-gray-200">
            <p className="text-sm mb-2">
              We respect the design provided to us and ensure that it has been
              executed to meet both client and designers satisfaction.
            </p>
            <p className="text-sm mb-2">
              Working within given time frames without compromising on quality
              is the primary method of our work.
            </p>
            <p className="text-sm mb-2">
              We take full responsibility during design execution.
            </p>
            <p className="text-sm">
              We Deal With All Type Of Constructions Work For:
            </p>
            <p className="text-sm">
              • Independent Houses • Residential Apartment • Commercial
              Buildings • Office Buildings, School Buildings • Hospitals •
              Industrial Sheds • Warehouses, Etc.
            </p>
          </div>
        </div>

        {/* PMC Accordion */}
        <div className="mb-2">
          <div className="bg-yellow-400 p-3 flex items-center">
            <ChevronDown className="w-4 h-4 mr-2" />
            <span className="font-bold text-sm">PMC</span>
          </div>
          <div className="p-4 border border-gray-200">
            <p className="text-sm mb-2">
              The success of any construction project depends upon the
              appropriate project management team who can understand all aspects
              of construction – design, materials, quality control, costing and
              the importance of safety.
            </p>
            <p className="text-sm mb-2">
              The Project does not end at the stage of drawing approval. During
              execution, we would supervise and control all the aspects in
              relation To timely Completion, Design, Client Satisfaction.
            </p>

            <p className="text-sm font-bold mt-4">Pre-Award Services:</p>
            <ul className="text-sm list-none ml-4">
              <li>• Quantity & Cost Estimation</li>
              <li>• Quality Control, Safety & Environmental Plan</li>
              <li>• Detailed Project Schedule</li>
              <li>• Preparing Bid Documents</li>
              <li>• Evaluating Bids from contractors</li>
              <li>• Negotiations with Contractors</li>
            </ul>

            <p className="text-sm font-bold mt-4">
              Construction Phase Services:
            </p>
            <ul className="text-sm list-none ml-4">
              <li>• Quality Control at Site</li>
              <li>• Keeping project within schedule</li>
              <li>• Safety Management</li>
              <li>• Cost Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
