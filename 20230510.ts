/* Recreate a accordian component using React */

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AccordianContext = createContext<{
  setOpenItemId: React.Dispatch<React.SetStateAction<number>>;
  openItemId: number;
} | null>(null);

function App() {
  const [openItemId, setOpenItemId] = useState<number>(0);

  return (
    <AccordianContext.Provider value={{ setOpenItemId, openItemId }}>
      <AccordianItem id={1} title="title 1">
        description 1
      </AccordianItem>
      <AccordianItem id={2} title="title 2">
        description 2
      </AccordianItem>
      <AccordianItem id={3} title="title 3">
        description 3
      </AccordianItem>
    </AccordianContext.Provider>
  );
}

export default App;

interface Props {
  id: number;
  title: string;
}

function AccordianItem({ id, title, children }: PropsWithChildren<Props>) {
  const Active = useContext(AccordianContext)!;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(id === Active?.openItemId);
  }, [id, Active.openItemId]);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    Active.setOpenItemId(!isOpen ? id : 0);
  };

  return (
    <div onClick={handleClick} style={{ border: "solid 2px #ccc" }}>
      <p>{title}</p>
      <div style={{ display: isOpen ? "block" : "none" }}>{children}</div>
    </div>
  );
}
