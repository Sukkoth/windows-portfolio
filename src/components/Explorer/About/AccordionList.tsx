import { accordionData } from "./data";
import AccordionItem from "./AccordionItem";

function AccordionList() {
  return (
    <div className=' md:w-1/2 p-5 pt-3 flex flex-col gap-3 h-fit'>
      {accordionData.map((item, index) => (
        <AccordionItem {...item} open={index === 0} key={index} />
      ))}
    </div>
  );
}

export default AccordionList;
