import { Accordion } from "@fluentui/react-accordion";
import { InsertActionItem1, InsertActionItem2, InsertActionItem3 } from './InsertActionItems';

const App = () => {
  return (
    <Accordion multiple collapsible>
      <InsertActionItem1 />
      <InsertActionItem2 />
      <InsertActionItem3 />
    </Accordion>
  );
}

export default App
