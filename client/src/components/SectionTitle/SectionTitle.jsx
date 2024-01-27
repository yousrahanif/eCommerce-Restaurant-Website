
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center font-semibold md:w-4/12 my-8">
            <p className="text-2xl text-yellow-700 mb-2">{subHeading}</p>
            <h3 className="text-3xl font-bold uppercase border-y-4 py-4">{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;