import React from "react";

import devboard from "devboard";

const definecard = devboard.ns("3. <Footer />");

import DemoBox from "./DemoBox";
import Footer from "../components/Footer";

// const style = {
//   boxShadow: "none"
// }

definecard(
  `
  This component represents the whole footer
  `
);

definecard("Sample",
  <DemoBox>
    <Footer total={5} completed={3} />
  </DemoBox>
);


definecard("when nothing need to be done ",
  <DemoBox>
    <Footer total={0} completed={0}/>
  </DemoBox>
);

definecard("when ClearCompleted ",
  <DemoBox>
    <Footer total={3} completed={0} />
  </DemoBox>
);
definecard("when Active is clicked ",
  <DemoBox>
    <Footer total={5} completed={2}  filter="active"/>
  </DemoBox>
);
definecard("when completed is clicked ",
  <DemoBox>
    <Footer total={5} completed={2} filter="completed"/>
  </DemoBox>
);
