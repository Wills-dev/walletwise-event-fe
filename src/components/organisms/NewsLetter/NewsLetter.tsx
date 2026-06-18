import Container from "@/components/atom/Container/Container";

const NewsLetter = () => {
  return (
    <section>
      <Container>
        <div className="rounded-[24px] py-10 sm:px-8 px-6 bg-[#A53D41]">
          <div className="flex items-center justify-between flex-wrap gap-10">
            <div className="">
              <h6 className="sm:text-[28px] text-2xl font-semibold text-white">
                New events drop regularly
              </h6>
              <p className="text-white/60 sm:text-xl text-lg font-medium">
                Be the first to know
              </p>
            </div>
            <form className="max-w-84.25 w-full min-w-72.5 border border-[#E5E5E5] flex items-center gap-11 bg-white pr-1 py-1 pl-4 rounded-[12px]">
              <input
                type="text"
                className="h-6 flex-1 w-full bg-inherit outline-none placeholder:text-[#737373] font-medium"
                placeholder="Enter email address"
              />
              <button className="bg-[#5A27CC] text-white py-2 px-4 rounded-[10px] text-sm">
                Notify me
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsLetter;
