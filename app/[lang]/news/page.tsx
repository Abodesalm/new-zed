import Report from "@/components/Report";
import Header from "@/sections/Header";

export default async function News() {
  return (
    <div className="pad pt-[0_!important] w-full">
      <Header />
      <Report
        title={`news 1`}
        content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam aut excepturi illum magnam facilis et adipisci minus, ipsa doloribus ab distinctio pariatur tempora accusantium suscipit quibusdam doloremque error dolor dolore.`}
      />
      <Report
        title={`news 2`}
        content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam aut excepturi illum magnam facilis et adipisci minus, ipsa doloribus ab distinctio pariatur tempora accusantium suscipit quibusdam doloremque error dolor dolore.`}
      />
      <Report
        title={`news 3`}
        content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam aut excepturi illum magnam facilis et adipisci minus, ipsa doloribus ab distinctio pariatur tempora accusantium suscipit quibusdam doloremque error dolor dolore.`}
      />
      <Report
        title={`news 4`}
        content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam aut excepturi illum magnam facilis et adipisci minus, ipsa doloribus ab distinctio pariatur tempora accusantium suscipit quibusdam doloremque error dolor dolore.`}
      />
    </div>
  );
}
