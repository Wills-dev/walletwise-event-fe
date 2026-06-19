import SummaryCard from "@/components/atom/SummaryCard/SummaryCard";

const EventHighlights = () => {
  return (
    <div className="max-w-212 w-full space-y-8">
      <div className="space-y-4">
        <h4 className="text-[#262626] sm:text-[20px] text-lg font-semibold">
          Burna boy- Live at Eko Convention Centre
        </h4>
        <div className="flex flex-wrap gap-6">
          <SummaryCard
            iconUrl="/assets/icons/Users.svg"
            desc="Seats left"
            value="620"
          />
          <SummaryCard
            iconUrl="/assets/icons/Ticket.png"
            desc="Ticket tiers"
            value="4"
          />
          <SummaryCard
            iconUrl="/assets/icons/Music4.svg"
            desc="Expected songs"
            value="20+"
          />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default EventHighlights;
