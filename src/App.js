import "./styles.css";
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { Styled } from "./components/Styled";
import { StyleComponents } from "./components/StyleComponents";
import { Emotion } from "./components/Emotion";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <Styled />
      <StyleComponents />
      <Emotion />
    </div>
  );
}
